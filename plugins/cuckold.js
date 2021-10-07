let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/cuckold?APIKEY=c81b3345e477a0c7', '', 'Ter-NTR', m)
}
handler.help = ['cuckold']
handler.tags = ['nsfw']
handler.command = /^(cuckold)$/i

handler.limit = true
handler.group = true
handler.nsfw = true

module.exports = handler
