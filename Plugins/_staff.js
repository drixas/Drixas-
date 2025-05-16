export default {
  name: ['staff', 'colaboradores'],
  description: 'Muestra la lista de desarrolladores del Bot',
  async run(m, { conn }) {
    const texto = `
╭━━━✦ 𝙎𝙏𝘼𝙁𝙁 & 𝘾𝙊𝙇𝘼𝘽𝙊𝙍𝘼𝘿𝙊𝙍𝙀𝙎 ✦━━━╮

👑 *Creador Principal*
• The-King-Brayan
• wa.me/573221234567

👨‍💻 *Desarrollador Principal*
• Drixas
• wa.me/584140000000

🤖 *Colaboradores*
• User1 — Diseño y recursos
• User2 — Beta Tester

¿Quieres formar parte del staff? Contacta al owner con .creador

╰━━━━━━━━━━━━━━━━━━━━━━╯
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}