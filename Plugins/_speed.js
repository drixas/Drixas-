import os from 'os';

export default {
  name: ['speed', 'speed'],
  description: 'Ver la estadística de Velocidad del Bot',
  async run(m, { conn }) {
    const start = Date.now();
    await conn.sendMessage(m.chat, { text: '⏱️ Midiendo velocidad...' }, { quoted: m });
    const latency = Date.now() - start;

    // Estadísticas del sistema
    const totalMem = os.totalmem();
    const freeMem = os.freemem();
    const usedMem = totalMem - freeMem;
    const usagePercent = ((usedMem / totalMem) * 100).toFixed(2);

    const texto = `
⚡ *ESTADÍSTICA DE VELOCIDAD DEL BOT* ⚡

• Latencia: *${latency} ms*
• RAM usada: *${(usedMem / 1024 / 1024).toFixed(2)} MB* de *${(totalMem / 1024 / 1024).toFixed(2)} MB* (*${usagePercent}%*)
• Plataforma: *${os.platform()}* (${os.arch()})
• CPUs: *${os.cpus().length}*
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}