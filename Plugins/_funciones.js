export default {
  name: ['funciones', 'totalfunciones'],
  description: 'Ver todas las funciones del Bot',
  async run(m, { conn }) {
    const texto = `
📚 *FUNCIONES DEL BOT DISPONIBLES* 📚

• .menu — Ver el menú completo
• .infobot — Información del bot
• .links — Links oficiales y grupos
• .estatus — Estado actual del bot
• .usuarios — Usuarios registrados
• .bots — Sub-bots activos
• .sistema — Estado del sistema de alojamiento
• .ping — Velocidad de respuesta
• .speed — Estadísticas de velocidad
• .staff — Ver desarrolladores/colaboradores
• .reporte — Reportar errores o bugs
• .serbot — Solicitar tu propio sub-bot

Y muchas más... Usa .menu para ver el listado completo y detallado de comandos.

¿Falta alguna función? ¡Sugiere nuevas con .reporte!
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}