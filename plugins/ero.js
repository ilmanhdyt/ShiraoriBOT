let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ero?APIKEY=FuzBot1', '', 'ahhh', m)
}
handler.help = ['ero']
handler.tags = ['nsfw']
handler.command = /^(ero)$/i

handler.limit = true
handler.nsfw = true

module.exports = handler
