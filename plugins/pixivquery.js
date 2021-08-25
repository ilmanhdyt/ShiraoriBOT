let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/pixiv?apikey=39f938655e624cb72a79560b&query=loli%20kawaii', '', '', m)
}
handler.help = ['pixivquery']
handler.tags = ['premium']
handler.command = /^(pixivquery)$/i

handler.limit = true
handler.premium = true

module.exports = handler