let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=39f938655e624cb72a79560b', '', 'sange~an', m)
}
handler.help = ['loli18']
handler.tags = ['nsfw']
handler.command = /^(loli18)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
