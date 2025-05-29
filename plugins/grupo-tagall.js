const handler = async (m, { isOwner, isAdmin, conn, participants, args }) => {
  try {
    if (!(isAdmin || isOwner)) {
      global.dfail('admin', m, conn);
      throw false;
    }

    const chatData = global.db.data.chats[m.chat];
    const emojiTag = chatData?.emojiTag || '♡︰';
    const mensaje = args.length > 0 ? args.join(' ') : '';
    const groupMetadata = await conn.groupMetadata(m.chat);
    const groupName = groupMetadata.subject || 'Grupo';

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
    };

    const getCountryFlag = (jid) => {
      const phone = jid.split('@')[0];
      for (let len = 4; len >= 1; len--) {
        const prefix = phone.slice(0, len);
        if (countryFlags[prefix]) return countryFlags[prefix];
      }
      return '🏳️‍🌈';
    };

    let texto = `*${groupName}*\n\n*Integrantes: ${participants.length}*\n`;
    if (mensaje) texto += `${mensaje}\n`;
    texto += `┌──⭓ *Despierten*\n`;

    for (const user of participants) {
      texto += `${emojiTag} ${getCountryFlag(user.id)} @${user.id.split('@')[0]}\n`;
    }

    texto += `└───────⭓\n\n𝘚𝘶𝘱𝘦𝘳 𝘉𝘰𝘵 𝘞𝘩𝘢𝘵𝘴𝘈𝘱𝘱 🚩`;

    await conn.sendMessage(m.chat, { text: texto }, { quoted: m });
  } catch (e) {
    if (e) throw e;
  }
};

handler.help = ['todos *<mensaje opcional>*'];
handler.tags = ['group'];
handler.command = ['todos', 'invocar', 'tagall'];
handler.admin = true;
handler.group = true;

export default handler;
