let handler = async (m, { conn }) => {
if (json.nsfw && !db.data.settings.nsfw) throw 'Mode NSFW tidak aktif'
  
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/blowjob?APIKEY=4a8b9aba75823076', '', 'caption', m)
}
handler.help = ['cum']
handler.tags = ['NSFW']
handler.command = /^(cum)$/i

handler.limit = true
handler.group = true

module.exports = handler













