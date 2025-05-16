export default {
  name: 'creador',
  description: 'Contacto del creador del Bot',
  async run(m, { conn }) {
    const texto = `
*👑 Creador del Bot:*
• Nombre: The-King-Brayan
• WhatsApp: wa.me/5215538611955

¿Tienes dudas, sugerencias o reportes? ¡Contáctame!
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}