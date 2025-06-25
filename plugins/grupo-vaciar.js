const handler = async (m, { conn, participants, isBotAdmin }) => {
  // Detectar owner manualmente:
  const sender = (m.sender || '').replace(/[^0-9]/g, '');
  const isOwner = (global.owner || []).map(v => v[0] ? v[0] : v).includes(sender);

  if (!m.isGroup) return m.reply('❌ Este comando solo se usa en grupos.');
  if (!isOwner) return m.reply('❌ 𝐌𝐈𝐑𝐄𝐍 𝐀 𝐄𝐒𝐓𝐄 𝐌𝐄𝐌𝐄 𝐈𝐍𝐓𝐄𝐍𝐓𝐀𝐍𝐃𝐎 𝐕𝐀𝐂𝐈𝐀𝐑,𝐃𝐀𝐒 𝐏𝐄𝐍𝐀 𝐁𝐑𝐎 😎.');
  if (!isBotAdmin) return m.reply('❌ El bot necesita ser administrador para eliminar miembros.');

  if (typeof global.db?.data?.chats[m.chat] === 'object') {
    global.db.data.chats[m.chat].welcome = false;
  }

  await m.reply('⚠️ ATENCIÓN: ¡𝐇𝐎𝐋𝐀𝐀𝐀𝐀  𝐃𝐈𝐎𝐎𝐎𝐎𝐒 (excepto el bot), en lotes de 15!');

  const toKick = participants.map(u => u.id).filter(id => id !== conn.user.jid);

  if (toKick.length === 0) return m.reply('✅ No hay miembros que eliminar (solo queda el bot).');

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

  await m.reply(`✅ El grupo ha sido vaciado (${expulsados} expulsados). Solo queda el bot.`);
};

handler.help = ['vaciar'];
handler.tags = ['grupo'];
handler.command = ['vaciar'];
handler.group = true;

export default handler;;