let handler = async (m, { conn, usedPrefix, command }) => {
  if (!m.quoted) return conn.reply(m.chat, '❌ Por favor, cita el mensaje que deseas eliminar.', m)
  try {
    // Verificamos que existan las propiedades necesarias
    const contextInfo = m.message.extendedTextMessage?.contextInfo
    const participant = contextInfo?.participant
    const stanzaId = contextInfo?.stanzaId

    if (participant && stanzaId) {
      return await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: stanzaId, participant } })
    } else if (m.quoted?.vM?.key) {
      return await conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
    } else if (m.quoted?.key) {
      return await conn.sendMessage(m.chat, { delete: m.quoted.key })
    } else {
      return conn.reply(m.chat, '❌ No se pudo obtener la información del mensaje citado.', m)
    }
  } catch (e) {
    return conn.reply(m.chat, `❌ Error al intentar eliminar el mensaje: ${e}`, m)
  }
}

handler.help = ['delete']
handler.tags = ['grupo']
handler.command = ['del', 'delete']
handler.group = false
handler.admin = true

export default handler