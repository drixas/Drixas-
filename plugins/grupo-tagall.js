// Diccionario de códigos de país a bandera
const countryFlags = {
  '58': '🇻🇪', // Venezuela
  '52': '🇲🇽', // México
  '54': '🇦🇷', // Argentina
  '51': '🇵🇪', // Perú
  '55': '🇧🇷', // Brasil
  '57': '🇨🇴', // Colombia
  '591': '🇧🇴', // Bolivia
  '56': '🇨🇱', // Chile
  '593': '🇪🇨', // Ecuador
  '595': '🇵🇾', // Paraguay
  '507': '🇵🇦', // Panamá
  // Agrega más si lo necesitas
};

// Función para obtener bandera según número
function getFlagByNumber(number) {
  for (let len = 3; len >= 1; len--) {
    const code = number.slice(0, len);
    if (countryFlags[code]) return countryFlags[code];
  }
  return '🏳️'; // Bandera genérica si no encuentra
}

// Handler para #todos y #invocar
async function todosHandler(m, { groupMetadata, conn }) {
  if (!groupMetadata) return;
  let mensaje = '';
  let mentions = [];
  for (let participant of groupMetadata.participants) {
    let num = participant.id.split('@')[0]; // ej: 521234567890
    let flag = getFlagByNumber(num);
    mensaje += `${flag} @${num}\n`;
    mentions.push(participant.id);
  }
  await conn.sendMessage(m.chat, { text: mensaje.trim(), mentions });
}

// Ejemplo de cómo integrarlo
if (m.text === '#todos' || m.text === '#invocar') {
  await todosHandler(m, { groupMetadata, conn });
}