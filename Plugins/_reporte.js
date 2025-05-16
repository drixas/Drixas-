export default {
  name: ['reporte', 'reportar'],
  description: 'Reportar alguna falla o problema del Bot.',
  async run(m, { conn }) {
    const texto = `
🚨 *Reporte de Fallas o Problemas del Bot* 🚨

Si has encontrado un error, bug o tienes algún problema con el bot, por favor repórtalo siguiendo estos pasos:

1. Escribe una breve descripción del problema.
2. Adjunta una imagen (opcional) si ayuda a entender el error.
3. Envía tu reporte directamente al owner usando el comando .creador o al siguiente WhatsApp: wa.me/573221234567

¡Tu ayuda contribuye a mejorar el bot! Gracias por tu colaboración.
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}