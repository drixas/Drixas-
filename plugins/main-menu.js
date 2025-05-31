let handler = async (m, { conn, args }) => {
  let userId = m.mentionedJid?.[0] || m.sender;
  let _uptime = process.uptime() * 1000;
  let uptime = clockString(_uptime);
  let totalreg = Object.keys(global.db.data.users).length;
  let totalCommands = Object.values(global.plugins).filter(v => v.help && v.tags).length;
  let botname = global.botname || conn.user.name || "MiLindaAsistente";

  let channelRD = global.channelRD || { id: '123456789@newsletter', name: '🍒 Jardín de Miku 🍒' };
  let textbot = global.textbot || `Con ternura, ${botname} te acompaña~ 💕`;
  let banner = global.banner || 'https://i.imgur.com/Ufxr0qH.jpeg';
  let redes = global.redes || 'https://linktr.ee/tu_bot';

  let txt = `
╭•˚ ₊˚୨୧˚₊˚•╮
  Kon'nichiwa~ @${userId.split('@')[0]}
  Soy *${botname}*, tu bot kawaii ✨
  ¿Jugamos juntas un rato? ♡
╰•˚ ₊˚୨୧˚₊˚•╯

╭─♡︰𝑰𝒏𝒇𝒐 𝒅𝒆𝒍 𝒅𝒊́𝒂
│❀ Usuario: @${userId.split('@')[0]}
│❁ Modo: Público
│❃ Bot: ${(conn.user.jid == global.conn.user.jid ? 'Principal' : 'Sub Bot')}
│✾ Activa: ${uptime}
│✿ Comunidad: ${totalreg}
│❈ Comandos: ${totalCommands}
│❉ Conexión: Baileys
╰───────────────♡

 \`✦｡˚❀『 Info-Bot 』❀˚｡✦\`
 
❍ Comandos para ver estado e información de la Bot.

ᰔᩚ *#help • #menu*
> ✦ Ver la lista de comandos de la Bot.
ᰔᩚ *#uptime • #runtime*
> ✦ Ver tiempo activo o en linea de la Bot.
ᰔᩚ *#sc • #script*
> ✦ Link del repositorio oficial de la Bot
ᰔᩚ *#staff • #colaboradores*
> ✦ Ver la lista de desarrolladores de la Bot.
ᰔᩚ *#serbot • #serbot code*
> ✦ Crea una sesión de Sub-Bot.
ᰔᩚ *#bots • #sockets*
> ✦ Ver la lista de Sub-Bots activos.
ᰔᩚ *#creador*
> ✦ Contacto del creador de la Bot.
ᰔᩚ *#status • #estado*
> ✦ Ver el estado actual de la Bot.
ᰔᩚ *#links • #grupos*
> ✦ Ver los enlaces oficiales de la Bot.
ᰔᩚ *#infobot • #infobot*
> ✦ Ver la información completa de la Bot.
ᰔᩚ *#sug • #newcommand*
> ✦ Sugiere un nuevo comando.
ᰔᩚ *#p • #ping*
> ✦ Ver la velocidad de respuesta del Bot.
ᰔᩚ *#reporte • #reportar*
> ✦ Reporta alguna falla o problema de la Bot.
ᰔᩚ *#sistema • #system*
> ✦ Ver estado del sistema de alojamiento.
ᰔᩚ *#speed • #speedtest*
> ✦ Ver las estadísticas de velocidad de la Bot.
ᰔᩚ *#views • #usuarios*
> ✦ Ver la cantidad de usuarios registrados en el sistema.
ᰔᩚ *#funciones • #totalfunciones*
> ✦ Ver todas las funciones de la Bot.
ᰔᩚ *#ds • #fixmsgespera*
> ✦ Eliminar archivos de sesión innecesarios.
ᰔᩚ *#editautoresponder*
> ✦ Configurar un Prompt personalizado de la Bot.

✦｡˚❀『 Buscadores 』❀˚｡✦
 

❍ Comandos para realizar búsquedas en distintas plataformas.
ִ ࣪𖤐 *#tiktoksearch • #tiktoks*
> ✮ Buscador de videos de tiktok.
ִ ࣪𖤐 *#tweetposts*
> ✮ Buscador de posts de Twitter/X.
ִ ࣪𖤐 *#ytsearch • #yts*
> ✮ Realiza búsquedas de Youtube.
ִ ࣪𖤐 *#githubsearch*
> ✮ Buscador de usuarios de GitHub.
ִ ࣪𖤐 *#cuevana • #cuevanasearch*
> ✮ Buscador de películas/series por Cuevana.
ִ ࣪𖤐 *#google*
> ✮ Realiza búsquedas por Google.
ִ ࣪𖤐 *#pin • #pinterest*
> ✮ Buscador de imagenes de Pinterest.
ִ ࣪𖤐 *#imagen • #image*
> ✮ buscador de imagenes de Google.
ִ ࣪𖤐 *#animesearch • #animess*
> ✮ Buscador de animes de tioanime.
ִ ࣪𖤐 *#animei • #animeinfo*
> ✮ Buscador de capítulos de #animesearch.
ִ ࣪𖤐 *#infoanime*
> ✮ Buscador de información de anime/manga.
ִ ࣪𖤐 *#npmjs*
> ✮ Buscandor de npmjs.
`.trim();

  await conn.sendMessage(m.chat, {
    text: txt,
    contextInfo: {
      mentionedJid: [m.sender, userId],
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: channelRD.id,
        newsletterName: channelRD.name,
        serverMessageId: -1,
      },
      forwardingScore: 999,
      externalAdReply: {
        title: `♡ 𝚃𝚜𝚞𝚔𝚊𝚜𝚊 ♡`,
        body: textbot,
        thumbnailUrl: banner,
        sourceUrl: redes,
        mediaType: 1,
        showAdAttribution: true,
        renderLargerThumbnail: true,
      },
    },
  }, { quoted: m });
};

handler.help = ['menu', 'help'];
handler.tags = ['main'];
handler.command = ['menu', 'menú', 'help', 'ayuda'];

export default handler;

function clockString(ms) {
  if (isNaN(ms)) return '--';
  let d = Math.floor(ms / 86400000);
  let h = Math.floor(ms / 3600000) % 24;
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [
    d ? `${d}d` : '',
    h ? `${h}h` : '',
    m ? `${m}m` : '',
    s ? `${s}s` : ''
  ].filter(Boolean).join(' ');
}
