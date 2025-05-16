export default {
  name: ['links', 'grupos'],
  description: 'Muestra los Links oficiales del Bot',
  async run(m, { conn }) {
    const texto = `
🌐 *Links Oficiales del Bot* 🌐

• Grupo Soporte WhatsApp: https://chat.whatsapp.com/XXXXXXXXXXXXXX
• Canal Oficial WhatsApp: https://whatsapp.com/channel/XXXXXXXXXXXXXX
• GitHub del Proyecto: https://github.com/drixas/Drixas-
• Instagram: https://instagram.com/tu_instagram
• Telegram: https://t.me/tu_telegram

¿Quieres reportar un problema? Usa .reporte

¡Únete y sé parte de la comunidad!
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}