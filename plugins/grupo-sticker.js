let handler = async (m, { conn, usedPrefix, command }) => {
  // Verifica si hay imagen en el mensaje o en el mensaje citado
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';
  if (!mime || !/image\/(jpe?g|png|webp)/.test(mime)) {
    return m.reply(`Envía o responde a una imagen con *${usedPrefix + command}* para crear un sticker.`);
  }
  try {
    let img = await q.download();
    await conn.sendFile(m.chat, img, 'sticker.webp', '', m, true, { asSticker: true });
  } catch (e) {
    console.error(e);
    m.reply('❌ Ocurrió un error al crear el sticker. Asegúrate de enviar una imagen válida.');
  }
};

handler.help = ['s', 'sticker'];
handler.tags = ['sticker'];
handler.command = /^s(ticker)?$/i;

export default handler;
