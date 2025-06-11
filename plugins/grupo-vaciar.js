// Comando: vaciar — Expulsa hasta 15 miembros del grupo cada 1 segundo y desactiva welcome
const handler = async (m, { conn, participants, isBotAdmin }) => {
  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

  // Desactivar el welcome automáticamente al vaciar el grupo
  if (typeof global.db?.data?.chats[m.chat] === 'object') {
    global.db.data.chats[m.chat].welcome = false;
  }

  // Mensaje previo antes de vaciar el grupo
  await m.reply('𝐀𝐃𝐈𝐎́𝐒 𝐆𝐑𝐔𝐏𝐎 𝐒𝐄 𝐅𝐔𝐄𝐑𝐎𝐍 𝐀 𝐋𝐀 𝐕𝐄𝐑𝐆𝐀 🤡\nEl welcome ha sido desactivado.');

  // Obtener lista de administradores
  const groupMetadata = await conn.groupMetadata(m.chat);
  const admins = groupMetadata.participants.filter(p => p.admin).map(p => p.id);

  // Filtrar miembros a eliminar: que no sean admins ni el bot
  const toKick = participants
    .map(u => u.id)
    .filter(id => !admins.includes(id) && id !== conn.user.jid);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo quedan administradores o el bot).');

  m.reply(`⏳ Eliminando a ${toKick.length} miembros del grupo en lotes de 15 cada 1 segundo...`);

  // WhatsApp permite expulsar varios miembros, aquí lo ajustamos a 15 por lote
  const batchSize = 15;
  for (let i = 0; i < toKick.length; i += batchSize) {
    const batch = toKick.slice(i, i + batchSize);
    try {
      await conn.groupParticipantsUpdate(m.chat, batch, 'remove');
      // Espera de 1 segundo entre lotes
      if (i + batchSize < toKick.length) await new Promise(res => setTimeout(res, 1000));
    } catch (e) {
      for (const user of batch) {
        m.reply(`❌ No se pudo eliminar a @${user.split('@')[0]}`, null, { mentions: [user] });
      }
    }
  }

  // Mensaje después de vaciar el grupo
  await m.reply('𝐘𝐎 𝐓𝐄 𝐄𝐗𝐓𝐑𝐀𝐍̃𝐀𝐑𝐄 𝐓𝐄𝐍𝐋𝐎 𝐏𝐎𝐑 𝐒𝐄𝐆𝐔𝐑𝐎 𝐅𝐔𝐄𝐑𝐎𝐍 𝐓𝐀𝐍𝐓𝐎𝐒 𝐁𝐄𝐒𝐎𝐒 𝐘 𝐋𝐈𝐍𝐃𝐎𝐒 𝐌𝐎𝐌𝐄𝐍𝐓𝐎𝐒 𝐐𝐔𝐄 𝐕𝐈𝐕𝐈𝐌𝐎𝐒 𝐉𝐔𝐍𝐓𝐎𝐒 𝐔𝐇𝐇𝐇...');
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;
handler.rowner = true; // Solo el creador del bot puede usar este comando

export default handler;