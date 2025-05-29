const handler = async (m, { isOwner, isAdmin, conn, text, participants, args }) => {
  let chat = global.db.data.chats[m.chat];
  let emoji = chat.emojiTag || '♡︰';

  // Validar que sea admin o owner
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  const pesan = args.join(' ');
  const groupMetadata = await conn.groupMetadata(m.chat);
  const groupName = groupMetadata.subject;

  // Mapeo de prefijos telefónicos a banderas
  const countryFlags = {
    '52': '🇲🇽',
    '57': '🇨🇴',
    '54': '🇦🇷',
    '34': '🇪🇸',
    '55': '🇧🇷',
    '1': '🇺🇸',
    '44': '🇬🇧',
    '91': '🇮🇳',
    '502': '🇬🇹',
    '56': '🇨🇱',
    '51': '🇵🇪',
    '58': '🇻🇪',
    '505': '🇳🇮',
    '593': '🇪🇨',
    '504': '🇭🇳',
    '591': '🇧🇴',
    '53': '🇨🇺',
    '503': '🇸🇻',
    '507': '🇵🇦',
    '595': '🇵🇾',
  };

  // Función para obtener la bandera según el número
  const getCountryFlag = (id) => {
    const phoneNumber = id.split('@')[0];
    let phonePrefix = phoneNumber.slice(0, 3);
    if (phoneNumber.startsWith('1')) return '🇺🇸';
    if (!countryFlags[phonePrefix]) phonePrefix = phoneNumber.slice(0, 2);
    return countryFlags[phonePrefix] || '🏳️‍🌈';
  };

  // Construcción del texto a enviar
  let teks = `*${groupName}*\n\n*Integrantes : ${participants.length}*\n${pesan}\n┌──⭓ *Despierten*\n`;

  for (const mem of participants) {
    teks += `${emoji} ${getCountryFlag(mem.id)} @${mem.id.split('@')[0]}\n`;
  }

  teks += `└───────⭓\n\n𝘚𝘶𝘱𝘦𝘳  𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🚩`;

  // Enviar mensaje mencionando a todos los participantes
  await conn.sendMessage(m.chat, {
    text: teks,
    mentions: participants.map((a) => a.id),
  });
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = ['todos', 'invocar', 'tagall']
handler.admin = true;
handler.group = true;

export default handler;
