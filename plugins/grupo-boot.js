// plugins/boot.js
export function command_boot() {
  return {
    handler: async (m, { conn }) => {
      // Verifica si el mensaje es exactamente .boot (ignora mayúsculas/minúsculas)
      if (m.text.toLowerCase() === '.boot') {
        // Respuesta con emoji y texto exacto
        await conn.sendMessage(m.chat, { 
          text: '🤪Hola Humano que Necesitas. No puedes Hacer Nada por ti mismo dime en que te puedo ayudar'
        }, { quoted: m });
      }
    },
    tags: ['fun', 'interaction'],
    help: ['boot'],
    desc: 'El bot responde de manera sarcástica al comando .boot'
  };
}
