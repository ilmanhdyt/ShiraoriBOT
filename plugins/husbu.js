let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/sagiri?apikey=HIRO', '', 'Sagiri', m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

handler.limit = true
handler.group = true

module.exports = handler