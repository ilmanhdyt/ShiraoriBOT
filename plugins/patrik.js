let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/sticker/patrick', { text: © SHIRAORI }, ,APIKEY'), 'patrick.jpg', teks, m)
}
handler.help = ['patrick', 'patrik']
handler.tags = ['random']
handler.command = /^(patrick|patrik)$/i

handler.limit = true
handler.group = true
handler.exp = true

module.exports = handler
