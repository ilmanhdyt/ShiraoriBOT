

let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/meme?APIKEY=FuzBot1', '', 'Garing😑', m)
}
handler.help = ['meme']
handler.tags = ['fun']
handler.command = /^(meme)$/i

handler.limit = true

module.exports = handler
