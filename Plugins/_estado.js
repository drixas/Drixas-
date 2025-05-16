export default {
  name: ['estatus', 'estado'],
  description: 'Ver el estado actual del Bot',
  async run(m, { conn }) {
    // Uptime
    const uptimeMs = process.uptime() * 1000;
    const uptime = msToTime(uptimeMs);

    // Estado (puedes personalizar la lógica)
    const estado = '🟢 Operativo y funcionando correctamente';

    // Fecha y hora actuales
    const fecha = new Date().toLocaleDateString('es-VE', { timeZone: 'America/Caracas' });
    const hora = new Date().toLocaleTimeString('es-VE', { timeZone: 'America/Caracas' });

    const texto = `
╭━━━✦ 𝙀𝙎𝙏𝘼𝘿𝙊 𝘿𝙀𝙇 𝘽𝙊𝙏 ✦━━━╮

*Estado:* ${estado}
*Uptime:* ${uptime}
*Fecha:* ${fecha}
*Hora:* ${hora}

¿Ves algún fallo? Usa .reporte para avisar al staff.
╰━━━━━━━━━━━━━━━━━━━━━━╯
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