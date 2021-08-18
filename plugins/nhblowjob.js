let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://h4ck3rs404-api.herokuapp.com/api/nsfw/blowjob?apikey=404Api', '', 'caption', m)
}
handler.help = ['blowjob]
handler.tags = ['NSFW']
handler.command = /^(blowjob)$/i

handler.limit = true
handler.premium = true

module.exports = handler











