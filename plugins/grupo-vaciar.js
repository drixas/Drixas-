// Comando: vaciar — Expulsa a todos los miembros del grupo (excepto el bot) en lotes de 15. Solo los creadores del bot pueden usarlo.
const handler = async (m, { conn, participants, isBotAdmin, isOwner }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');
  if (!isOwner) return m.reply('❌ Solo los creadores principales del bot pueden usar este comando.');

  // Desactivar el welcome automáticamente al vaciar el grupo
  if (typeof global.db?.data?.chats[m.chat] === 'object') {
    global.db.data.chats[m.chat].welcome = false;
  }

  // Mensaje previo antes de vaciar el grupo
  await m.reply('⚠️ ATENCIÓN: Se va a expulsar a TODOS los miembros del grupo (excepto el bot), en lotes de 15. ¡No hay marcha atrás!');

  // Obtener lista de todos los miembros excepto el bot
  const toKick = participants
    .map(u => u.id)
    .filter(id => id !== conn.user.jid);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo queda el bot).');

  m.reply(`⏳ Expulsando a ${toKick.length} miembros del grupo en lotes de 15 cada 1 segundo...`);

  const batchSize = 15;
  for (let i = 0; i < toKick.length; i += batchSize) {
    const batch = toKick.slice(i, i + batchSize);
    try {
      await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
      if (i + batchSize < toKick.length) await new Promise(res => setTimeout(res, 1000));
    } catch (e) {
      for (const user of batch) {
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
        } catch (err) {
          m.reply(`❌ No se pudo eliminar a @${user.split('@')[0]}`, null, { mentions: [user] });
        }
      }
    }
  }

  await m.reply('✅ El grupo ha sido vaciado. Solo queda el bot.');
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.owner = true; // Solo los owners pueden usar este comando

export default handler;