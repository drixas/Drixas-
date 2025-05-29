let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender;
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length;
  let botname = global.botname || conn.user.name || "MiLindaAsistente";

  let channelRD = global.channelRD || { id: '123456789@newsletter', name: '🍒 Jardín de Miku 🍒' };
  let textbot = global.textbot || `Con ternura, ${botname} te acompaña~ 💕`;
  let banner = global.banner || 'https://i.imgur.com/Ufxr0qH.jpeg';
  let redes = global.redes || 'https://linktr.ee/tu_bot';

  let txt = `
╭•˚ ₊˚୨୧˚₊˚•╮
  Kon'nichiwa~ @${userId.split('@')[0]}
  Soy *${botname}*, tu bot kawaii ✨
  ¿Jugamos juntas un rato? ♡
╰•˚ ₊˚୨୧˚₊˚•╯

╭─♡︰𝑰𝒏𝒇𝒐 𝒅𝒆𝒍 𝒅𝒊́𝒂
│💌 Usuario: @${userId.split('@')[0]}
│🎀 Modo: Público
│👑 Bot: ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub Bot')}
│⏰ Activa: ${uptime}
│🌸 Comunidad: ${totalreg}
│🧩 Comandos: ${totalCommands}
│🔗 Conexión: Baileys
╰───────────────♡

╭─♡︰𝐈𝐧𝐟𝐨-𝐁𝐨𝐭
│ 🎀 \`#uptime\` / \`#runtime\`
│ ↳ Saber mi tiempo activa ⏳
│ 🎀 \`#sc\` / \`#script\`
│ ↳ Mi código fuente 💻
│ 🎀 \`#ping\` / \`#p\`
│ ↳ Velocidad de respuesta ⚡
╰───────────────♡
`.trim();

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
        title: `♡ 𝚃𝚜𝚞𝚔𝚊𝚜𝚊 ♡`,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    },
  }, { quoted: m });
};

handler.help = ['menu', 'help'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];

export default handler;

function clockString(ms) {
  if (isNaN(ms)) return '--';
  let d = Math.floor(ms / 86400000);
  let h = Math.floor(ms / 3600000) % 24;
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [
    d ? `${d}d` : '',
    h ? `${h}h` : '',
    m ? `${m}m` : '',
    s ? `${s}s` : ''
  ].filter(Boolean).join(' ');
}
