let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=trap&apikey=hardianto', '', '', m)
}
handler.help = ['trap']
handler.tags = ['NSFW']
handler.command = /^(trap)$/i

handler.limit = true
handler.group = true

module.exports = handler

 
