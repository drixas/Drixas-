let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `H 
let menu = `
╔═──────────────═╗
    𝑩𝒊𝒆𝒏𝒗𝒆𝒏𝒊𝒅𝒐𝒔 𝒂 
     *${botname}* 🤖✨
╚═──────────────═╝

Hola, @${userId.split('@')[0]}! 👋🏻
¡Disfruta de la experiencia y prueba los comandos exclusivos!

╭─❖ 𝗘𝗦𝗧𝗔𝗗𝗢 𝗗𝗘𝗟 𝗕𝗢𝗧 ❖─╮
│ 🟢 Estado » Online
│ 🕰️ Uptime » ${uptime}
│ 👑 Bot » ${(conn.user.jid == global.conn.user.jid ? 'Principal 🅥' : 'Premium 🅑')}
│ 👤 Usuarios » ${totalreg}
│ 💻 Plataforma » Baileys Multi Device
│ 📝 Comandos » ${totalCommands}
│ ⚙️ Modo » Público
╰───────────────╯

╭─★ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜Ó𝗡 𝗣𝗘𝗥𝗦𝗢𝗡𝗔𝗟 ★─╮
│ 🙍 Cliente » @${userId.split('@')[0]}
╰────────────────────────────╯

✨ 𝙋𝙪𝙚𝙙𝙚𝙨 𝙘𝙧𝙚𝙖𝙧 𝙩𝙪 𝙎𝙪𝙗-𝘽𝙤𝙩 ✨
𝙐𝙩𝙞𝙡𝙞𝙯𝙖:
• *#qr*  𝙤  *#code*

──────────────────────────────
🌟 𝙐𝙨𝙖 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝙢𝙚𝙣𝙪 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙩𝙤𝙙𝙖𝙨 𝙡𝙖𝙨 𝙤𝙥𝙘𝙞𝙤𝙣𝙚𝙨.
──────────────────────────────
`;
await conn.sendMessage(m.chat, { text: menu, mentions: [m.sender] });

• :･ﾟ⊹˚• \`『 Info-Bot 』\` •˚⊹:･ﾟ•

❍ Comandos para ver estado e información de la Bot.
ᰔᩚ *#help • #menu*
> ✦ Ver la lista de comandos de la Bot.
ᰔᩚ *#uptime • #runtime*
> ✦ Ver tiempo activo o en linea de la Bot.
ᰔᩚ *#sc • #script*
> ✦ Link del repositorio oficial de la Bot
ᰔᩚ *#staff • #colaboradores*
> ✦ Ver la lista de desarrolladores de la Bot.
ᰔᩚ *#serbot • #serbot code*
> ✦ Crea una sesión de Sub-Bot.
ᰔᩚ *#bots • #sockets*
> ✦ Ver la lista de Sub-Bots activos.
ᰔᩚ *#creador*
> ✦ Contacto del creador de la Bot.
ᰔᩚ *#status • #estado*
> ✦ Ver el estado actual de la Bot.
ᰔᩚ *#links • #grupos*
> ✦ Ver los enlaces oficiales de la Bot.
ᰔᩚ *#infobot • #infobot*
> ✦ Ver la información completa de la Bot.
ᰔᩚ *#sug • #newcommand*
> ✦ Sugiere un nuevo comando.
ᰔᩚ *#p • #ping*
> ✦ Ver la velocidad de respuesta del Bot.
ᰔᩚ *#reporte • #reportar*
> ✦ Reporta alguna falla o problema de la Bot.
ᰔᩚ *#sistema • #system*
> ✦ Ver estado del sistema de alojamiento.
ᰔᩚ *#speed • #speedtest*
> ✦ Ver las estadísticas de velocidad de la Bot.
ᰔᩚ *#views • #usuarios*
> ✦ Ver la cantidad de usuarios registrados en el sistema.
ᰔᩚ *#funciones • #totalfunciones*
> ✦ Ver todas las funciones de la Bot.
ᰔᩚ *#ds • #fixmsgespera*
> ✦ Eliminar archivos de sesión innecesarios.
ᰔᩚ *#editautoresponder*
> ✦ Configurar un Prompt personalizado de la Bot.

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
> ✦ Forma 5 par// plugins/drixasmenu.js
export function command_drixasmenu() {
  return {
    handler: async (m, { conn, usedPrefix, command }) => {
      if (/^(menu|menú|help|ayuda|commands|comandos|\?)$/i.test(m.text)) {
        // Obtener información del sistema
        const uptime = process.uptime();
        const hours = Math.floor(uptime / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);
        const seconds = Math.floor(uptime % 60);
        const uptimeString = `${hours}h ${minutes}m ${seconds}s`;

        // Encabezado personalizado Drixas
        const header = `╭─「 *🄳🅁🄸🅇🄰🅂-🄱🄾🅃* 」─⬣
│ ⏤͟͟͞͞➽ *👋 Hola:* ${m.pushName || 'Usuario'}
│ ⏤͟͟͞͞➽ *📅 Fecha:* ${new Date().toLocaleDateString('es-MX', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
│ ⏤͟͟͞͞➽ *⏱ Tiempo activo:* ${uptimeString}
╰────────────⬣`;

        // Menú principal con categorías
        const menuBody = `
╭─「 *🔮 MENÚ PRINCIPAL* 」─⬣
│
│ *📌 COMANDOS BÁSICOS*
│ • ${usedPrefix}ping - Prueba de latencia
│ • ${usedPrefix}owner - Contacto del creador
│ • ${usedPrefix}grupos - Grupos oficiales
│ • ${usedPrefix}estado - Estado del bot
│ • ${usedPrefix}reporte - Reportar errores
│
│ *🛠 HERRAMIENTAS*
│ • ${usedPrefix}traducir [texto] - Traductor
│ • ${usedPrefix}calc [operación] - Calculadora
│ • ${usedPrefix}clima [ciudad] - Pronóstico
│ • ${usedPrefix}horoscopo [signo] - Horóscopo
│ • ${usedPrefix}qr [texto] - Generar QR
│
│ *🎨 MULTIMEDIA*
│ • ${usedPrefix}play [canción] - Descargar audio
│ • ${usedPrefix}play2 [video] - Descargar video
│ • ${usedPrefix}imagen [búsqueda] - Buscar imágenes
│ • ${usedPrefix}sticker - Crear sticker
│ • ${usedPrefix}toimg - Sticker a imagen
│
│ *🎭 DIVERSIÓN*
│ • ${usedPrefix}simi [texto] - Chat con Simi
│ • ${usedPrefix}dado - Tirar un dado
│ • ${usedPrefix}topgays - Top de usuarios
│ • ${usedPrefix}formar [texto] - Texto especial
│ • ${usedPrefix}pregunta [texto] - Pregunta al bot
│
│ *🔞 CONTENIDO +18*
│ • ${usedPrefix}pack - Buscar packs
│ • ${usedPrefix}xxx - Videos +18
│ • ${usedPrefix}lesbi - Lesbianas
│ • ${usedPrefix}porno - Porno gay
│
│ *⚙️ ADMINISTRACIÓN* (solo admins)
│ • ${usedPrefix}matarmenu - Desactivar menú
│ • ${usedPrefix}revivirmenu - Reactivar menú
│ • ${usedPrefix}ban - Banear usuario
│ • ${usedPrefix}unban - Desbanear usuario
│ • ${usedPrefix}admins - Lista de admins
╰────────────⬣`;

        // Pie de página con créditos
        const footer = `╭─「 *💻 CRÉDITOS* 」─⬣
│ ⏤͟͟͞͞➽ *Creador:* The-King-Brayan
│ ⏤͟͟͞͞➽ *Versión:* 3.5.0
│ ⏤͟͟͞͞➽ *Tipo:* ${conn.user?.device || 'Multi-dispositivo'}
│ ⏤͟͟͞͞➽ *Prefijo:* [ ${usedPrefix} ]
╰────────────⬣`;

        // Imagen de fondo (reemplaza con tu URL)
        const thumbnailUrl = 'https://telegra.ph/file/1234567890abcdef12345.jpg';
        
        try {
          await conn.sendMessage(m.chat, {
            image: { url: thumbnailUrl },
            caption: `${header}\n${menuBody}\n${footer}`,
            contextInfo: {
              externalAdReply: {
                title: "DRIXAS-BOT • MENÚ PRINCIPAL",
                body: "El bot más completo de WhatsApp",
                thumbnail: await (await fetch(thumbnailUrl)).buffer(),
                mediaType: 1,
                mediaUrl: '',
                sourceUrl: 'https://github.com/tudrixas/drixas-bot'
              }
            }
          }, { quoted: m });
        } catch (e) {
          console.error('Error al enviar el menú:', e);
          await conn.reply(m.chat, '❌ Ocurrió un error al mostrar el menú. Intenta nuevamente.', m);
        }
      }
    },
    tags: ['main', 'utility'],
    help: ['menu', 'menú', 'help', 'ayuda', 'comandos'],
    desc: 'Muestra el menú principal completo de Drixas-Bot'
  };
    }
