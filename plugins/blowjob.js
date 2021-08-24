let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/blowjob?APIKEY=4a8b9aba75823076', '', 'caption', m)
}
handler.help = ['blowjob]
handler.tags = ['NSFW']
handler.command = /^(blowjob)$/i

handler.limit = true
handler.group = true

module.exports = handler













