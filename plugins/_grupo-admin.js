const OWNER_ID = '573013373310@s.whatsapp.net'; // Tu número

global.subBots = global.subBots || []; // Lista global para sub-bots

// Comando para aceptar sub-bot
const aceptarSubBot = async (m, { args }) => {
  if (m.isGroup) return m.reply('❌ Este comando solo se puede usar en el chat privado con el bot.');
  if (m.sender !== OWNER_ID) return m.reply('❌ Solo el owner puede aceptar sub-bots.');
  const subbot = args[0]?.replace(/[^0-9]/g, '');
  if (!subbot) return m.reply('Debes escribir el número del sub-bot que quieres aceptar.');
  const jid = subbot + '@s.whatsapp.net';
  if (!global.subBots.includes(jid)) global.subBots.push(jid);
  m.reply(`✅ Sub-bot ${subbot} aceptado.\n\n*Me siento poderoso al aceptar un nuevo sub-bot en el sistema.*`);
};
aceptarSubBot.help = ['aceptar-subbots <numero>'];
aceptarSubBot.tags = ['owner'];
aceptarSubBot.command = ['aceptar-subbots'];

// Comando para rechazar sub-bot
const rechazarSubBot = async (m, { args }) => {
  if (m.isGroup) return m.reply('❌ Este comando solo se puede usar en el chat privado con el bot.');
  if (m.sender !== OWNER_ID) return m.reply('❌ Solo el owner puede rechazar sub-bots.');
  const subbot = args[0]?.replace(/[^0-9]/g, '');
  if (!subbot) return m.reply('Debes escribir el número del sub-bot que quieres rechazar.');
  const jid = subbot + '@s.whatsapp.net';
  global.subBots = global.subBots.filter(id => id !== jid);
  m.reply(`🚫 Sub-bot ${subbot} rechazado.\n\n*Me siento selectivo al rechazar este intento de sub-bot.*`);
};
rechazarSubBot.help = ['rechazar-subbots <numero>'];
rechazarSubBot.tags = ['owner'];
rechazarSubBot.command = ['rechazar-subbots'];

export { aceptarSubBot as handler, rechazarSubBot };