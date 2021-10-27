
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman/api/random/art?apikey=HIRO', '', 'ShiraoriBOT', m)
}
handler.help = ['fanart', 'animefanart']
handler.tags = ['anime', 'random']
handler.command = /^(fanart|animefanart)$/i

handler.limit = 5
handler.group = true

module.exports = handler
