export default {
  name: ['views', 'usuarios'],
  description: 'Ver la cantidad de usuarios registrados en el sistema',
  async run(m, { conn }) {
    // Obtenemos la cantidad de usuarios registrados
    const totalUsuarios = global.db && global.db.data && global.db.data.users
      ? Object.keys(global.db.data.users).length
      : 0;

    const texto = `
👥 *Usuarios Registrados en el Sistema* 👥

• Total de usuarios: *${totalUsuarios}*

¡Gracias por ser parte de la comunidad!
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}