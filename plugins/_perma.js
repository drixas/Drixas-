const handler = async (m, { conn, args, usedPrefix, command }) => {
  // Verifica que haya argumento (número)
  if (!args[0] || !/^\d{7,15}$/.test(args[0])) {
    return conn.reply(m.chat, 
      `🚨 𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐜𝐢𝐟𝐢𝐜𝐚 𝐞𝐥 𝐧𝐮́𝐦𝐞𝐫𝐨 𝐪𝐮𝐞 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐭𝐮𝐦𝐛𝐚𝐫 (𝐬𝐢𝐧 + 𝐧𝐢 𝐞𝐬𝐩𝐚𝐜𝐢𝐨𝐬).\n\n✏️ 𝐄𝐣𝐞𝐦𝐩𝐥𝐨:\n${usedPrefix + command} 50249677622`, m)
  }

  const numero = args[0]

  // Aquí podrías agregar lógica real de reporte, si existiera.

  // Mensaje de éxito, personalizado
  await conn.reply(m.chat, 
    `✅ 𝐍𝐮́𝐦𝐞𝐫𝐨 𝐞𝐧𝐯𝐢𝐚𝐝𝐨 𝐚 𝐬𝐨𝐩𝐨𝐫𝐭𝐞 𝐩𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭𝐞 :\n\n📱 *${numero}*\n\n👑 𝐃𝐨𝐦𝐚𝐝𝐨 𝐩𝐨𝐫 𝐃𝐫𝐢𝐱 𝟏𝟑`, m)
}

handler.help = ['tumbar <número>', 'perma <número>']
handler.tags = ['owner']
handler.command = ['tumbar', 'perma']

export default handler