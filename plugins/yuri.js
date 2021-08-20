let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=yuri&apikey=hardianto', '', 'caption', m)
}
handler.help = ['yuri]
handler.tags = ['NSFW']
handler.command = /^(yuri)$/i

handler.limit = true
handler.group = true


module.exports = handler













