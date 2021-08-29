let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.xteam.xyz/randomimage/orgy?APIKEY=FuzBot1', '', 'Sange?', m)
}
handler.help = ['orgy']
handler.tags = ['nsfw']
handler.command = /^(orgy)$/i

handler.premium = true

module.exports = handler
