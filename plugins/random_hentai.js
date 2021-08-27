let handler = async (m, { conn }) => {
  
  conn.sendFile(m.chat, 'https://pencarikode.xyz/api/hentai?apikey=pais', '', '', m)
}
handler.help = ['hent']
handler.tags = ['NSFW']
handler.command = /^(hent)$/i

handler.limit = true
handler.group = true

module.exports = handler
