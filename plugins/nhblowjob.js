let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/random?nsfw=blowJob&apikey=hardianto', '', 'caption', m)
}
handler.help = ['blowjob]
handler.tags = ['premium']
handler.command = /^(blowjob)$/i

handler.limit = true
handler.premium = true
handler.group = true

module.exports = handler











