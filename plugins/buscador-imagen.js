/*
• @David-Chian
- https://github.com/David-Chian
*/

import { googleImage } from '@bochilteam/scraper';
import baileys from '@whiskeysockets/baileys';

// Si necesitas delay, créala tú:
const delay = ms => new Promise(res => setTimeout(res, ms));

// Ajusta estos valores a lo que usas normalmente en tu bot:
const icono = 'https://i.imgur.com/1Q9Z1Zm.jpg';
const packname = 'Drixas-Bot';
const dev = 'By Drixas';
const redes = 'https://github.com/drixas/Drixas-';

async function sendAlbumMessage(conn, jid, medias, options = {}) {
    if (typeof jid !== "string") throw new TypeError(`jid must be string, received: ${jid}`);
    if (medias.length < 2) throw new RangeError("Se necesitan al menos 2 imágenes para un álbum");

    const caption = options.text || options.caption || "";
    const delayTime = !isNaN(options.delay) ? options.delay : 500;
    delete options.text;
    delete options.caption;
    delete options.delay;

    const album = baileys.generateWAMessageFromContent(
        jid,
        { messageContextInfo: {}, albumMessage: { expectedImageCount: medias.length } },
        {}
    );

    await conn.relayMessage(album.key.remoteJid, album.message, { messageId: album.key.id });

    for (let i = 0; i < medias.length; i++) {
        const { type, data } = medias[i];
        const img = await baileys.generateWAMessage(
            album.key.remoteJid,
            { [type]: data, ...(i === 0 ? { caption } : {}) },
            { upload: conn.waUploadToServer }
        );
        img.message.messageContextInfo = {
            messageAssociation: { associationType: 1, parentMessageKey: album.key },
        };
        await conn.relayMessage(img.key.remoteJid, img.message, { messageId: img.key.id });
        await delay(delayTime);
    }
    return album;
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return conn.reply(m.chat, `*❀ Por favor, ingrese un texto para buscar una Imagen.`, m);

    await m.react('🕒');
    conn.reply(m.chat, '✧ *Descargando su imagen...*', m, {
        contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
        title: packname,
        body: dev,
        previewType: 0, thumbnail: icono,
        sourceUrl: redes }}}
    );

    try {
        const res = await googleImage(text);
        const images = [];

        for (let i = 0; i < 10; i++) {
            const image = await res.getRandom();
            if (image) images.push({ type: "image", data: { url: image } });
        }

        if (images.length < 2) return conn.reply(m.chat, '✧ No se encontraron suficientes imágenes para un álbum.', m);

        const caption = `❀ *Resultados de búsqueda para:* ${text}`;
        await sendAlbumMessage(conn, m.chat, images, { caption, quoted: m });

        await m.react('✅');
    } catch (error) {
        await m.react('❌');
        conn.reply(m.chat, '⚠︎ Hubo un error al obtener las imágenes.', m);
    }
};

handler.help = ['imagen <query>'];
handler.tags = ['buscador', 'tools', 'descargas'];
handler.command = ['imagen', 'image', 'img'];
handler.register = true;

export default handler;