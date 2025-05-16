export default {
  name: ['menu', 'menulista'],
  description: 'Ver lista de comandos del Bot',
  async run(m, { conn }) {
    const texto = `
╭━━━✦ 𝙈𝙀𝙉𝙐 𝘿𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 ✦━━━╮

*👤 Información*
• .infobot — Info de la bot
• .status — Estado de la bot
• .creador — Contacto del owner
• .links — Enlaces oficiales

*🛠️ Utilidad*
• .p / .ping — Ping, velocidad del bot
• .horavnz — Hora de Venezuela
• .reporte / .reportar — Reportar fallos

*🤖 Sub-Bots*
• .serbot — Crear sesión de sub-bot
• .bots — Ver lista de sub-bots

*💬 Comunidad*
• .grupos / .links — Grupos y canales oficiales

¿Necesitas ayuda más específica? Usa .creador para contactar al owner.
╰━━━━━━━━━━━━━━━━━━━━━━╯
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}