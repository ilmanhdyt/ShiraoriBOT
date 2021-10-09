let handler = async (m, { conn }) => {
  
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=FuzBot1', '', '© Shiraori', m)
}
handler.help = ["zettaityouiki"]
handler.tags = ["anime"]
handler.command = /^(zettairyouiki)$/i

handler.limit = true

module.exports = handler
