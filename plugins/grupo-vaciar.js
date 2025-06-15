// Comando: vaciar — Expulsa a todos los miembros del grupo (excepto el bot) en un solo lote. Solo los creadores del bot pueden usarlo.
const handler = async (m, { conn, participants, isBotAdmin, isOwner }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');
  if (!isOwner) return m.reply('❌ Solo los creadores principales del bot pueden usar este comando.');

  // Desactivar el welcome automáticamente al vaciar el grupo
  if (typeof global.db?.data?.chats[m.chat] === 'object') {
    global.db.data.chats[m.chat].welcome = false;
  }

  // Mensaje previo antes de vaciar el grupo
  await m.reply('⚠️ ATENCIÓN: Se va a expulsar a TODOS los miembros del grupo (excepto el bot). ¡No hay marcha atrás!');

  // Obtener lista de todos los miembros excepto el bot
  const toKick = participants
    .map(u => u.id)
    .filter(id => id !== conn.user.jid);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo queda el bot).');

  // Intentar expulsar a todos en un solo lote
  try {
    await conn.groupParticipantsUpdate(m.chat, toKick, 'remove');
    await m.reply('✅ El grupo ha sido vaciado. Solo queda el bot.');
  } catch (e) {
    for (const user of toKick) {
      try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
      } catch (err) {
        m.reply(`❌ No se pudo eliminar a @${user.split('@')[0]}`, null, { mentions: [user] });
      }
    }
    await m.reply('⚠️ Expulsión por lotes terminada. Algunos usuarios no pudieron ser expulsados.');
  }
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.owner = true; // Solo los owners pueden usar este comando

export default handler;