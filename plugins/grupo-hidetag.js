// code traído por Xi_Crew
import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import * as fs from 'fs'

var handler = async (m, { conn, text, participants, isOwner, isAdmin }) => {
  const firma = '𝘋𝘳𝘪𝘹𝘢𝘴-𝘉𝘰𝘵'
  const salto = '\n\n' // dos líneas

  // 👇 Aquí la reacción al ejecutar el comando
  try {
    await conn.sendMessage(m.chat, { react: { text: "🔔", key: m.key }})
  } catch (e) {
    // Si tu versión no soporta reactions, puedes ignorar este error
  }

  if (!m.quoted && !text) return conn.reply(m.chat, `Debes enviar un texto para hacer un tag.`, m)

  try {
    let users = participants.map(u => conn.decodeJid(u.id))
    let q = m.quoted ? m.quoted : m || m.text || m.sender
    let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
    let msg = conn.cMod(
      m.chat,
      generateWAMessageFromContent(
        m.chat,
        {
          [m.quoted ? q.mtype : 'extendedTextMessage']:
            m.quoted ? c.message[q.mtype] : { text: '' || c }
        },
        { quoted: null, userJid: conn.user.id }
      ),
      (text || q.text) + salto + firma,
      conn.user.jid,
      { mentions: users }
    )
    await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch {

    let users = participants.map(u => conn.decodeJid(u.id))
    let quoted = m.quoted ? m.quoted : m
    let mime = (quoted.msg || quoted).mimetype || ''
    let isMedia = /image|video|sticker|audio/.test(mime)
    let more = String.fromCharCode(8206)
    let masss = more.repeat(850)

    let htextos = `${text ? text : "*Hola!!*"}${salto}${firma}`

    if ((isMedia && quoted.mtype === 'imageMessage') && htextos) {
      var mediax = await quoted.download?.()
      conn.sendMessage(m.chat, { image: mediax, mentions: users, caption: htextos }, { quoted: null })
    } else if ((isMedia && quoted.mtype === 'videoMessage') && htextos) {
      var mediax = await quoted.download?.()
      conn.sendMessage(m.chat, { video: mediax, mentions: users, mimetype: 'video/mp4', caption: htextos }, { quoted: null })
    } else if ((isMedia && quoted.mtype === 'audioMessage') && htextos) {
      var mediax = await quoted.download?.()
      conn.sendMessage(m.chat, { audio: mediax, mentions: users, mimetype: 'audio/mp4', fileName: `Hidetag.mp3` }, { quoted: null })
    } else if ((isMedia && quoted.mtype === 'stickerMessage') && htextos) {
      var mediax = await quoted.download?.()
      conn.sendMessage(m.chat, { sticker: mediax, mentions: users }, { quoted: null })
    } else {
      await conn.relayMessage(
        m.chat,
        {
          extendedTextMessage: {
            text: `${masss}\n${htextos}\n`,
            contextInfo: {
              mentionedJid: users
              // Puedes añadir aquí externalAdReply si deseas
            }
          }
        },
        {}
      )
    }
  }
}

handler.help = ['hidetag']
handler.tags = ['grupo']
handler.command = ['hidetag', 'notificar', 'notify', 'tag', 'n'] // 👈 aquí agregamos 'n'
handler.group = true
handler.admin = true
handler.register = true

export default handler