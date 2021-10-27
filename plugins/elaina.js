
let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/random/elaina', { text: Elaina punya ilman }, ,APIKEY'), 'elaina.jpg', teks, m)
}
handler.help = ['elaina']
handler.tags = ['random']
handler.command = /^(elaina)$/i

handler.limit = 2
handler.group = true

module.exports = handler
