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


✦━〔 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎 𝐌𝐄𝐍𝐔 〕━✦

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
╰━━━━━━━━━━━━━━━━━━━━━━╯


╔════════════════════╗
║   🛰️ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 𝐌𝐄𝐍𝐔 🛰️
╚════════════════════╝

╔══╌╌╌╌╌╌╌╌╌╌╌╌╌╌══╗
║  𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐁𝐮𝐬𝐪𝐮𝐞𝐝𝐚
║
║ ▣ ᰔᩚ *#tiktoksearch • #tiktoks*
║    ┗ 🎵 𝐁𝐮𝐬𝐜𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤
║ ▣ ᰔᩚ *#tweetposts*
║    ┗ 🐦 𝐁𝐮𝐬𝐜𝐚 𝐩𝐨𝐬𝐭𝐬 𝐝𝐞 𝐗/𝐓𝐰𝐢𝐭𝐭𝐞𝐫
║ ▣ ᰔᩚ *#ytsearch • #yts*
║    ┗ ▶️ 𝐁𝐮𝐬𝐜𝐚 𝐞𝐧 𝐘𝐨𝐮𝐓𝐮𝐛𝐞
║ ▣ ᰔᩚ *#githubsearch*
║    ┗ 💻 𝐁𝐮𝐬𝐜𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐝𝐞 𝐆𝐢𝐭𝐇𝐮𝐛
║ ▣ ᰔᩚ *#cuevana • #cuevanasearch*
║    ┗ 🎬 𝐁𝐮𝐬𝐜𝐚 𝐩𝐞𝐥𝐢́𝐜𝐮𝐥𝐚𝐬/𝐬𝐞𝐫𝐢𝐞𝐬 𝐩𝐨𝐫 𝐂𝐮𝐞𝐯𝐚𝐧𝐚
║ ▣ ᰔᩚ *#google*
║    ┗ 🌐 𝐁𝐮𝐬𝐜𝐚 𝐞𝐧 𝐆𝐨𝐨𝐠𝐥𝐞
║ ▣ ᰔᩚ *#pin • #pinterest*
║    ┗ 📌 𝐁𝐮𝐬𝐜𝐚 𝐢𝐦𝐚́𝐠𝐞𝐧𝐞𝐬 𝐝𝐞 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭
║ ▣ ᰔᩚ *#imagen • #image*
║    ┗ 🖼️ 𝐁𝐮𝐬𝐜𝐚 𝐢𝐦𝐚́𝐠𝐞𝐧𝐞𝐬 𝐞𝐧 𝐆𝐨𝐨𝐠𝐥𝐞
║ ▣ ᰔᩚ *#infoanime*
║    ┗ 📚 𝐁𝐮𝐬𝐜𝐚 𝐢𝐧𝐟𝐨 𝐝𝐞 𝐚𝐧𝐢𝐦𝐞/𝐦𝐚𝐧𝐠𝐚
║ ▣ ᰔᩚ *#hentaisearch • #searchhentai*
║    ┗ 🍑 𝐁𝐮𝐬𝐜𝐚 𝐜𝐚𝐩𝐢́𝐭𝐮𝐥𝐨𝐬 𝐡𝐞𝐧𝐭𝐚𝐢
║ ▣ ᰔᩚ *#xnxxsearch • #xnxxs*
║    ┗ 🔞 𝐁𝐮𝐬𝐜𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 Xnxx
║ ▣ ᰔᩚ *#xvsearch • #xvideossearch*
║    ┗ 🔞 𝐁𝐮𝐬𝐜𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 Xvideos
║ ▣ ᰔᩚ *#pornhubsearch • #phsearch*
║    ┗ 🔞 𝐁𝐮𝐬𝐜𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐏𝐨𝐫𝐧𝐡𝐮𝐛
║ ▣ ᰔᩚ *#npmjs*
║    ┗ 📦 𝐁𝐮𝐬𝐜𝐚𝐝𝐨𝐫 𝐝𝐞 𝐧𝐩𝐦𝐣𝐬
╚══╌╌╌╌╌╌╌╌╌╌╌╌╌╌══╝


🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
╔════════════════════════════════════════╗
║    🔥 𝐃𝐑𝐈𝐗𝐀𝐒 𝐁𝐎𝐓 — 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🔥
╚════════════════════════════════════════╝
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

🔥 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐃𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀 🔥

╔═───🔥───🔥───🔥───🔥───═╗
║
║ 🔥 ᰔᩚ *#tiktok • #tt*
║    ┗ 🎵 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤
║ 🔥 ᰔᩚ *#mediafire • #mf*
║    ┗ 📦 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐌𝐞𝐝𝐢𝐚𝐅𝐢𝐫𝐞
║ 🔥 ᰔᩚ *#pinvid • #pinvideo* + [enlace]
║    ┗ 📌 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐏𝐢𝐧𝐭𝐞𝐫𝐞𝐬𝐭
║ 🔥 ᰔᩚ *#mega • #mg* + [enlace]
║    ┗ 💾 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐝𝐞 𝐌𝐄𝐆𝐀
║ 🔥 ᰔᩚ *#play • #play2*
║    ┗ 🎶 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐦𝐮́𝐬𝐢𝐜𝐚/𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞
║ 🔥 ᰔᩚ *#ytmp3 • #ytmp4*
║    ┗ 🎼 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐦𝐮́𝐬𝐢𝐜𝐚/𝐯𝐢𝐝𝐞𝐨 𝐝𝐞 𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐩𝐨𝐫 𝐮𝐫𝐥
║ 🔥 ᰔᩚ *#fb • #facebook*
║    ┗ 📺 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤
║ 🔥 ᰔᩚ *#twitter • #x* + [link]
║    ┗ 🐦 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐓𝐰𝐢𝐭𝐭𝐞𝐫/𝐗
║ 🔥 ᰔᩚ *#ig • #instagram*
║    ┗ 📷 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐜𝐨𝐧𝐭𝐞𝐧𝐢𝐝𝐨 𝐝𝐞 𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦
║ 🔥 ᰔᩚ *#tts • #tiktoks* + [búsqueda]
║    ┗ 🔎 𝐁𝐮𝐬𝐜𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤
║ 🔥 ᰔᩚ *#terabox • #tb* + [enlace]
║    ┗ 🗄️ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐩𝐨𝐫 𝐓𝐞𝐫𝐚𝐛𝐨𝐱
║ 🔥 ᰔᩚ *#ttimg • #ttmp3* + <url>
║    ┗ 🖼️ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐟𝐨𝐭𝐨𝐬/𝐚𝐮𝐝𝐢𝐨𝐬 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤
║ 🔥 ᰔᩚ *#gitclone* + <url>
║    ┗ 🖥️ 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐫𝐞𝐩𝐨𝐬𝐢𝐭𝐨𝐫𝐢𝐨𝐬 𝐝𝐞 𝐆𝐢𝐭𝐇𝐮𝐛
║ 🔥 ᰔᩚ *#xvideosdl*
║    ┗ 🔞 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 (𝐗𝐯𝐢𝐝𝐞𝐨𝐬)
║ 🔥 ᰔᩚ *#xnxxdl*
║    ┗ 🔞 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐯𝐢𝐝𝐞𝐨𝐬 𝐝𝐞 (𝐗𝐍𝐗𝐗)
║ 🔥 ᰔᩚ *#apk • #modapk*
║    ┗ 📱 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐚𝐩𝐤𝐬 𝐝𝐞 𝐀𝐩𝐭𝐨𝐢𝐝𝐞
║ 🔥 ᰔᩚ *#tiktokrandom • #ttrandom*
║    ┗ 🎲 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐮𝐧 𝐯𝐢𝐝𝐞𝐨 𝐚𝐥𝐞𝐚𝐭𝐨𝐫𝐢𝐨 𝐝𝐞 𝐓𝐢𝐤𝐓𝐨𝐤
║ 🔥 ᰔᩚ *#npmdl • #npmdownloader*
║    ┗ 📦 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐩𝐚𝐪𝐮𝐞𝐭𝐞𝐬 𝐝𝐞 𝐍𝐏𝐌𝐉𝐬
║
╚═───🔥───🔥───🔥───🔥───═╝


💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸
╔══════════════════════════════════════╗
║   💸 𝐌𝐄𝐍𝐔́ 𝐃𝐄 𝐄𝐂𝐎𝐍𝐎𝐌𝐈́𝐀 𝐑𝐏𝐆 💸
║        By: @drixas
╚══════════════════════════════════════╝
💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸💸

❍ 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐝𝐞 𝐞𝐜𝐨𝐧𝐨𝐦𝐢́𝐚 𝐲 𝐑𝐏𝐆 𝐩𝐚𝐫𝐚 𝐠𝐚𝐧𝐚𝐫 𝐝𝐢𝐧𝐞𝐫𝐨 𝐲 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬.

╔═───💸───💸───💸───💸───═╗
║
║ 💸 ᰔᩚ *#w • #work • #trabajar*
║    ┗ 🛠️ 𝐓𝐫𝐚𝐛𝐚𝐣𝐚 𝐩𝐚𝐫𝐚 𝐠𝐚𝐧𝐚𝐫 ${moneda}
║ 💸 ᰔᩚ *#slut • #protituirse*
║    ┗ 👠 𝐓𝐫𝐚𝐛𝐚𝐣𝐚 𝐜𝐨𝐦𝐨 𝐩𝐫𝐨𝐬𝐭𝐢𝐭𝐮𝐭𝐚 𝐲 𝐠𝐚𝐧𝐚 ${moneda}
║ 💸 ᰔᩚ *#cf • #suerte*
║    ┗ 🎲 𝐀𝐩𝐮𝐞𝐬𝐭𝐚 𝐭𝐮𝐬 ${moneda} 𝐚 𝐜𝐚𝐫𝐚 𝐨 𝐜𝐫𝐮𝐳
║ 💸 ᰔᩚ *#crime • #crimen*
║    ┗ 🦹‍♂️ 𝐒𝐞 𝐮𝐧 𝐥𝐚𝐝𝐫𝐨́𝐧 𝐲 𝐠𝐚𝐧𝐚 ${moneda}
║ 💸 ᰔᩚ *#ruleta • #roulette • #rt*
║    ┗ 🎰 𝐀𝐩𝐮𝐞𝐬𝐭𝐚 ${moneda} 𝐚𝐥 𝐜𝐨𝐥𝐨𝐫 𝐫𝐨𝐣𝐨 𝐨 𝐧𝐞𝐠𝐫𝐨
║ 💸 ᰔᩚ *#casino • #apostar*
║    ┗ 🏦 𝐀𝐩𝐮𝐞𝐬𝐭𝐚 𝐭𝐮𝐬 ${moneda} 𝐞𝐧 𝐞𝐥 𝐜𝐚𝐬𝐢𝐧𝐨
║ 💸 ᰔᩚ *#slot*
║    ┗ 🎰 𝐏𝐫𝐮𝐞𝐛𝐚 𝐭𝐮 𝐬𝐮𝐞𝐫𝐭𝐞 𝐞𝐧 𝐥𝐚 𝐫𝐮𝐥𝐞𝐭𝐚
║ 💸 ᰔᩚ *#cartera • #wallet*
║    ┗ 👛 𝐕𝐞𝐫 𝐭𝐮𝐬 ${moneda} 𝐞𝐧 𝐥𝐚 𝐜𝐚𝐫𝐭𝐞𝐫𝐚
║ 💸 ᰔᩚ *#banco • #bank*
║    ┗ 🏦 𝐕𝐞𝐫 𝐭𝐮𝐬 ${moneda} 𝐞𝐧 𝐞𝐥 𝐛𝐚𝐧𝐜𝐨
║ 💸 ᰔᩚ *#deposit • #depositar • #d*
║    ┗ 💸 𝐃𝐞𝐩𝐨𝐬𝐢𝐭𝐚 𝐭𝐮𝐬 ${moneda} 𝐚𝐥 𝐛𝐚𝐧𝐜𝐨
║ 💸 ᰔᩚ *#with • #retirar • #withdraw*
║    ┗ 🏧 𝐑𝐞𝐭𝐢𝐫𝐚 𝐭𝐮𝐬 ${moneda} 𝐝𝐞𝐥 𝐛𝐚𝐧𝐜𝐨
║ 💸 ᰔᩚ *#transfer • #pay*
║    ┗ 🔄 𝐓𝐫𝐚𝐧𝐬𝐟𝐢𝐞𝐫𝐞 ${moneda} 𝐨 𝐗𝐏 𝐚 𝐨𝐭𝐫𝐨𝐬 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬
║ 💸 ᰔᩚ *#miming • #minar • #mine*
║    ┗ ⛏️ 𝐒𝐞 𝐦𝐢𝐧𝐞𝐫𝐨 𝐲 𝐫𝐞𝐜𝐨𝐥𝐞𝐜𝐭𝐚 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬
║ 💸 ᰔᩚ *#buyall • #buy*
║    ┗ 🛒 𝐂𝐨𝐦𝐩𝐫𝐚 ${moneda} 𝐜𝐨𝐧 𝐭𝐮 𝐗𝐏
║ 💸 ᰔᩚ *#daily • #diario*
║    ┗ 📆 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐭𝐮 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐝𝐢𝐚𝐫𝐢𝐚
║ 💸 ᰔᩚ *#cofre*
║    ┗ 🎁 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐮𝐧 𝐜𝐨𝐟𝐫𝐞 𝐝𝐢𝐚𝐫𝐢𝐨 𝐥𝐥𝐞𝐧𝐨 𝐝𝐞 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬
║ 💸 ᰔᩚ *#weekly • #semanal*
║    ┗ 📅 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐭𝐮 𝐫𝐞𝐠𝐚𝐥𝐨 𝐬𝐞𝐦𝐚𝐧𝐚𝐥
║ 💸 ᰔᩚ *#monthly • #mensual*
║    ┗ 🗓️ 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐭𝐮 𝐫𝐞𝐜𝐨𝐦𝐩𝐞𝐧𝐬𝐚 𝐦𝐞𝐧𝐬𝐮𝐚𝐥
║ 💸 ᰔᩚ *#steal • #robar • #rob*
║    ┗ 🥷 𝐑𝐨𝐛𝐚 𝐚 𝐚𝐥𝐠𝐮𝐢𝐞𝐧 𝐲 𝐠𝐚𝐧𝐚 ${moneda}
║ 💸 ᰔᩚ *#robarxp • #robxp*
║    ┗ 🎯 𝐑𝐨𝐛𝐚 𝐗𝐏 𝐚 𝐮𝐧 𝐮𝐬𝐮𝐚𝐫𝐢𝐨
║ 💸 ᰔᩚ *#eboard • #baltop*
║    ┗ 🏆 𝐑𝐚𝐧𝐤𝐢𝐧𝐠 𝐝𝐞 𝐮𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐜𝐨𝐧 𝐦𝐚́𝐬 ${moneda}
║ 💸 ᰔᩚ *#aventura • #adventure*
║    ┗ 🏝️ 𝐀𝐝𝐞𝐧𝐭𝐫𝐚𝐭𝐞 𝐞𝐧 𝐮𝐧 𝐫𝐞𝐢𝐧𝐨 𝐲 𝐫𝐞𝐜𝐨𝐥𝐞𝐜𝐭𝐚 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬
║ 💸 ᰔᩚ *#curar • #heal*
║    ┗ 💉 𝐂𝐮𝐫𝐚 𝐭𝐮 𝐬𝐚𝐥𝐮𝐝 𝐩𝐚𝐫𝐚 𝐚𝐯𝐞𝐧𝐭𝐮𝐫𝐚𝐫𝐭𝐞 𝐦𝐚́𝐬
║ 💸 ᰔᩚ *#cazar • #hunt • #berburu*
║    ┗ 🦌 𝐂𝐚𝐳𝐚 𝐚𝐧𝐢𝐦𝐚𝐥𝐞𝐬 𝐩𝐚𝐫𝐚 𝐫𝐞𝐜𝐨𝐥𝐞𝐜𝐭𝐚𝐫 𝐫𝐞𝐜𝐮𝐫𝐬𝐨𝐬
║ 💸 ᰔᩚ *#inv • #inventario*
║    ┗ 🎒 𝐕𝐞𝐫 𝐭𝐮 𝐢𝐧𝐯𝐞𝐧𝐭𝐚𝐫𝐢𝐨 𝐲 𝐭𝐨𝐝𝐨𝐬 𝐭𝐮𝐬 𝐢́𝐭𝐞𝐦𝐬
║ 💸 ᰔᩚ *#mazmorra • #explorar*
║    ┗ 🗝️ 𝐄𝐱𝐩𝐥𝐨𝐫𝐚 𝐦𝐚𝐳𝐦𝐨𝐫𝐫𝐚𝐬 𝐲 𝐠𝐚𝐧𝐚 ${moneda}
║ 💸 ᰔᩚ *#halloween*
║    ┗ 🍬 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐭𝐮 𝐝𝐮𝐥𝐜𝐞 𝐨 𝐭𝐫𝐮𝐜𝐨 (𝐒𝐨𝐥𝐨 𝐞𝐧 𝐇𝐚𝐥𝐥𝐨𝐰𝐞𝐞𝐧)
║ 💸 ᰔᩚ *#christmas • #navidad*
║    ┗ 🎄 𝐑𝐞𝐜𝐥𝐚𝐦𝐚 𝐭𝐮 𝐫𝐞𝐠𝐚𝐥𝐨 𝐧𝐚𝐯𝐢𝐝𝐞𝐧̃𝐨 (𝐒𝐨𝐥𝐨 𝐞𝐧 𝐍𝐚𝐯𝐢𝐝𝐚𝐝)
║
╚═───💸───💸───💸───💸───═╝

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