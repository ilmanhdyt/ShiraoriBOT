let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/random/elaina', { text: © SHIRAORI }, ,APIKEY'), 'elaina.jpg', teks, m)
}
handler.help = ['elaina']
handler.tags = ['random']
handler.command = /^(elaina)$/i

handler.limit = true
handler.group = true

module.exports = handler
