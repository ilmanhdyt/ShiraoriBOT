let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/api/randomimage/uniform?apikey=FuzBot1', '', 'b-baka >///<', m)
}
handler.help = ['uniform']
handler.tags = ['anime']
handler.command = /^(uniform)$/i

handler.limit = true

module.exports = handler
