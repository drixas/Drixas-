// plugins/drix.js

const activeDrix = {};

const handler = async (m, { conn, text, command }) => {
  // Activar modo conversación al usar 'drix'
  if ((command === 'drix') && !text) {
    activeDrix[m.sender] = true;
    return m.reply('👋Hola Humano soy Drixas-Bot ¿en qué puedo ayudarte inútil?\n\n(Escribe "salir" para terminar la conversación)');
  }

  // Si el usuario está en modo conversación
  if (activeDrix[m.sender]) {
    // Salir del modo conversación
    if (/^(salir|adios|chao)$/i.test(text)) {
      delete activeDrix[m.sender];
      return m.reply('👋 Adiós humano, vuelve cuando quieras molestar.');
    }

    // Preguntas frecuentes y funciones
    if (/menu|comandos|ayuda/i.test(text)) {
      return m.reply('Aquí tienes el menú principal:\n\n*#menu* para ver todos los comandos.');
    }
    if (/quien eres|nombre|como te llamas|quién eres/i.test(text)) {
      return m.reply('Soy Drixas-Bot, el bot más útil e inútil a la vez.');
    }
    if (/version|actualizacion|update/i.test(text)) {
      return m.reply('Estoy siempre actualizado a la última versión disponible.');
    }
    if (/creador|author|dueño/i.test(text)) {
      return m.reply('Mi creador es Drixas. ¿Alguna otra duda inútil?');
    }
    if (/foto|imagen|meme/i.test(text)) {
      let url = 'https://i.imgur.com/1Q9Z1Zm.jpg';
      return await conn.sendFile(m.chat, url, 'imagen.jpg', 'Aquí tienes una imagen inútil.', m);
    }
    if (/sticker/i.test(text)) {
      let url = 'https://i.imgur.com/1Q9Z1Zm.jpg';
      return await conn.sendFile(m.chat, url, 'sticker.webp', '', m, true, { asSticker: true });
    }

    // Respuesta por defecto
    return m.reply('🤖 No entendí tu pregunta, pero puedes preguntarme sobre el sistema, menú, imágenes o stickers.\n\nEscribe "salir" si quieres terminar.');
  }
};

handler.help = ['drix'];
handler.tags = ['info'];
handler.command = /^drix$/i;
handler.group = true;    // También funciona en grupos
handler.private = true;  // También funciona en privado

export default handler;