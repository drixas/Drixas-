const OWNER_ID = '573013373310@s.whatsapp.net'; // Tu número de owner

global.subBots = global.subBots || []; // Lista global de sub-bots

// Comando para solicitar ser sub-bot
const code = async (m, { args }) => {
  if (m.isGroup) return m.reply('❌ Este comando solo se puede usar en el chat privado con el bot.');
  // Puedes agregar lógica para que el owner reciba la solicitud
  return m.reply(
    `Has solicitado ser sub-bot.\n\nEl dueño revisará tu solicitud.`
  );
};
code.help = ['code'];
code.tags = ['owner'];
code.command = ['code'];

// Comando Owner: aceptar sub-bot
const aceptarCode = async (m, { args }) => {
  if (m.isGroup) return m.reply('❌ Este comando solo se puede usar en el chat privado con el bot.');
  if (m.sender !== OWNER_ID) return m.reply('❌ Solo el owner puede aceptar sub-bots.');
  const subbot = args[0]?.replace(/[^0-9]/g, '');
  if (!subbot) return m.reply('Debes escribir el número del sub-bot que quieres aceptar.');
  const jid = subbot + '@s.whatsapp.net';
  if (!global.subBots.includes(jid)) global.subBots.push(jid);
  m.reply(`✅ Sub-bot ${subbot} aceptado.\n\n*Me siento poderoso al aceptar un nuevo sub-bot en el sistema.*`);
};
aceptarCode.help = ['aceptar-code <numero>'];
aceptarCode.tags = ['owner'];
aceptarCode.command = ['aceptar-code'];

// Comando Owner: rechazar sub-bot
const rechazarCode = async (m, { args }) => {
  if (m.isGroup) return m.reply('❌ Este comando solo se puede usar en el chat privado con el bot.');
  if (m.sender !== OWNER_ID) return m.reply('❌ Solo el owner puede rechazar sub-bots.');
  const subbot = args[0]?.replace(/[^0-9]/g, '');
  if (!subbot) return m.reply('Debes escribir el número del sub-bot que quieres rechazar.');
  const jid = subbot + '@s.whatsapp.net';
  global.subBots = global.subBots.filter(id => id !== jid);
  m.reply(`🚫 Sub-bot ${subbot} rechazado.\n\n*Me siento selectivo al rechazar este intento de sub-bot.*`);
};
rechazarCode.help = ['rechazar-code <numero>'];
rechazarCode.tags = ['owner'];
rechazarCode.command = ['rechazar-code'];

export { code as handler, aceptarCode, rechazarCode };