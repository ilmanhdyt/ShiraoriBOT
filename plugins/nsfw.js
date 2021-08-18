let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/nsfw/school?apikey=404Api', '', 'caption', m)
}
handler.help = ['school]
handler.tags = ['NSFW']
handler.command = /^(school)$/i

handler.limit = true
handler.premium = true

module.exports = handler
