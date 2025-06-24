var handler = async (m, { conn,usedPrefix, command, text }) => {

if (isNaN(text) && !text.match(/@/g)){

} else if (isNaN(text)) {
var number = text.split`@`[1]
} else if (!isNaN(text)) {
var number = text
}

if (!text && !m.quoted) return conn.reply(m.chat, `${emoji} Debes mencionar a un usuario para poder degradarlo de administrador.`, m)
if (number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `${emoji} Debes mencionar a un usuario para poder degradarlo de administrador.`, m)

try {
if (text) {
var user = number + '@s.whatsapp.net'
} else if (m.quoted.sender) {
var user = m.quoted.sender
} else if (m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'demote')
conn.reply(m.chat, `${emoji2} 𝐍𝐨 𝐞𝐬𝐭𝐚𝐬 𝐞𝐜𝐡𝐨 𝐩𝐚𝐫𝐚 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧 𝐦𝐞𝐣𝐨𝐫 𝐯𝐞 𝐚 𝐞𝐬𝐭𝐮𝐝𝐢𝐚𝐫 📚✏.`, m)
}

}
handler.help = ['demote']
handler.tags = ['grupo']
handler.command = ['demote','quitarpija', 'degradar']
handler.group = true
handler.admin = true
handler.fail = null

export default handler