
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elaina?apikey=HIRO', '', 'Elaina Punya ilman', m)
}
handler.help = ['elaina']
handler.tags = ['random']
handler.command = /^(elaina)$/i

handler.limit = 2
handler.group = true

module.exports = handler
