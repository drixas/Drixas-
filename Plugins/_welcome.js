export default {
  name: ['welcome'],
  description: 'Da la bienvenida a los nuevos miembros del grupo',
  async run(m, { conn, participants, groupMetadata }) {
    // Solo ejecuta cuando hay nuevos participantes
    if (!m.action || m.action !== 'add' || !m.participants) return;

    for (const user of m.participants) {
      // Intenta obtener la foto de perfil del usuario
      let profilePic;
      try {
        profilePic = await conn.profilePictureUrl(user, 'image');
      } catch (e) {
        profilePic = 'https://i.imgur.com/6eT4x6h.png'; // Imagen por defecto si no tiene foto
      }

      // Mensaje de bienvenida personalizado
      const mensaje = `
👋 *Bienvenido al grupo!* 👋

Esperamos que tu estadía en el grupo sea de tu agrado.

*Descripción del grupo:*
${groupMetadata?.desc || 'Sin descripción disponible.'}
      `.trim();

      // Envía la foto de perfil con el mensaje al grupo
      await conn.sendMessage(m.chat, { 
        image: { url: profilePic }, 
        caption: mensaje 
      });
    }
  }
}