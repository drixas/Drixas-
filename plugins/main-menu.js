let handler = async (m, { conn, args }) => {
    let userId = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    let user = global.db.data.users[userId]
    let name = conn.getName(userId)
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length
    
    let txt = `H 
import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'

const defaultMenu = {
  before: `*─ׄ─ׅ─⭒─ׄ─ׄ─⭒─ׅ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׄ─*

Hola *%name* soy *Barboza*

╔══════ •『 𝑪𝑹𝑬𝑨𝑫𝑶𝑹 』
║  🖥 drixas-Bot
╚═════ ♢.✰.♢ ══════
╔══════ •『 𝑰𝑵𝑭𝑶-𝑩𝑶𝑻 』
║  👤 Cliente: %name
║  ⭐ Exp: %exp
║  ⚡ Nivel: %level
╚═════ ♢.✰.♢ ═══════

╔══════ •『 𝑰𝑵𝑭𝑶-𝑼𝑺𝑬𝑹』
║  🤖 Bot: ©Bot-Barboza-Ai®
║  💎 Modo Público
║  💨 Baileys: Multi Device
║  🪄 Tiempo Activo: %muptime
║  🎩 Usuarios: %totalreg 
╚═════ ♢.✰.♢ ════════

*─ׄ─ׄ─⭒─ׄ─ׅ─ׄ⭒─ׄ─ׄ─⭒─ׄ─ׄ─⭒─ׄ─ׅ─*
 %readmore
\t\t\t⚙️_*𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒*_ 🚀
`.trimStart(),
  header: '*╭╍╍╍╍❖【 *%category* 】',
  body: '┋💎›【 %cmd %islimit %isPremium',
  footer: '*╰╍╍╍╍❖•ೋ° °ೋ•❖╍╍╍╍╯*',
  after: `© Bot-Drixas`,
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let mode = global.opts["self"] ? "Privado" : "Público"
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)

    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let time = d.toLocaleTimeString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })

    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length

    let tags = {
      'main': '❗ _INFO_ ❕',
      'search': '🔎 _SEARCH_ 🔍',
      'game': '🕹️ GAME 🎮',
      'group': '👥 _GROUPS_ 📢',
      'sticker': '💟 _STICKERS_ 🏷️',
      'tools': '🔧 _TOOLS_ 🛠️',
      'premium': '💎 _PREMIUM_ 👑',
      'owner': '👤 _OWNER_ 👁️',
      // Agrega más categorías si lo deseas
    }

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => ({
      help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
      tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
      prefix: 'customPrefix' in plugin,
      limit: plugin.limit,
      premium: plugin.premium,
    }))

    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag

    let menu = [
      defaultMenu.before,
      ...Object.keys(tags).map(tag => {
        return defaultMenu.header.replace(/%category/g, tags[tag]) + '\n' +
          help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(cmd => {
              return defaultMenu.body
                .replace(/%cmd/g, menu.prefix ? cmd : _p + cmd)
                .replace(/%islimit/g, menu.limit ? '◜⭐◞' : '')
                .replace(/%isPremium/g, menu.premium ? '◜🪪◞' : '')
            }).join('\n')
          }).join('\n') +
          '\n' + defaultMenu.footer
      }),
      defaultMenu.after
    ].join('\n')

    const replace = {
      '%': '%',
      p: _p,
      name,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      level,
      limit,
      totalreg,
      muptime,
      uptime,
      readmore: readMore
    }

    let text = menu.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join('|')})`, 'g'), (_, key) => replace[key])

    const images = [
      'https://i.ibb.co/CPVcnqH/file.jpg',
      'https://i.ibb.co/9WrytGt/file.jpg',
      'https://i.ibb.co/JmcS3kv/Sylph.jpg',
      'https://i.ibb.co/Cs6Tt9V/Sylph.jpg',
      'https://files.catbox.moe/l81ahk.jpg',
      'https://d.uguu.se/iqqLBUfF.jpg'
    ]
    const img = images[Math.floor(Math.random() * images.length)]

    await m.react('⭐')
    await conn.sendFile(m.chat, img, 'menu.jpg', text.trim(), m)

  } catch (e) {
    console.error(e)
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error interno.', m)
  }
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['allmenu', 'menucompleto', 'menúcompleto', 'menú', 'menu']
handler.register = true

export default handler