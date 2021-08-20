let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=neko&apikey=hardianto', '', '', m)
}
handler.help = ['neko']
handler.tags = ['NSFW']
handler.command = /^(neko)$/i

handler.limit = true
handler.group = true

module.exports = handler