const handler = async (m, { conn }) => {
  const url = 'https://files.catbox.moe/fvelpn.jpg'
  const texto = `𝐋𝐋𝐄𝐆𝐀𝐑𝐎𝐍 𝐋𝐎𝐒 𝐌𝐀́𝐒 𝐓𝐄𝐌𝐈𝐃𝐎𝐒 𝐃𝐄 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝟑𝟑𝟑 👹 𝐍𝐎 𝐒𝐄 𝐕𝐀𝐘𝐀𝐍 𝐀 𝐀𝐒𝐔𝐒𝐓𝐀𝐑. 𝐒𝐎𝐋𝐎 𝐒𝐄 𝐋𝐄𝐒 𝐀𝐕𝐈𝐒𝐀 𝐐𝐔𝐄 𝐒𝐔𝐒 𝐍𝐔́𝐌𝐄𝐑𝐎𝐒 𝐘 𝐆𝐑𝐔𝐏𝐎𝐒 𝐘𝐀 𝐒𝐄𝐑𝐀́𝐍 𝐃𝐎𝐌𝐀𝐃𝐎𝐒 𝐍𝐎 𝐒𝐄 𝐎𝐏𝐎𝐍.chat, {
    image: { url },
    caption: texto
  }, { quoted: m })
}

handler.command = ['333']
handler.help = ['333']
handler.tags = ['fun']

export default handler