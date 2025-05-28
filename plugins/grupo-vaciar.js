// Comando: vaciar — Expulsa a todos los miembros del grupo excepto a los admins y el bot
const handler = async (m, { conn, participants, isBotAdmin, isAdmin }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isAdmin) return m.reply('❌ Solo los administradores pueden usar este comando.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

  // Mensaje previo antes de vaciar el grupo
  await m.reply('Domados Por Drix  𝟏𝟑');

  // Obtener lista de administradores
  const groupMetadata = await conn.groupMetadata(m.chat);
  const admins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

  // Filtrar miembros a eliminar: que no sean admins ni el bot
  const toKick = participants
    .map(u => u.id)
    .filter(id => !admins.includes(id) && id !== conn.user.jid);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo quedan administradores).');

  m.reply(`⏳ Eliminando a ${toKick.length} miembros del grupo...`);

  // WhatsApp permite expulsar máximo 5 miembros por petición
  const batchSize = 5;
  for (let i = 0; i < toKick.length; i += batchSize) {
    const batch = toKick.slice(i, i + batchSize);
    try {
      await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
      // Pequeña espera entre lotes, ajusta si lo necesitas (700ms recomendado)
      if (i + batchSize < toKick.length) await new Promise(res => setTimeout(res, 700));
    } catch (e) {
      for (const user of batch) {
        m.reply(`❌ No se pudo eliminar a @${user.split('@')[0]}`, null, { mentions: [user] });
      }
    }
  }

  m.reply('✅ Grupo vaciado: todos los miembros (excepto admins) han sido eliminados.');
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.admin = true;

export default handler;