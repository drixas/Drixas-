// plugins/drix.js

const activeDrix = {};

const handler = async (m, { conn, participants, command, text }) => {
  // Validar uso solo en grupos
  if (!m.isGroup) return m.reply('❌ Este comando solo se puede usar en grupos.');

  // Lista de administradores del grupo
  const admins = participants.filter(u => u.admin).map(u => u.id);
  if (!admins.includes(m.sender)) return m.reply('❌ Solo los administradores pueden usar este comando.');

  // Activar modo conversación
  if ((command === 'drix') && !text) {
    activeDrix[m.chat + '-' + m.sender] = true;
    return m.reply('👋Hola Humano soy Drixas-Bot ¿en qué puedo ayudarte inútil?\n\n(Escribe "salir" para terminar la conversación)');
  }

  // Si ese admin activó la conversación en ese grupo
  if (activeDrix[m.chat + '-' + m.sender]) {
    // Salir del modo conversación
    if (/^(salir|adios|chao)$/i.test(text)) {
      delete activeDrix[m.chat + '-' + m.sender];
      return m.reply('👋 Adiós humano admin, vuelve cuando quieras molestar.');
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
handler.group = true;   // Solo en grupos
handler.admin = true;   // Solo para admins

export default handler;