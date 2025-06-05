const handler = async (m, { conn }) => {
  const url = 'https://files.catbox.moe/fvelpn.jpg'
  const texto = `𝐋𝐋𝐄𝐆𝐀𝐑𝐎𝐍 𝐋𝐎𝐒 𝐌𝐀́𝐒 𝐓𝐄𝐌𝐈𝐃𝐎𝐒 𝐃𝐄 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝟑𝟑𝟑 👹 𝐍𝐎 𝐒𝐄 𝐕𝐀𝐘𝐀𝐍 𝐀 𝐀𝐒𝐔𝐒𝐓𝐀𝐑. 𝐒𝐎𝐋𝐎 𝐒𝐄 𝐋𝐄𝐒 𝐀𝐕𝐈𝐒𝐀 𝐐𝐔𝐄 𝐒𝐔𝐒 𝐍𝐔́𝐌𝐄𝐑𝐎𝐒 𝐘 𝐆𝐑𝐏𝐎𝐑 𝐐𝐔𝐄 𝐒𝐈𝐄𝐌𝐏𝐑𝐄 𝐋𝐄𝐒 𝐕𝐀 𝐌𝐀𝐋 𝐉𝐀𝐉𝐀𝐉𝐀𝐉𝐀 𝐃𝐎𝐌𝐀𝐃𝐎𝐒 𝐏𝐄𝐑𝐑𝐀𝐒`;

  await conn.sendMessage(m.chat, {
    image: { url: }, { quoted: m })
}

handler.command = ['333']
handler.help = ['333']
handler.tags = ['fun']

export default handler