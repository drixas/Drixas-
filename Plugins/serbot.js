export default {
  name: ['serbot', 'serbot code'],
  description: 'Crea una sesión de sub-Bot',
  async run(m, { conn }) {
    const texto = `
*⪛✰ ↫ 𝐃𝐫𝐢𝐱𝐚𝐬  -  𝐁𝐨𝐭↬ ✰⪜*
✐ 𝘊𝘰𝘯𝘦𝘹𝘪ó𝘯 𝘚𝘶𝘣-𝘉𝘰𝘵 𝐃𝐫𝐢𝐱𝐚𝐬

✿ Vincula tu cuenta usando el codigo.
 » Sigue las instrucciones:
 ✎ Mas opciones » Dispositivos vinculados » Vincular nuevo dispositivo » Vincular usando numero.

Recuerda que es recomendable no usar tu cuenta principal para registrar bots.
↺ El codigo es valido por 60 segundos.
    `.trim();

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  }
}