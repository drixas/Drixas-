// plugins/bot.js
export function command_bot() {
  return {
    handler: async (m, { conn, usedPrefix, command }) => {
      // Verificar si el mensaje comienza con .bot
      if (m.text.toLowerCase() === '.bot') {
        // Responder con el mensaje solicitado
        await conn.reply(m.chat, `🤪Hola Humano que Necesitas. No puedes Hacer Nada por ti mismo dime en que te puedo ayudar`, m);
      }
    },
    tags: ['fun'],
    help: ['bot'],
    desc: 'El bot responde de manera sarcástica'
  };
}
