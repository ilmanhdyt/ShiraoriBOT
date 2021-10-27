let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/shinobu?apikey=HIRO', '', '@6281351047727', m)
}
handler.help = ['shinobu']
handler.tags = ['random']
handler.command = /^(shinobu)$/i

handler.limit = 2
handler.group = true

module.exports = handler
