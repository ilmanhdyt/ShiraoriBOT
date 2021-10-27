let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('bx', '/nsfw/yuri', { text: © SHIRAORI }, ,APIKEY'), 'yuri.jpg', teks, m)
}
handler.help = ['yuri2'']
handler.tags = ['nsfw']
handler.command = /^(yuri2)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler













