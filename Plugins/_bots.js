export default {
  name: ['bots'],
  description: 'Ver la lista de Sub-Bot activos',
  async run(m, { conn }) {
    const texto = `
🤖 *Lista de Sub-Bots Activos* 🤖

1. Drixas SubBot 1
   • Estado: 🟢 Activo
   • Enlace: https://wa.me/584140000000

2. Drixas SubBot 2
   • Estado: 🟡 En mantenimiento
   • Enlace: https://wa.me/584120000000

3. Drixas SubBot 3
   • Estado: 🔴 Inactivo
   • Enlace: https://wa.me/584150000000

¿Quieres tu propio Sub-Bot? Usa el comando .serbot para más información.
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}