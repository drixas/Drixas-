let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `
const menuHeader = 
✧━━━━━━ 𝐈𝐍𝐅𝐎-𝐁𝐎𝐓 𝐌𝐄𝐍𝐔 ━━━━━━✧

⟆ 𝐇𝐨𝐥𝐚! 𝐒𝐨𝐲 *${botname}* 𓆩❤𓆪
⟆ 𝐀𝐪𝐮í 𝐭𝐢𝐞𝐧𝐞𝐬 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬:

╭─⊷ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐂𝐈Ó𝐍 ──
│ 🧑‍💻 𝐂𝐥𝐢𝐞𝐧𝐭𝐞 » @${userId.split('@')[0]}
│ 🌐 𝐌𝐨𝐝𝐨 » 𝐏𝐮𝐛𝐥𝐢𝐜𝐨
│ 🤖 𝐁𝐨𝐭 » ${(conn.user.jid == global.conn.user.jid ? '𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐚𝐥 🅥' : '𝐏𝐫𝐞𝐦 𝐁𝐨𝐭 🅑')}
│ 🔥 𝐀𝐜𝐭𝐢𝐯𝐚𝐝𝐚 » ${uptime}
│ 👥 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 » ${totalreg}
│ 🛠️ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 » ${totalCommands}
│ 🛰️ 𝐁𝐚𝐢𝐥𝐞𝐲𝐬 » 𝐌𝐮𝐥𝐭𝐢 𝐃𝐞𝐯𝐢𝐜𝐞
╰─────────────⊶✦⊷

✪ 𝐂𝐫𝐞𝐚 𝐮𝐧 *𝐒𝐮𝐛-𝐁𝐨𝐭* 𝐜𝐨𝐧 𝐭𝐮 𝐧ú𝐦𝐞𝐫𝐨 𝐮𝐬𝐚𝐧𝐝𝐨 *#qr* 𝐨 *#code* ✪


`✦━〔 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 〕━✦

┣ 📖 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐞𝐬𝐭𝐚𝐝𝐨 𝐞 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧:
┃
┣ 🆘 𝐇𝐞𝐥𝐩 / 𝐌𝐞𝐧𝐮: *#help*, *#menu*
┃    ➥ 📋 𝐋𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.
┣ ⏳ 𝐔𝐩𝐭𝐢𝐦𝐞 / 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: *#uptime*, *#runtime*
┃    ➥ ⏱️ 𝐓𝐢𝐞𝐦𝐩𝐨 𝐚𝐜𝐭𝐢𝐯𝐨 𝐝𝐞𝐥 𝐁𝐨𝐭.
┣ 📂 𝐒𝐜 / 𝐒𝐜𝐫𝐢𝐩𝐭: *#sc*, *#script*
┃    ➥ 💾 𝐑𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨 𝐨𝐟𝐢𝐜𝐢𝐚𝐥.
┣ 👑 𝐒𝐭𝐚𝐟𝐟 / 𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫𝐞𝐬: *#staff*, *#colaboradores*
┃    ➥ 👨‍💻 𝐃𝐞𝐬𝐚𝐫𝐫𝐨𝐥𝐥𝐚𝐝𝐨𝐫𝐞𝐬 𝐝𝐞𝐥 𝐁𝐨𝐭.
┣ 🤖 𝐒𝐞𝐫𝐛𝐨𝐭: *#serbot*, *#serbot code*
┃    ➥ 🧩 𝐂𝐫𝐞𝐚 𝐮𝐧𝐚 𝐬𝐞𝐬𝐢𝐨́𝐧 𝐝𝐞 𝐒𝐮𝐛-𝐁𝐨𝐭.
┣ 🤝 𝐁𝐨𝐭𝐬 / 𝐒𝐨𝐜𝐤𝐞𝐭𝐬: *#bots*, *#sockets*
┃    ➥ 📡 𝐕𝐞𝐫 𝐒𝐮𝐛-𝐁𝐨𝐭𝐬 𝐚𝐜𝐭𝐢𝐯𝐨𝐬.
┣ 👤 𝐂𝐫𝐞𝐚𝐝𝐨𝐫: *#creador*
┃    ➥ 📞 𝐂𝐨𝐧𝐭𝐚𝐜𝐭𝐨 𝐝𝐞𝐥 𝐜𝐫𝐞𝐚𝐝𝐨𝐫.
┣ 📊 𝐄𝐬𝐭𝐚𝐝𝐨: *#status*, *#estado*
┃    ➥ 💡 𝐕𝐞𝐫 𝐞𝐬𝐭𝐚𝐝𝐨 𝐚𝐜𝐭𝐮𝐚𝐥 𝐝𝐞𝐥 𝐁𝐨𝐭.
┣ 🔗 𝐋𝐢𝐧𝐤𝐬 / 𝐆𝐫𝐮𝐩𝐨𝐬: *#links*, *#grupos*
┃    ➥ 🌐 𝐄𝐧𝐥𝐚𝐜𝐞𝐬 𝐨𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬.
┣ ℹ️ 𝐈𝐧𝐟𝐨𝐁𝐨𝐭: *#infobot*
┃    ➥ 📝 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨́𝐧 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐚.
┣ 💡 𝐒𝐮𝐠 / 𝐍𝐞𝐰𝐂𝐨𝐦𝐦𝐚𝐧𝐝: *#sug*, *#newcommand*
┃    ➥ 💭 𝐒𝐮𝐠𝐞𝐫𝐞 𝐮𝐧 𝐧𝐮𝐞𝐯𝐨 𝐜𝐨𝐦𝐚𝐧𝐝𝐨.
┣ 🏓 𝐏 / 𝐏𝐢𝐧𝐠: *#p*, *#ping*
┃    ➥ ⚡ 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 𝐝𝐞 𝐫𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚.
┣ 🚩 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 / 𝐑𝐞𝐩𝐨𝐫𝐭𝐚𝐫: *#reporte*, *#reportar*
┃    ➥ 🐞 𝐑𝐞𝐩𝐨𝐫𝐭𝐚 𝐟𝐚𝐥𝐥𝐚𝐬 𝐨 𝐩𝐫𝐨𝐛𝐥𝐞𝐦𝐚𝐬.
┣ 🖥️ 𝐒𝐢𝐬𝐭𝐞𝐦𝐚 / 𝐒𝐲𝐬𝐭𝐞𝐦: *#sistema*, *#system*
┃    ➥ ⚙️ 𝐄𝐬𝐭𝐚𝐝𝐨 𝐝𝐞 𝐚𝐥𝐨𝐣𝐚𝐦𝐢𝐞𝐧𝐭𝐨.
┣ 🚀 𝐒𝐩𝐞𝐞𝐝 / 𝐒𝐩𝐞𝐞𝐝𝐭𝐞𝐬𝐭: *#speed*, *#speedtest*
┃    ➥ 📈 𝐄𝐬𝐭𝐚𝐝𝐢́𝐬𝐭𝐢𝐜𝐚𝐬 𝐝𝐞 𝐯𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝.
┣ 👥 𝐕𝐢𝐞𝐰𝐬 / 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬: *#views*, *#usuarios*
┃    ➥ 🔢 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬.
┣ 🛠️ 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 / 𝐓𝐨𝐭𝐚𝐥𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬: *#funciones*, *#totalfunciones*
┃    ➥ 🧩 𝐓𝐨𝐝𝐚𝐬 𝐥𝐚𝐬 𝐟𝐮𝐧𝐜𝐢𝐨𝐧𝐞𝐬 𝐝𝐞𝐥 𝐁𝐨𝐭.
┣ 🧹 𝐃𝐒 / 𝐅𝐢𝐱𝐌𝐬𝐠𝐄𝐬𝐩𝐞𝐫𝐚: *#ds*, *#fixmsgespera*
┃    ➥ 🗑️ 𝐄𝐥𝐢𝐦𝐢𝐧𝐚𝐫 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐢𝐧𝐧𝐞𝐜𝐞𝐬𝐚𝐫𝐢𝐨𝐬.
┣ 📝 𝐄𝐝𝐢𝐭𝐀𝐮𝐭𝐨𝐑𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫: *#editautoresponder*
┃    ➥ ✏️ 𝐂𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐫 𝐏𝐫𝐨𝐦𝐩𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨.
╰━━━━━━━━━━━━━━━━━━━━━━╯`;

• :･ﾟ⊹˚• \`『 Buscadores 』\` •˚⊹:･ﾟ•

❍ Comandos para realizar búsquedas en distintas plataformas.
ᰔᩚ *#tiktoksearch • #tiktoks*
> ✦ Buscador de videos de tiktok.
ᰔᩚ *#tweetposts*
> ✦ Buscador de posts de Twitter/X.
ᰔᩚ *#ytsearch • #yts*
> ✦ Realiza búsquedas de Youtube.
ᰔᩚ *#githubsearch*
> ✦ Buscador de usuarios de GitHub.
ᰔᩚ *#cuevana • #cuevanasearch*
> ✦ Buscador de películas/series por Cuevana.
ᰔᩚ *#google*
> ✦ Realiza búsquedas por Google.
ᰔᩚ *#pin • #pinterest*
> ✦ Buscador de imagenes de Pinterest.
ᰔᩚ *#imagen • #image*
> ✦ buscador de imagenes de Google.
ᰔᩚ *#infoanime*
> ✦ Buscador de información de anime/manga.
ᰔᩚ *#hentaisearch • #searchhentai*
> ✦ Buscador de capítulos hentai.
ᰔᩚ #xnxxsearch • #xnxxs*
> ✦ Buscador de vídeos de Xnxx.
ᰔᩚ *#xvsearch • #xvideossearch*
> ✦ Buscador de vídeos de Xvideos.
ᰔᩚ *#pornhubsearch • #phsearch*
> ✦ Buscador de videos de Pornhub.
ᰔᩚ *#npmjs*
> ✦ Buscandor de npmjs.

• :･ﾟ⊹˚• \`『 Descargas 』\` •˚⊹:･ﾟ•

❍ Comandos de descargas para varios archivos.
ᰔᩚ *#tiktok • #tt*
> ✦ Descarga videos de TikTok.
ᰔᩚ *#mediafire • #mf*
> ✦ Descargar un archivo de MediaFire.
ᰔᩚ *#pinvid • #pinvideo* + [enlacé]
> ✦ Descargar vídeos de Pinterest. 
ᰔᩚ *#mega • #mg* + [enlacé]
> ✦ Descargar un archivo de MEGA.
ᰔᩚ *#play • #play2*
> ✦ Descarga música/video de YouTube.
ᰔᩚ *#ytmp3 • #ytmp4*
> ✦ Descarga música/video de YouTube mediante url.
ᰔᩚ *#fb • #facebook*
> ✦ Descarga videos de Facebook.
ᰔᩚ *#twitter • #x* + [Link]
> ✦ Descargar un video de Twitter/X
ᰔᩚ *#ig • #instagram*
> ✦ Descarga contenido de Instagram.
ᰔᩚ *#tts • #tiktoks* + [busqueda]
> ✦ Buscar videos de tiktok 
ᰔᩚ *#terabox • #tb* + [enlace]
> ✦ Descargar archivos por Terabox.
ᰔᩚ *#ttimg • #ttmp3* + <url>
> ✦ Descarga fotos/audios de tiktok. 
ᰔᩚ *#gitclone* + <url> 
> ✦ Descarga un repositorio de github.
ᰔᩚ *#xvideosdl*
> ✦ Descarga videos porno de (Xvideos). 
ᰔᩚ *#xnxxdl*
> ✦ Descarga videos porno de (xnxx).
ᰔᩚ *#apk • #modapk*
> ✦ Descarga un apk de Aptoide.
ᰔᩚ *#tiktokrandom • #ttrandom*
> ✦ Descarga un video aleatorio de tiktok.
ᰔᩚ *#npmdl • #npmdownloader*
> ✦ Descarga paquetes de NPMJs.

• :･ﾟ⊹˚• \`『 Economia 』\` •˚⊹:･ﾟ•

❍ Comandos de economía y rpg para ganar dinero y otros recursos.
ᰔᩚ *#w • #work • #trabajar*
> ✦ Trabaja para ganar ${moneda}.
ᰔᩚ *#slut • #protituirse*
> ✦ Trabaja como prostituta y gana ${moneda}.
ᰔᩚ *#cf • #suerte*
> ✦ Apuesta tus ${moneda} a cara o cruz.
ᰔᩚ *#crime • #crimen
> ✦ Trabaja como ladrón para ganar ${moneda}.
ᰔᩚ *#ruleta • #roulette • #rt*
> ✦ Apuesta ${moneda} al color rojo o negro.
ᰔᩚ *#casino • #apostar*
> ✦ Apuesta tus ${moneda} en el casino.
ᰔᩚ *#slot*
> ✦ Apuesta tus ${moneda} en la ruleta y prueba tu suerte.
ᰔᩚ *#cartera • #wallet*
> ✦ Ver tus ${moneda} en la cartera.
ᰔᩚ *#banco • #bank*
> ✦ Ver tus ${moneda} en el banco.
ᰔᩚ *#deposit • #depositar • #d*
> ✦ Deposita tus ${moneda} al banco.
ᰔᩚ *#with • #retirar • #withdraw*
> ✦ Retira tus ${moneda} del banco.
ᰔᩚ *#transfer • #pay*
> ✦ Transfiere ${moneda} o XP a otros usuarios.
ᰔᩚ *#miming • #minar • #mine*
> ✦ Trabaja como minero y recolecta recursos.
ᰔᩚ *#buyall • #buy*
> ✦ Compra ${moneda} con tu XP.
ᰔᩚ *#daily • #diario*
> ✦ Reclama tu recompensa diaria.
ᰔᩚ *#cofre*
> ✦ Reclama un cofre diario lleno de recursos.
ᰔᩚ *#weekly • #semanal*
> ✦ Reclama tu regalo semanal.
ᰔᩚ *#monthly • #mensual*
> ✦ Reclama tu recompensa mensual.
ᰔᩚ *#steal • #robar • #rob*
> ✦ Intenta robarle ${moneda} a alguien.
ᰔᩚ *#robarxp • #robxp*
> ✦ Intenta robar XP a un usuario.
ᰔᩚ *#eboard • #baltop*
> ✦ Ver el ranking de usuarios con más ${moneda}.
ᰔᩚ *#aventura • #adventure*
> ✦ Aventúrate en un nuevo reino y recolecta recursos.
ᰔᩚ *#curar • #heal*
> ✦ Cura tu salud para volverte aventurar.
ᰔᩚ *#cazar • #hunt • #berburu*
> ✦ Aventúrate en una caza de animales.
ᰔᩚ *#inv • #inventario*
> ✦ Ver tu inventario con todos tus ítems.
ᰔᩚ *#mazmorra • #explorar*
> ✦ Explorar mazmorras para ganar ${moneda}.
ᰔᩚ *#halloween*
> ✦ Reclama tu dulce o truco (Solo en Halloween).
ᰔᩚ *#christmas • #navidad*
> ✦ Reclama tu regalo navideño (Solo en Navidad).

• :･ﾟ⊹˚• \`『 Gacha 』\` •˚⊹:･ﾟ•

❍ Comandos de gacha para reclamar y colecciónar personajes.
ᰔᩚ *#rollwaifu • #rw • #roll*
> ✦ Waifu o husbando aleatorio.
ᰔᩚ  *#claim • #c • #reclamar*
> ✦ Reclamar un personaje.
ᰔᩚ *#harem • #waifus • #claims*
> ✦ Ver tus personajes reclamados.
ᰔᩚ *#charimage • #waifuimage • #wimage* 
> ✦ Ver una imagen aleatoria de un personaje.
ᰔᩚ *#charinfo • #winfo • #waifuinfo*
> ✦ Ver información de un personaje.
ᰔᩚ *#givechar • #givewaifu • #regalar*
> ✦ Regalar un personaje a otro usuario.
ᰔᩚ *#vote • #votar*
> ✦ Votar por un personaje para subir su valor.
ᰔᩚ *#waifusboard • #waifustop • #topwaifus*
> ✦ Ver el top de personajes con mayor valor.

• :･ﾟ⊹˚• \`『 Stickers 』\` •˚⊹:･ﾟ•

❍ Comandos para creaciones de stickers etc.
ᰔᩚ *#sticker • #s*
> ✦ Crea stickers de (imagen/video)
ᰔᩚ *#setmeta*
> ✦ Estable un pack y autor para los stickers.
ᰔᩚ *#delmeta*
> ✦ Elimina tu pack de stickers.
ᰔᩚ *#pfp • #getpic*
> ✦ Obtén la foto de perfil de un usuario.
ᰔᩚ *#qc*
> ✦ Crea stickers con texto o de un usuario.
ᰔᩚ *#toimg • #img*
> ✦ Convierte stickers en imagen.
ᰔᩚ *#brat • #ttp • #attp*︎ 
> ✦ Crea stickers con texto.
ᰔᩚ *#emojimix*
> ✦ Fuciona 2 emojis para crear un sticker.
ᰔᩚ *#wm*
> ✦ Cambia el nombre de los stickers.

•:･ﾟ⊹˚• \`『 Herramientas 』\` •˚⊹:･ﾟ•

❍ Comandos de herramientas con muchas funciones.
ᰔᩚ *#calcular • #calcular • #cal*
> ✦ Calcular todo tipo de ecuaciones.
ᰔᩚ *#tiempo • #clima*
> ✦ Ver el clima de un pais.
ᰔᩚ *#horario*
> ✦ Ver el horario global de los países.
ᰔᩚ *#fake • #fakereply*
> ✦ Crea un mensaje falso de un usuario.
ᰔᩚ *#enhance • #remini • #hd*
> ✦ Mejora la calidad de una imagen.
ᰔᩚ *#letra*
> ✦ Cambia la fuente de las letras.
ᰔᩚ *#read • #readviewonce • #ver*
> ✦ Ver imágenes de una sola vista.
ᰔᩚ *#whatmusic • #shazam*
> ✦ Descubre el nombre de canciones o vídeos.
ᰔᩚ *#ss • #ssweb*
> ✦ Ver el estado de una página web.
ᰔᩚ *#length • #tamaño*
> ✦ Cambia el tamaño de imágenes y vídeos.
ᰔᩚ *#say • #decir* + [texto]
> ✦ Repetir un mensaje.
ᰔᩚ *#todoc • #toducument*
> ✦ Crea documentos de (audio, imágenes y vídeos).
ᰔᩚ *#translate • #traducir • #trad*
> ✦ Traduce palabras en otros idiomas.

• :･ﾟ⊹˚• \`『 Perfil 』\` •˚⊹:･ﾟ•

❍ Comandos de perfil para ver, configurar y comprobar estados de tu perfil.
ᰔᩚ *#reg • #verificar • #register*
> ✦ Registra tu nombre y edad en el bot.
ᰔᩚ *#unreg*
> ✦ Elimina tu registro del bot.
ᰔᩚ *#profile*
> ✦ Muestra tu perfil de usuario.
ᰔᩚ *#marry* [mension / etiquetar]
> ✦ Propón matrimonio a otro usuario.
ᰔᩚ *#divorce*
> ✦ Divorciarte de tu pareja.
ᰔᩚ *#setgenre • #setgenero*
> ✦ Establece tu género en el perfil del bot.
ᰔᩚ *#delgenre • #delgenero*
> ✦ Elimina tu género del perfil del bot.
ᰔᩚ *#setbirth • #setnacimiento*
> ✦ Establece tu fecha de nacimiento en el perfil del bot.
ᰔᩚ *#delbirth • #delnacimiento*
> ✦ Elimina tu fecha de nacimiento del perfil del bot.
ᰔᩚ *#setdescription • #setdesc*
> ✦ Establece una descripción en tu perfil del bot.
ᰔᩚ *#deldescription • #deldesc*
> ✦ Elimina la descripción de tu perfil del bot.
ᰔᩚ *#lb • #lboard* + <Paginá>
> ✦ Top de usuarios con más (experiencia y nivel).
ᰔᩚ *#level • #lvl* + <@Mencion>
> ✦ Ver tu nivel y experiencia actual.
ᰔᩚ *#comprarpremium • #premium*
> ✦ Compra un pase premium para usar el bot sin límites.
ᰔᩚ *#confesiones • #confesar*
> ✦ Confiesa tus sentimientos a alguien de manera anonima.

• :･ﾟ⊹˚• \`『 Grupos 』\` •˚⊹:･ﾟ•

❍ Comandos de grupos para una mejor gestión de ellos.
ᰔᩚ *#hidetag*
> ✦ Envia un mensaje mencionando a todos los usuarios
ᰔᩚ *#gp • #infogrupo*
> ✦  Ver la Informacion del grupo.
ᰔᩚ *#linea • #listonline*
> ✦ Ver la lista de los usuarios en linea.
ᰔᩚ *#setwelcome*
> ✦ Establecer un mensaje de bienvenida personalizado.
ᰔᩚ *#setbye*
> ✦ Establecer un mensaje de despedida personalizado.
ᰔᩚ *#link*
> ✦ El bot envia el link del grupo.
ᰔᩚ *admins • admin*
> ✦ Mencionar a los admins para solicitar ayuda.
ᰔᩚ *#restablecer • #revoke*
> ✦ Restablecer el enlace del grupo.
ᰔᩚ *#grupo • #group* [open / abrir]
> ✦ Cambia ajustes del grupo para que todos los usuarios envien mensaje.
ᰔᩚ *#grupo • #gruop* [close / cerrar]
> ✦ Cambia ajustes del grupo para que solo los administradores envien mensaje.
ᰔᩚ *#kick* [número / mension]
> ✦ Elimina un usuario de un grupo.
ᰔᩚ *#add • #añadir • #agregar* [número]
> ✦ Invita a un usuario a tu grupo.
ᰔᩚ *#promote* [mension / etiquetar]
> ✦ El bot dara administrador al usuario mencionando.
ᰔᩚ *#demote* [mension / etiquetar]
> ✦ El bot quitara administrador al usuario mencionando.
ᰔᩚ *#gpbanner • #groupimg*
> ✦ Cambiar la imagen del grupo.
ᰔᩚ *#gpname • #groupname*
> ✦ Cambiar el nombre del grupo.
ᰔᩚ *#gpdesc • #groupdesc*
> ✦ Cambiar la descripción del grupo.
ᰔᩚ *#advertir • #warn • #warning*
> ✦ Darle una advertencia aún usuario.
ᰔᩚ ︎*#unwarn • #delwarn*
> ✦ Quitar advertencias.
ᰔᩚ *#advlist • #listadv*
> ✦ Ver lista de usuarios advertidos.
ᰔᩚ *#bot on*
> ✦ Enciende el bot en un grupo.
ᰔᩚ *#bot off*
> ✦ Apaga el bot en un grupo.
ᰔᩚ *#mute* [mension / etiquetar]
> ✦ El bot elimina los mensajes del usuario.
ᰔᩚ *#unmute* [mension / etiquetar]
> ✦ El bot deja de eliminar los mensajes del usuario.
ᰔᩚ *#encuesta • #poll*
> ✦ Crea una encuesta.
ᰔᩚ *#delete • #del*
> ✦ Elimina mensaje de otros usuarios.
ᰔᩚ *#fantasmas*
> ✦ Ver lista de inactivos del grupo.
ᰔᩚ *#kickfantasmas*
> ✦ Elimina a los inactivos del grupo.
ᰔᩚ *#invocar • #tagall • #todos*
> ✦ Invoca a todos los usuarios de un grupo.
ᰔᩚ *#setemoji • #setemo*
> ✦ Cambia el emoji que se usa en la invitación de usuarios.
ᰔᩚ *#listnum • #kicknum*
> ✦ Elimine a usuario por el prefijo de país.

• :･ﾟ⊹˚• \`『 Anime 』\` •˚⊹:･ﾟ•

❍ Comandos de reacciones de anime.
ᰔᩚ *#angry • #enojado* + <mencion>
> ✦ Estar enojado
ᰔᩚ *#bite* + <mencion>
> ✦ Muerde a alguien
ᰔᩚ *#bleh* + <mencion>
> ✦ Sacar la lengua
ᰔᩚ *#blush* + <mencion>
> ✦ Sonrojarte
ᰔᩚ *#bored • #aburrido* + <mencion>
> ✦ Estar aburrido
ᰔᩚ *#cry* + <mencion>
> ✦ Llorar por algo o alguien
ᰔᩚ *#cuddle* + <mencion>
> ✦ Acurrucarse
ᰔᩚ *#dance* + <mencion>
> ✦ Sacate los pasitos prohíbidos
ᰔᩚ *#drunk* + <mencion>
> ✦ Estar borracho
ᰔᩚ *#eat • #comer* + <mencion>
> ✦ Comer algo delicioso
ᰔᩚ *#facepalm* + <mencion>
> ✦ Darte una palmada en la cara
ᰔᩚ *#happy • #feliz* + <mencion>
> ✦ Salta de felicidad
ᰔᩚ *#hug* + <mencion>
> ✦ Dar un abrazo
ᰔᩚ *#impregnate • #preg* + <mencion>
> ✦ Embarazar a alguien
ᰔᩚ *#kill* + <mencion>
> ✦ Toma tu arma y mata a alguien
ᰔᩚ *#kiss • #besar* • #kiss2 + <mencion>
> ✦ Dar un beso
ᰔᩚ *#laugh* + <mencion>
> ✦ Reírte de algo o alguien
ᰔᩚ *#lick* + <mencion>
> ✦ Lamer a alguien
ᰔᩚ *#love • #amor* + <mencion>
> ✦ Sentirse enamorado
ᰔᩚ *#pat* + <mencion>
> ✦ Acaricia a alguien
ᰔᩚ *#poke* + <mencion>
> ✦ Picar a alguien
ᰔᩚ *#pout* + <mencion>
> ✦ Hacer pucheros
ᰔᩚ *#punch* + <mencion>
> ✦ Dar un puñetazo
ᰔᩚ *#run* + <mencion>
> ✦ Correr
ᰔᩚ *#sad • #triste* + <mencion>
> ✦ Expresar tristeza
ᰔᩚ *#scared* + <mencion>
> ✦ Estar asustado
ᰔᩚ *#seduce* + <mencion>
> ✦ Seducir a alguien
ᰔᩚ *#shy • #timido* + <mencion>
> ✦ Sentir timidez
ᰔᩚ *#slap* + <mencion>
> ✦ Dar una bofetada
ᰔᩚ *#dias • #days*
> ✦ Darle los buenos días a alguien 
ᰔᩚ *#noches • #nights*
> ✦ Darle las buenas noches a alguien 
ᰔᩚ *#sleep* + <mencion>
> ✦ Tumbarte a dormir
ᰔᩚ *#smoke* + <mencion>
> ✦ Fumar
ᰔᩚ *#think* + <mencion>
> ✦ Pensar en algo

• :･ﾟ⊹˚• \`『 NSFW 』\` •˚⊹:･ﾟ•

❍ Comandos NSFW (Contenido para adultos)
ᰔᩚ *#anal* + <mencion>
> ✦ Hacer un anal
ᰔᩚ *#waifu*
> ✦ Buscá una waifu aleatorio.
ᰔᩚ *#bath* + <mencion>
> ✦ Bañarse
ᰔᩚ *#blowjob • #mamada • #bj* + <mencion>
> ✦ Dar una mamada
ᰔᩚ *#boobjob* + <mencion>
> ✦ Hacer una rusa
ᰔᩚ *#cum* + <mencion>
> ✦ Venirse en alguien.
ᰔᩚ *#fap* + <mencion>
> ✦ Hacerse una paja
ᰔᩚ *#ppcouple • #ppcp*
> ✦ Genera imagenes para amistades o parejas.
ᰔᩚ *#footjob* + <mencion>
> ✦ Hacer una paja con los pies
ᰔᩚ *#fuck • #coger • #fuck2* + <mencion>
> ✦ Follarte a alguien
ᰔᩚ *#cafe • #coffe*
> ✦ Tomate un cafecito con alguien
ᰔᩚ *#violar • #perra + <mencion>
> ✦ Viola a alguien
ᰔᩚ *#grabboobs* + <mencion>
> ✦ Agarrrar tetas
ᰔᩚ *#grop* + <mencion>
> ✦ Manosear a alguien
ᰔᩚ *#lickpussy* + <mencion>
> ✦ Lamer un coño
ᰔᩚ *#rule34 • #r34* + [Tags]
> ✦ Buscar imagenes en Rule34
ᰔᩚ *#sixnine • #69* + <mencion>
> ✦ Haz un 69 con alguien
ᰔᩚ *#spank • #nalgada* + <mencion>
> ✦ Dar una nalgada
ᰔᩚ *#suckboobs* + <mencion>
> ✦ Chupar tetas
ᰔᩚ *#undress • #encuerar* + <mencion>
> ✦ Desnudar a alguien
ᰔᩚ *#yuri • #tijeras* + <mencion>
> ✦ Hacer tijeras.

• :･ﾟ⊹˚• \`『 Juegos 』\` •˚⊹:･ﾟ•

❍ Comandos de juegos para jugar con tus amigos.
ᰔᩚ *#amistad • #amigorandom* 
> ✦ hacer amigos con un juego. 
ᰔᩚ *#chaqueta • #jalamela*
> ✦ Hacerte una chaqueta.
ᰔᩚ *#chiste*
> ✦ La bot te cuenta un chiste.
ᰔᩚ *#consejo* 
> ✦ La bot te da un consejo. 
ᰔᩚ *#doxeo • #doxear* + <mencion>
> ✦ Simular un doxeo falso.
ᰔᩚ *#facto*
> ✦ La bot te lanza un facto. 
ᰔᩚ *#formarpareja*
> ✦ Forma una pareja. 
ᰔᩚ *#formarpareja5*
> ✦ Forma 5 parejas diferentes.
ᰔᩚ *#frase*
> ✦ La bot te da una frase.
ᰔᩚ *#huevo*
> ✦ Agarrale el huevo a alguien.
ᰔᩚ *#chupalo* + <mencion>
> ✦ Hacer que un usuario te la chupe.
ᰔᩚ *#aplauso* + <mencion>
> ✦ Aplaudirle a alguien.
ᰔᩚ *#marron* + <mencion>
> ✦ Burlarte del color de piel de un usuario. 
ᰔᩚ *#suicidar*
> ✦ Suicidate. 
ᰔᩚ *#iq • #iqtest* + <mencion>
> ✦ Calcular el iq de alguna persona. 
ᰔᩚ *#meme*
> ✦ La bot te envía un meme aleatorio. 
ᰔᩚ *#morse*
> ✦ Convierte un texto a codigo morse. 
ᰔᩚ *#nombreninja*
> ✦ Busca un nombre ninja aleatorio. 
ᰔᩚ *#paja • #pajeame* 
> ✦ La bot te hace una paja.
ᰔᩚ *#personalidad* + <mencion>
> ✦ La bot busca tu personalidad. 
ᰔᩚ *#piropo*
> ✦ Lanza un piropo.
ᰔᩚ *#pregunta*
> ✦ Hazle una pregunta a la bot.
ᰔᩚ *#ship • #pareja*
> ✦ La bot te da la probabilidad de enamorarte de una persona. 
ᰔᩚ *#sorteo*
> ✦ Empieza un sorteo. 
ᰔᩚ *#top*
> ✦ Empieza un top de personas.
ᰔᩚ *#formartrio* + <mencion>
> ✦ Forma un trio.
ᰔᩚ *#ahorcado*
> ✦ Diviertete con la bot jugando el juego ahorcado.
ᰔᩚ *#mates • #matematicas*
> ✦ Responde las preguntas de matemáticas para ganar recompensas.
ᰔᩚ *#ppt*
> ✦ Juega piedra papel o tijeras con la bot.
ᰔᩚ *#sopa • #buscarpalabra*
> ✦ Juega el famoso juego de sopa de letras.
ᰔᩚ *#pvp • #suit* + <mencion>
> ✦ Juega un pvp contra otro usuario.
ᰔᩚ *#ttt*
> ✦ Crea una sala de juego. 
  `.trim()

  await conn.sendMessage(m.chat, { 
      text: txt,
      contextInfo: {
          mentionedJid: [m.sender, userId],
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
              newsletterJid: channelRD.id,
              newsletterName: channelRD.name,
              serverMessageId: -1,
          },
          forwardingScore: 999,
          externalAdReply: {
              title: botname,
              body: textbot,
              thumbnailUrl: banner,
              sourceUrl: redes,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
          },
      },
  }, { quoted: m })

}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler

function clockString(ms) {
    let seconds = Math.floor((ms / 1000) % 60)
    let minutes = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    return `${hours}h ${minutes}m ${seconds}s`
}