
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=HIRO', '', 'ajg gay', m)
}
handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
