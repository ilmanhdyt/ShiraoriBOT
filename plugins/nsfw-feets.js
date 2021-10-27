
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman/api/random/nsfw/animefeets?apikey=HIRO', '', 'jadi sange', m)
}
handler.help = ['feets']
handler.tags = ['nsfw']
handler.command = /^(feets)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
