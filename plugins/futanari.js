let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random2/futanari?apikey=39f938655e624cb72a79560b', '', '', m)
}
handler.help = ['futanari']
handler.tags = ['NSFW']
handler.command = /^(futanari)$/i

handler.limit = true
handler.group = true

module.exports = handler
