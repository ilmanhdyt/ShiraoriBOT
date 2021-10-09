let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ahegao?APIKEY=FuzBot1', '', 'sange?', m)
}
handler.help = ['school']
handler.tags = ['nsfw']
handler.command = /^(school)$/i

handler.limit = true
handler.group = true
handler.nsfw = true
handler.register = false

module.exports = handler
