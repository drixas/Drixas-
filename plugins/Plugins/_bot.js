export default {
  name: ['bot'],
  description: 'Responde a cualquier mensaje o pregunta que empiece con "bot"',
  async run(m, { conn, args }) {
    // Une el resto del mensaje después de "bot"
    const pregunta = args.join(' ').trim();

    // Respuesta básica predeterminada
    let respuesta = `Hola humano, soy *Drixas-Bot*. ¿En qué te puedo ayudar?`;

    if (pregunta) {
      // Puedes agregar lógica personalizada para responder preguntas comunes
      if (/hola|buenas/i.test(pregunta)) {
        respuesta = '¡Hola humano! ¿En qué te puedo ayudar hoy sobre el sistema de Drixas-Bot?';
      } else if (/menu|comandos|ayuda/i.test(p *.menu*';
      } else if (/creador|owner/i.test(pregunta)) {
        respuesta = 'Puedes contactar al creador aquí: wa.me/573221234567';
      } else if (/problema|error|bug/i.test(pregunta)) {
        respuesta = 'Si encontraste un problema, por favor repórtalo usando *.reporte* y describe tu caso.';
      } else {
        respuesta = `Hola humano, soy *Drixas-Bot*. Sobre tu pregunta: "${pregunta}"\n\n¿Podrías darme más detalles para ayudarte mejor?`;
      }
    }

    await conn.sendMessage(m.chat, { text: respuesta }, { quoted: m });
  }
}
