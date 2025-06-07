const handler = async (m, { isOwner, isAdmin, conn, text, participants, args }) => {
  let chat = global.db.data.chats[m.chat];
  let emoji = chat.emojiTag || '★💨';

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
    // América y Caribe
      '1': '🇺🇸',
      '1242': '🇧🇸',
      '1246': '🇧🇧',
      '1264': '🇦🇮',
      '1268': '🇩🇲',
      '1284': '🇻🇬',
      '1340': '🇻🇮',
      '1473': '🇬🇩',
      '1649': '🇹🇨',
      '1664': '🇲🇸',
      '1671': '🇬🇺',
      '1758': '🇱🇨',
      '1767': '🇩🇲',
      '1784': '🇸🇽',
      '1787': '🇵🇷',
      '1809': '🇩🇴',
      '1829': '🇩🇴',
      '1849': '🇩🇴',
      '1868': '🇹🇹',
      '1876': '🇯🇲',
      '52': '🇲🇽',
      '53': '🇨🇺',
      '54': '🇦🇷',
      '55': '🇧🇷',
      '56': '🇨🇱',
      '57': '🇨🇴',
      '58': '🇻🇪',
      '506': '🇨🇷',
      '507': '🇵🇦',
      '590': '🇬🇵',
      '591': '🇧🇴',
      '592': '🇬🇾',
      '593': '🇪🇨',
      '594': '🇬🇫',
      '595': '🇵🇾',
      '596': '🇲🇶',
      '597': '🇸🇷',
      '598': '🇺🇾',
      '599': '🇨🇼',
      '504': '🇭🇳',
      '505': '🇳🇮',
      '51' : '🇵🇪',

      // Europa
      '30': '🇬🇷',
      '31': '🇳🇱',
      '32': '🇧🇪',
      '33': '🇫🇷',
      '34': '🇪🇸',
      '36': '🇭🇺',
      '39': '🇮🇹',
      '40': '🇷🇴',
      '41': '🇨🇭',
      '43': '🇦🇹',
      '44': '🇬🇧',
      '45': '🇩🇰',
      '46': '🇸🇪',
      '47': '🇳🇴',
      '48': '🇵🇱',
      '49': '🇩🇪',

      // Asia y Oceanía
      '60': '🇲🇾',
      '61': '🇦🇺',
      '62': '🇮🇩',
      '63': '🇵🇭',
      '64': '🇳🇿',
      '65': '🇸🇬',
      '66': '🇹🇭',
      '81': '🇯🇵',
      '82': '🇰🇷',
      '84': '🇻🇳',
      '86': '🇨🇳',
      '90': '🇹🇷',
      '91': '🇮🇳',
      '92': '🇵🇰',
      '93': '🇦🇫',
      '94': '🇱🇰',
      '95': '🇲🇲',
      '98': '🇮🇷',

      // África
      '212': '🇲🇦',
      '213': '🇩🇿',
      '216': '🇹🇳',
      '218': '🇱🇾',
      '220': '🇬🇲',
      '221': '🇸🇳',
      '222': '🇲🇷',
      '223': '🇲🇱',
      '224': '🇬🇳',
      '225': '🇨🇮',
      '226': '🇧🇫',
      '227': '🇳🇪',
      '228': '🇹🇬',
      '229': '🇧🇯',
      '230': '🇲🇺',
      '231': '🇱🇷',
      '232': '🇸🇱',
      '233': '🇬🇭',
      '234': '🇳🇬',
      '235': '🇹🇩',
      '236': '🇨🇫',
      '237': '🇨🇲',
      '238': '🇨🇻',
      '239': '🇸🇹',
      '240': '🇬🇶',
      '241': '🇬🇦',
      '242': '🇨🇬',
      '243': '🇨🇩',
      '244': '🇦🇴',
      '245': '🇬🇼',
      '248': '🇸🇨',
      '249': '🇸🇩',
      '250': '🇷🇼',
      '251': '🇪🇹',
      '252': '🇸🇴',
      '253': '🇩🇯',
      '254': '🇰🇪',
      '255': '🇹🇿',
      '256': '🇺🇬',
      '257': '🇧🇮',
      '258': '🇲🇿',
      '260': '🇿🇲',
      '261': '🇲🇬',
      '263': '🇿🇼',
      '264': '🇳🇦',
      '265': '🇲🇼',
      '266': '🇱🇸',
      '267': '🇧🇼',
      '268': '🇸🇿',

      // Otros territorios
      '290': '🇸🇭',
      '297': '🇦🇼',
      '298': '🇫🇴',
      '299': '🇬🇱',
      '7'  : '🇷🇺',
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
