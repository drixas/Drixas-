let handler = async (m, { conn, args, usedPrefix, command }) => {
  const emoji = '🔓';
  const emoji2 = '🔒';
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg');

  let isClose = {
    'open': 'not_announcement',
    'close': 'announcement',
    'abierto': 'not_announcement',
    'cerrado': 'announcement',
    'abrir': 'not_announcement',
    'cerrar': 'announcement',
  }[(args[0] || '').toLowerCase()];

  if (isClose === undefined) {
    return conn.reply(
      m.chat,
      `❗ 𝐄𝐥𝐢𝐠𝐞 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨́𝐧 𝐩𝐚𝐫𝐚 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐫 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨:\n\n` +
      `✰ ${emoji} *#${command} 𝐚𝐛𝐫𝐢𝐫*\n` +
      `✰ ${emoji2} *#${command} 𝐜𝐞𝐫𝐫𝐚𝐫*\n` +
      `✰ ${emoji} *#${command} 𝐨𝐩𝐞𝐧*\n` +
      `✰ ${emoji2} *#${command} 𝐜𝐥𝐨𝐬𝐞*`,
      m
    );
  }

  await conn.groupSettingUpdate(m.chat, isClose);

  if (isClose === 'not_announcement') {
    m.reply(`🔓 𝐄𝐥 𝐠𝐫𝐮𝐩𝐨 𝐞𝐬𝐭𝐚́ 𝐀𝐁𝐈𝐄𝐑𝐓𝐎, 𝐭𝐨𝐝𝐨𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫.`);
  }

  if (isClose === 'announcement') {
    m.reply(`🔒 𝐄𝐥 𝐠𝐫𝐮𝐩𝐨 𝐡𝐚 𝐬𝐢𝐝𝐨 𝐂𝐄𝐑𝐑𝐀𝐃𝐎, 𝐬𝐨𝐥𝐨 𝐚𝐝𝐦𝐢𝐧𝐬 𝐩𝐮𝐞𝐝𝐞𝐧 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫.`);
  }
};

handler.help = ['group open / close', 'grupo abrir / cerrar'];
handler.tags = ['grupo'];
handler.command = ['group', 'grupo'];
handler.admin = true;
handler.botAdmin = true;

export default handler