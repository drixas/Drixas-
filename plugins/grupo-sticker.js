rconst { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter');
const fs = require('fs');
const path = require('path');

module.exports = {
    name: 'sticker',
    description: 'Convierte imágenes en stickers',
    author: 'TuNombre',
    async execute(message, client, args) {
        try {
            // Verificar si hay una imagen adjunta
            if (!message.hasMedia) {
                await client.sendReply(message.from, 'Por favor, envía una imagen para convertir en sticker.', message.id);
                return;
            }

            // Descargar la imagen
            const media = await message.downloadMedia();
            
            if (!media.mimetype.includes('image')) {
                await client.sendReply(message.from, 'Solo puedes convertir imágenes en stickers.', message.id);
                return;
            }

            // Crear el sticker
            const sticker = new Sticker(media.data, {
                pack: 'StickerPack', // Nombre del paquete de stickers
                author: 'WhatsApp Bot', // Autor del sticker
                type: StickerTypes.FULL, // Tipo de sticker
                categories: ['🤩', '🎉'], // Categorías
                id: '12345', // ID
                quality: 50, // Calidad
                background: 'transparent' // Fondo transparente
            });

            // Enviar el sticker
            await client.sendMessage(message.from, await sticker.toMessage(), {
                quoted: message.id
            });

        } catch (error) {
            console.error('Error al crear el sticker:', error);
            await client.sendReply(message.from, 'Ocurrió un error al crear el sticker.', message.id);
        }
    }
};
