let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/api/sticker/patrick', { text: text }, ,APIKEY'), 'patrick.jpg', kamu gay, m)
}
handler.help = ['stikerpatrick']
handler.tags = ['internet']
handler.command = /^(stikerpatrick)$/i

handler.limit = true
handler.group = true

module.exports = handler
