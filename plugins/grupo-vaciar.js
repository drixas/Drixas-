const handler = async (m, { conn, participants, isBotAdmin }) => {
  // Detectar owner manualmente (primer owner en la lista)
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

  await m.reply('⚠️ ATENCIÓN: ¡Se eliminarán todos los miembros del grupo excepto el Owner y el bot!');

  // Armar lista de expulsión (excluyendo bot y owner)
  const toKick = participants
    .map(u => u.id)
    .filter(id => id !== conn.user.jid && id.replace(/[^0-9]/g, '') !== mainOwner);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo quedan el Owner y el bot).');

  const batchSize = 15;
  let expulsados = 0;
  for (let i = 0; i < toKick.length; i += batchSize) {
    const batch = toKick.slice(i, i + batchSize);
    try {
      await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
      expulsados += batch.length;
    } catch (e) {
      for (const user of batch) {
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          expulsados++;
        } catch (err) {
          // omitir errores individuales
        }
      }
    }
  }

  await m.reply(`✅ El grupo ha sido vaciado (${expulsados} expulsados). Solo quedan el Owner y el bot.`);
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;

export default handler;