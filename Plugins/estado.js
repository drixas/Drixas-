export default {
  name: ['status', 'estado'],
  description: 'Ver el Estado actual de la Bot.',
  async run(m, { conn }) {
    // Puedes personalizar el mensaje de estado aquí
    const texto = `
✦ 𝙀𝙨𝙩𝙖𝙙𝙤 𝙙𝙚 𝙡𝙖 𝘽𝙤𝙩

• Estado: ✅ En línea y operativa
• Uptime: ${msToTime(process.uptime() * 1000)}
• Usuarios activos: [No disponible]
• Última actualización: [No disponible]

¿Necesitas ayuda? Usa el comando .menu
    `.trim();

    // Función para convertir ms a hh:mm:ss
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