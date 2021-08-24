let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://bx-hunter.herokuapp.com/api/nsfw/yuri?apikey=Ikyy69', '', '', m)
}
handler.help = ['yuri']
handler.tags = ['NSFW']
handler.command = /^(yuri)$/i

handler.limit = true
handler.group = true

module.exports = handler