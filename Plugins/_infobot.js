export default {
  name: ['infobot', 'infobot'],
  description: 'Ver la información completa del Bot',
  async run(m, { conn }) {
    const texto = `
🤖 *INFORMACIÓN DEL BOT* 🤖

• Nombre: Drixas Bot
• Versión: 1.0.0
• Lenguaje: JavaScript (Node.js)
• Framework: Baileys/whatsapp-web.js
• Owner: The-King-Brayan
• GitHub: https://github.com/drixas/Drixas-
• Estado: 🟢 Online
• Fecha actual: ${new Date().toLocaleDateString('es-VE', { timeZone: 'America/Caracas' })}
• Hora actual: ${new Date().toLocaleTimeString('es-VE', { timeZone: 'America/Caracas' })}
• Uptime: ${msToTime(process.uptime() * 1000)}
• Usuarios activos: ${global.db && global.db.data && global.db.data.users ? Object.keys(global.db.data.users).length : 'N/A'}
• Grupos activos: ${global.db && global.db.data && global.db.data.chats ? Object.keys(global.db.data.chats).filter(v => v.endsWith('@g.us')).length : 'N/A'}

¿Dudas, sugerencias o problemas? Usa .reporte o .creador para contactar al staff.
    `.trim();

    function msToTime(duration) {
      let seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
          days = Math.floor(duration / (1000 * 60 * 60 * 24));
      return [
        days ? `${days}d` : '',
        hours ? `${hours}h` : '',
        minutes ? `${minutes}m` : '',
        `${seconds}s`
      ].filter(Boolean).join(' ');
    }

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}