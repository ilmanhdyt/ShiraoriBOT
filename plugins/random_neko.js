let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=neko&apikey=hardianto', '', '', m)
  if (json.nsfw && !db.data.settings.nsfw) throw 'Mode NSFW tidak aktif'
}
handler.help = ['neko']
handler.tags = ['NSFW']
handler.command = /^(neko)$/i

handler.limit = true
handler.group = true

module.exports = handler