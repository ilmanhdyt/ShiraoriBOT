
let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/random/nsfw/yaoi', { text: ajg gay }, ,APIKEY'), 'yaoi.jpg', teks, m)
}
handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
