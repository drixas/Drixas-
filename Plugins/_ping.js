export default {
  name: ['p', 'ping'],
  description: 'Ver la Velocidad de respuesta del Bot',
  async run(m, { conn }) {
    const start = Date.now();
    await conn.sendMessage(m.chat, { text: '🏓 Calculando ping...' }, { quoted: m });
    const ping = Date.now() - start;

    const texto = `
*🏓 PING*
• Velocidad de respuesta: *${ping} ms*
• Estado: ${ping < 300 ? '✅ Excelente' : ping < 600 ? '🟡 Bueno' : '🔴 Lento'}
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}