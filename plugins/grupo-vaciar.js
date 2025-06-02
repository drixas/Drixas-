// Comando: vaciar — Expulsa a todos los miembros del grupo excepto a los admins y el bot
const handler = async (m, { conn, participants, isBotAdmin }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

  // Mensaje previo antes de vaciar el grupo
  await m.reply('𝐃𝐎𝐌𝐀𝐃𝐎𝐒 𝐁𝐘 𝐃𝐑𝐈𝐗I');

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

  // Mensaje después de vaciar el grupo
  await m.reply('𝐍𝐨 𝐋𝐞𝐨 𝐥𝐥𝐨𝐫𝐨𝐬 𝐣𝐚𝐣𝐚𝐣𝐚');
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.rowner = true; // Solo el creador del bot puede usar este comando

export default handler;