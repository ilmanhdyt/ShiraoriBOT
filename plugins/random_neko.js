let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=neko&apikey=hardianto', '', '', m)
  if (json.nsfw && !db.data.settings.nsfw) throw 'Mode NSFW tidak aktif'
}
handler.help = ['nekoo']
handler.tags = ['NSFW']
handler.command = /^(nekoo)$/i

handler.limit = true
handler.group = true

module.exports = handler