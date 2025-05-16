export default {
  name: ['uptime', 'runtime'],
  description: 'Ver el tiempo activo del Bot',
  async run(m, { conn }) {
    // Tiempo activo en milisegundos
    const uptimeMs = process.uptime() * 1000;
    const tiempo = msToTime(uptimeMs);

    const texto = `
⏳ *Tiempo activo del Bot* ⏳

• Uptime: ${tiempo}
    `.trim();

    // Convierte ms a formato d h m s
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