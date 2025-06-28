import fetch from 'node-fetch'
import yts from 'yt-search'
import axios from 'axios'
const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    if (!text || !text.trim()) {
      return conn.reply(m.chat, '❀ Por favor, ingresa el nombre de la música a descargar.', m)
    }

    let videoIdToFind = text.match(youtubeRegexID)
    let ytplay2 = await yts(videoIdToFind ? 'https://youtu.be/' + videoIdToFind[1] : text)

    let video = null
    if (videoIdToFind) {
      const videoId = videoIdToFind[1]
      // yts puede devolver .all o .videos, dependiendo de versión
      video = (ytplay2.all || ytplay2.videos || []).find(item => item.videoId === videoId) || null
    }
    if (!video) {
      video = ytplay2.all?.[0] || ytplay2.videos?.[0] || null
    }

    if (!video) {
      return m.reply('✧ No se encontraron resultados para tu búsqueda.')
    }

    let { title, thumbnail, timestamp, views, ago, url, author } = video
    title = title || 'No encontrado'
    thumbnail = thumbnail || ''
    timestamp = timestamp || 'No encontrado'
    views = views || 0
    ago = ago || 'No encontrado'
    url = url || ''
    author = author || { name: 'Desconocido' }

    const vistas = formatViews(views)
    const canal = author.name || 'Desconocido'
    const infoMessage = `「✦」Descargando *<${title}>*\n\n> ✧ Canal » *${canal}*\n> ✰ Vistas » *${vistas}*\n> ⴵ Duración » *${timestamp}*\n> ✐ Publicado » *${ago}*\n> 🜸 Link » ${url}`

    let thumb = ''
    try {
      thumb = (await conn.getFile(thumbnail))?.data
    } catch (e) {
      thumb = null
    }

    const JT = {
      contextInfo: {
        externalAdReply: {
          title: typeof botname !== 'undefined' ? botname : 'Bot',
          body: typeof dev !== 'undefined' ? dev : '',
          mediaType: 1,
          previewType: 0,
          mediaUrl: url,
          sourceUrl: url,
          thumbnail: thumb,
          renderLargerThumbnail: true,
        },
      },
    }

    await conn.reply(m.chat, infoMessage, m, JT)

    if (['play', 'yta', 'ytmp3', 'playaudio'].includes(command)) {
      try {
        const api = await (await fetch(`https://api.vreden.my.id/api/ytmp3?url=${url}`)).json()
        const result = api?.result?.download?.url
        if (!result) throw new Error('⚠ El enlace de audio no se generó correctamente.')
        await conn.sendMessage(
          m.chat,
          { audio: { url: result }, fileName: `${api.result.title}.mp3`, mimetype: 'audio/mpeg' },
          { quoted: m }
        )
      } catch (e) {
        return conn.reply(m.chat, '⚠︎ No se pudo enviar el audio. Esto puede deberse a que el archivo es demasiado pesado o a un error en la generación de la URL. Por favor, intenta nuevamente más tarde.', m)
      }
    } else if (['play2', 'ytv', 'ytmp4', 'mp4'].includes(command)) {
      try {
        const response = await fetch(`https://api.neoxr.eu/api/youtube?url=${url}&type=video&quality=480p&apikey=GataDios`)
        const json = await response.json()
        if (!json?.data?.url || !json?.title) throw new Error('No se pudo obtener el video')
        await conn.sendFile(m.chat, json.data.url, json.title + '.mp4', title, m)
      } catch (e) {
        return conn.reply(m.chat, '⚠︎ No se pudo enviar el video. Esto puede deberse a que el archivo es demasiado pesado o a un error en la generación de la URL. Por favor, intenta nuevamente más tarde.', m)
      }
    } else {
      return conn.reply(m.chat, '✧︎ Comando no reconocido.', m)
    }
  } catch (error) {
    return m.reply(`⚠︎ Ocurrió un error: ${error}`)
  }
}

handler.command = handler.help = ['play', 'yta', 'ytmp3', 'play2', 'ytv', 'ytmp4', 'playaudio', 'mp4']
handler.tags = ['descargas']
handler.group = true

export default handler

function formatViews(views) {
  if (views === undefined || views === null) {
    return "No disponible"
  }
  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(1)}B (${views.toLocaleString()})`
  } else if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M (${views.toLocaleString()})`
  } else if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}k (${views.toLocaleString()})`
  }
  return views.toString()
}