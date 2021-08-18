let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/nsfw/yuri?apikey=404Api', '', 'caption', m)
}
handler.help = ['yuri]
handler.tags = ['NSFW']
handler.command = /^(yuri)$/i

handler.limit = true
handler.premium = true


module.exports = handler













