let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/zettairyouiki?APIKEY=FuzBot1', '', '© Shiraori', m)
}
handler.help = ['zettairyouiki']
handler.tags = ['premium']
handler.command = /^(zettairyouiki)$/i

handler.premium = true

module.exports = handler
