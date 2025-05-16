export default {
  name: ['serbot', 'jadibot'],
  description: 'Conviértete en sub-bot temporal (Jadibot/Serbot).',
  async run(m, { conn }) {
    const texto = `
🤖 *Modo Jadibot / Serbot* 🤖

¡Hola! Con este comando puedes convertirte en un sub-bot temporal de Drixas-Bot.
Esto te permite administrar tu propio grupo o comunidad usando el bot principal.

⏳ *¿Cómo funciona?*
- Al activar este modo, recibirás instrucciones y un QR (o link) para enlazar tu número.
- Tu sesión será temporal y controlada desde aquí.
- Para detener el modo sub-bot, usa el comando correspondiente (.stopjadibot o consulta el menú).

*⚠️ Si tienes dudas, contacta al creador del bot.*
    `.trim();

    // Puedes agregar aquí la lógica para iniciar el modo jadibot/serbot.
    // Por ejemplo, enviar un QR, instrucciones, o activar un proceso según tu sistema.

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
};