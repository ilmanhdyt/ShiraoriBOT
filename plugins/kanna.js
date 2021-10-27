
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman/api/random/kanna?apikey=HIRO', '', 'miss kobayashi dragon maid', m)
}
handler.help = ['kanna']
handler.tags = ['random']
handler.command = /^(kanna)$/i

handler.limit = true
handler.group = true

module.exports = handler
