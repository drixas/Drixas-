import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args || !args[0]) {
    return m.reply(`Uso correcto: ${usedPrefix + command} nombre de la película`);
  }

  let texto = args.join(' ');
  let bolditalic = '𝘽𝙊𝙇𝘿𝙄𝘛𝘼𝙇𝙄𝘾';

  // Mensaje de búsqueda con fuente especial
  await m.reply(`Buscando película ${bolditalic}: *${texto}*`);

  // Ejemplo de API de películas, reemplaza "tu_api_key" por tu clave real de OMDb
  let res = await fetch(`https://www.omdbapi.com/?apikey=tu_api_key&t=${encodeURIComponent(texto)}`);
  let json = await res.json();

  if (json.Response === 'False') {
    return m.reply('❌ No se encontró la película.');
  }

  // Mensaje con los datos de la película
  let info = `🎬 ${bolditalic}: *${json.Title}*\n🗓️ Año: ${json.Year}\n⭐ IMDB: ${json.imdbRating}\n📃 Sinopsis: ${json.Plot}`;
  if (json.Poster && json.Poster !== 'N/A') {
    await conn.sendFile(m.chat, json.Poster, 'poster.jpg', info, m);
  } else {
    await m.reply(info);
  }
};

handler.help = ['playpeli <nombre>'];
handler.tags = ['buscador'];
handler.command = ['playpeli'];

export default handler;