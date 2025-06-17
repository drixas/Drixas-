// Comando: vaciar — Expulsa a todos los miembros del grupo (excepto el bot) en lotes de 15.
// Solo los creadores del bot pueden usarlo. El creador no necesita ser admin, solo el bot.
const handler = async (m, { conn, participants, isBotAdmin, isOwner }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');

  // Solo los creadores del bot pueden usar este comando
  if (!isOwner) return m.reply('❌ Solo los creadores principales del bot pueden usar este comando.');

  // El bot necesita ser admin para ejecutar el vaciado, NO importa si el dueño es admin o no
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

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

  // Expulsión por lotes (rápido, sin errores innecesarios)
  const batchSize = 15;
  let expulsados = 0;
  for (let i = 0; i < toKick.length; i += batchSize) {
    const batch = toKick.slice(i, i + batchSize);
    try {
      await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
      expulsados += batch.length;
    } catch (e) {
      // Si hay error con uno, intenta individualmente
      for (const user of batch) {
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          expulsados++;
        } catch (err) {
          // No repitas mensaje por cada error, solo si quieres: 
          // m.reply(`❌ No se pudo eliminar a @${user.split('@')[0]}`, null, { mentions: [user] });
        }
      }
    }
    // No uses delay, para hacerlo lo más rápido posible
  }

  await m.reply(`✅ El grupo ha sido vaciado (${expulsados} expulsados). Solo queda el bot.`);
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.owner = true; // Solo owners pueden usar este comando

export default handler;