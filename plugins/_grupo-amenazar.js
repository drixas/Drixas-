let handler = async (m, { conn, args, usedPrefix, command }) => {
  // Si no se menciona número o @
  if (!args[0]) return m.reply(`⚠️ Debes ingresar el número o mencionar a la persona que quieres amenazar.\n\nEjemplo:\n${usedPrefix + command} 51987654321\n${usedPrefix + command} @usuario`);
  
  // Extraer el número o mención
  let target = args[0].replace(/[^0-9]/g, "") || (m.mentionedJid && m.mentionedJid[0]);
  if (!target) return m.reply('❌ No se detectó ningún número o mención válida.');

  // Lista de amenazas fuertes y realistas
  const amenazas = [
    "Si sigues molestando, te voy a buscar y no va a terminar bien para ti. Piénsalo dos veces antes de meterte conmigo.",
    "No sabes en el problema que te estás metiendo, puedo hacer que te arrepientas de tus decisiones.",
    "¿Crees que esto es un juego? Si te vuelvo a ver por aquí, vas a conocer el verdadero miedo.",
    "No me subestimes, tengo medios para hacerte la vida imposible. Última advertencia.",
    "Tus datos ya están en mis manos. No quieras saber lo que puedo hacer con ellos.",
    "Te recomiendo que desaparezcas antes de que las cosas se pongan realmente feas para ti."
  ];
  let amenaza = amenazas[Math.floor(Math.random() * amenazas.length)];

  // Mencionar al objetivo si es posible
  let mention = target.includes('@') ? [target] : [target + '@s.whatsapp.net'];

  conn.reply(m.chat, `🔪 *ATENCIÓN ${args[0]}*\n\n${amenaza}`, m, { mentions: mention });
};

handler.command = ['amenaza'];
handler.help = ['amenaza <número/@mención>'];
handler.tags = ['fun', 'owner'];

export default handler;