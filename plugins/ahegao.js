let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/ahegao?APIKEY=4a8b9aba75823076', '', '', m)
}
handler.help = ['ahegao']
handler.tags = ['NSFW']
handler.command = /^(ahegao)$/i

handler.limit = true

module.exports = handler