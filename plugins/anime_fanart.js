
let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/random/art', { text: © SHIRAORI }, ,APIKEY'), 'art.jpg', teks, m)
}
handler.help = ['fanart', 'animefanart']
handler.tags = ['anime', 'random']
handler.command = /^(fanart|animefanart)$/i

handler.limit = 5
handler.group = true

module.exports = handler
