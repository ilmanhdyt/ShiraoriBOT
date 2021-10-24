let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elaina?apikey=HIRO', '', 'Elaina Punya Ilman', m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

handler.limit = true
handler.group = true

module.exports = handler