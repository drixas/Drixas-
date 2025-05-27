import { WAMessageStubType } from '@whiskeysockets/baileys'
import fetch from 'node-fetch'

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"}  
  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://raw.githubusercontent.com/The-King-Destroy/Adiciones/main/Contenido/1745522645448.jpeg')
  let img = await (await fetch(`${pp}`)).buffer()
  let chat = global.db.data.chats[m.chat]
  // Aquí puedes personalizar los títulos de las cards
  let txt = '👋🏻 𝐍𝐄𝐖 𝐌𝐄𝐌𝐁𝐄𝐑'
  let txt1 = '👋🏻 𝐁𝐘𝐄 𝐌𝐄𝐌𝐁𝐄𝐑'
  let groupSize = participants.length
  if (m.messageStubType == 27) {
    groupSize++;
  } else if (m.messageStubType == 28 || m.messageStubType == 32) {
    groupSize--;
  }

  if (chat.welcome && m.messageStubType == 27) {
    let bienvenida = `🎉 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 𝐥𝐚 𝐟𝐚𝐦𝐢𝐥𝐢𝐚 *${groupMetadata.subject}*!\n👤 @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom1 || ""}\n👥 𝐀𝐡𝐨𝐫𝐚 𝐬𝐨𝐦𝐨𝐬 ${groupSize} 𝐦𝐢𝐞𝐦𝐛𝐫𝐨𝐬.\n🐾 𝐃𝐢𝐬𝐟𝐫𝐮𝐭𝐚 𝐭𝐮 𝐞𝐬𝐭𝐚𝐝𝐢́𝐚 𝐞𝐧 𝐞𝐥 𝐠𝐫𝐮𝐩𝐨.\n\nℹ️ 𝐏𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 *#help* 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.`
    await conn.sendMini(m.chat, txt, dev, bienvenida, img, img, redes, fkontak)
  }

  if (chat.welcome && (m.messageStubType == 28 || m.messageStubType == 32)) {
    let bye = `👋🏻 𝐀𝐝𝐢𝐨́𝐬 𝐝𝐞 *${groupMetadata.subject}*\n👤 @${m.messageStubParameters[0].split`@`[0]}\n${global.welcom2 || ""}\n👥 𝐀𝐡𝐨𝐫𝐚 𝐬𝐨𝐦𝐨𝐬 ${groupSize} 𝐦𝐢𝐞𝐦𝐛𝐫𝐨𝐬.\n🐾 𝐓𝐞 𝐞𝐬𝐩𝐞𝐫𝐚𝐦𝐨𝐬 𝐩𝐫𝐨𝐧𝐭𝐨.\n\nℹ️ 𝐏𝐮𝐞𝐝𝐞𝐬 𝐮𝐬𝐚𝐫 *#help* 𝐩𝐚𝐫𝐚 𝐯𝐞𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.`
    await conn.sendMini(m.chat, txt1, dev, bye, img, img, redes, fkontak)
  }
}
