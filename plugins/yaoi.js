
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, '', '', 'sange~an', m)
}
handler.help = ['yaoi']
handler.tags = ['nsfw']
handler.command = /^(yaoi)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
