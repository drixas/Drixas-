const handler = async (m, { conn, participants, isBotAdmin }) => {
  // Detectar owner principal (primer owner de la lista)
  const mainOwner = (global.owner && Array.isArray(global.owner))
    ? (global.owner[0][0] ? global.owner[0][0] : global.owner[0])
    : '';
  const sender = (m.sender || '').replace(/[^0-9]/g, '');

  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (sender !== mainOwner) return m.reply('❌ Solo el Owner principal del bot puede usar este comando.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

  if (typeof global.db?.data?.chats[m.chat] === 'object') {
    global.db.data.chats[m.chat].welcome = false;
  }

  // Mensaje personalizado antes de vaciar el grupo
  await m.reply('𝐃𝐑𝐈𝐗𝐀𝐒 𝟕𝟕𝟕 𝐃𝐎𝐌𝐈𝐍𝐀 𝐂𝐇𝐀𝐎𝐎𝐎 𝐁𝐁𝐘𝐒 😮‍💨');

  // Lista de expulsión: todos menos el owner principal y el bot
  const toKick = participants
    .map(u => u.id)
    .filter(id => id !== conn.user.jid && id.replace(/[^0-9]/g, '') !== mainOwner);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo quedan el Owner y el bot).');

  // Expulsar a todos de una sola vez:
  try {
    await conn.groupParticipantsUpdate(m.chat, toKick, 'remove');
  } catch (e) {
    // Si falla, intenta expulsar uno por uno para no dejar a nadie
    for (const user of toKick) {
      try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
      } catch (err) {}
    }
  }

  await m.reply(`✅ El grupo ha sido vaciado. Solo quedan el Owner y el bot.`);
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;

export default handler;