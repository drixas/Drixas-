export default {
  name: ['todos', 'invocar'],
  description: 'Menciona a todo el grupo mostrando la bandera de cada país según el código del número',
  async run(m, { conn, participants }) {
    if (!m.isGroup) {
      return await conn.sendMessage(m.chat, { text: 'Este comando solo funciona en grupos.' }, { quoted: m });
    }

    // Mapeo de códigos de país a banderas
    const banderas = {
      '58': '🇻🇪',
      '57': '🇨🇴',
      '54': '🇦🇷',
      '55': '🇧🇷',
      '52': '🇲🇽',
      '51': '🇵🇪',
      '56': '🇨🇱',
      '591': '🇧🇴',
      '593': '🇪🇨',
      '595': '🇵🇾',
      '1': '🇺🇸',
      '34': '🇪🇸',
      // Agrega más códigos y banderas aquí
    };

    let texto = '👥 *Invocando a todos los miembros del grupo:* 👥\n\n';
    let mentions = [];

    for (const user of participants) {
      const id = user.id || '';
      const numero = id.split('@')[0];
      // Extrae el código de país (puede ser 1-3 dígitos)
      const codigo = numero.match(/^(\d{1,3})/);
      let bandera = '';
      if (codigo) {
        bandera = banderas[codigo[0]] || '';
      }
      texto += `${bandera ? bandera + ' ' : ''}@${numero}\n`;
      mentions.push(id);
    }

    await conn