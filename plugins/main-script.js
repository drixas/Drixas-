const handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    text: '> Este es un bot privado y por el momento no se ha liberado para el público.'
  }, { quoted: m });
};

handler.command = handler.help = ['sc', 'script'];
handler.tags = ['info'];

export default handler;
