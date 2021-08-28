let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/blowjob?APIKEY=4a8b9aba75823076', '', 'sange~an', m)
  
}
handler.help = ['cum']
handler.tags = ['NSFW']
handler.command = /^(cum)$/i

handler.limit = true
handler.group = true

module.exports = handler
