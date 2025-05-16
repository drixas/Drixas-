import os from 'os';

export default {
  name: ['sistema'],
  description: 'Ver estado del sistema de alojamiento',
  async run(m, { conn }) {
    // Información del sistema
    const plataforma = os.platform();
    const arquitectura = os.arch();
    const cpus = os.cpus().length;
    const usoMemTotal = os.totalmem();
    const usoMemLibre = os.freemem();
    const usoMem = usoMemTotal - usoMemLibre;
    const usoMemPorc = ((usoMem / usoMemTotal) * 100).toFixed(2);

    const texto = `
🖥️ *Estado del Sistema de Alojamiento* 🖥️

• Plataforma: ${plataforma} (${arquitectura})
• CPUs: ${cpus}
• RAM usada: ${(usoMem / 1024 / 1024).toFixed(2)} MB / ${(usoMemTotal / 1024 / 1024).toFixed(2)} MB (${usoMemPorc}%)
• RAM libre: ${(usoMemLibre / 1024 / 1024).toFixed(2)} MB

• Uptime del sistema: ${msToTime(os.uptime() * 1000)}

¿Notas lentitud o caídas? Usa .reporte para avisar al staff.
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