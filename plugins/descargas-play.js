import yts from 'yt-search';
import tools from '@shiroko/module';

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
const datas = global;
 
let additionalText = '';
if (['play'].includes(command)) {
 additionalText = 'audio';
} else if (['play2'].includes(command)) {
 additionalText = 'vídeo';
}

const regex = "https://youtube.com/watch?v="
const result = await search(args.join(' '));
const body = `${result.title}\n${result.ago}\n${result.duration.timestamp}\n${formatNumber(result.views)}\n${result.author.name}\n${result.videoId}\n${result.type}\n${result.url}\n${result.author.url}\n\n$${additionalText}`.trim();
conn.sendMessage(m.chat, { image: { url: result.thumbnail }, caption: body }, { quoted: m });

if (command === 'play') {
try {
const audiodlp = await tools.downloader.ytmp3(regex + result.videoId);
const downloader = audiodlp.download;
conn.sendMessage(m.chat, { audio: { url: downloader }, mimetype: "audio/mpeg" }, { quoted: m });
} catch (error) {
 console.log(error);
 }
}

if (command === 'play2') {
try {
const videodlp = await tools.downloader.ytmp4(regex + result.videoId);
const downloader = videodlp.download;
conn.sendMessage(m.chat, { video: { url: downloader }, mimetype: "video/mp4" }, { quoted: m });
} catch (error) {
 console.log(error);
  }
 }
};

handler.help = ['play', 'play2'];
handler.tags = ['downloader'];
handler.command = ['play', 'play2'];

export default handler;
