// Diccionario de códigos de país a bandera
const countryFlags = {
  '58': '🇻🇪', // Venezuela
  '52': '🇲🇽', // México
  '54': '🇦🇷', // Argentina
  '51': '🇵🇪', // Perú
  '55': '🇧🇷', // Brasil
  '57': '🇨🇴', // Colombia
  '591': '🇧🇴', // Bolivia
  '56': '🇨🇱', // Chile
  '593': '🇪🇨', // Ecuador
  '595': '🇵🇾', // Paraguay
  '507': '🇵🇦', // Panamá
  // Agrega más si lo necesitas
}

// Función para obtener bandera y código de país según el número
function getFlagAndCode(number) {
  for (let len = 3; len >= 1; len--) {
    const code = number.slice(0, len)
    if (countryFlags[code]) return { flag: countryFlags[code], code }
  }
  return { flag: '🏳️', code: number.slice(0, 2) }
}

let handler = async (m, { conn, participants, isAdmin, isBotAdmin, groupMetadata }) => {
  if (!m.isGroup) return m.reply('Este comando solo puede usarse en grupos.')
  if (!isAdmin) return m.reply('Solo los administradores pueden usar este comando.')
  if (!isBotAdmin) return m.reply('Necesito ser administrador para mencionar a todos.')

  let mensaje = ''
  let mentions = []

  for (let user of participants) {
    let num = user.id.split('@')[0] // ej: 521234567890
    let { flag, code } = getFlagAndCode(num)
    mensaje += `${flag} +${code}${num.slice(code.length)}\n`
    mentions.push(user.id)
  }

  await conn.sendMessage(m.chat, { text: mensaje.trim(), mentions })
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall', 'todos', 'invocar']
handler.admin = true
handler.group = true

export default handler
