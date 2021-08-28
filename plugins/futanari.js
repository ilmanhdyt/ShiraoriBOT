let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=futanari&apikey=hardianto', '', '', m)
}
handler.help = ['futanari']
handler.tags = ['NSFW']
handler.command = /^(futanari)$/i

handler.limit = true
handler.group = true

module.exports = handler
