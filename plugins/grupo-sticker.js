/*
• @drixas
- https://github.com/drixas/Drixas-
*/

import { Sticker, StickerTypes } from 'wa-sticker-formatter';

const handler = async (m, { conn, usedPrefix, command }) => {
    // Verifica si el mensaje tiene una imagen o si es una respuesta a una imagen
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';

    if (!/image/.test(mime)) {
        await conn.reply(m.chat, 'Por favor, responde a una imagen o envía una imagen para convertir en sticker.', m);
        return;
    }

    try {
        // Descarga el buffer de la imagen
        let img = await q.download();
        if (!img) {
            await conn.reply(m.chat, 'No se pudo descargar la imagen.', m);
            return;
        }

        // Crea el sticker
        const sticker = new Sticker(img, {
            pack: 'StickerPack', // Nombre del paquete
            author: 'DrixasBot', // Autor
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: 'drixas-sticker',
            quality: 50,
            background: 'transparent'
        });

        // Envía el sticker
        await conn.sendMessage(m.chat, await sticker.toMessage(), { quoted: m });

    } catch (error) {
        console.error('Error al crear el sticker:', error);
        await conn.reply(m.chat, 'Ocurrió un error al crear el sticker.', m);
    }
};

handler.help = ['sticker'];
handler.tags = ['sticker'];
handler.command = ['sticker', 's'];

export default handler;