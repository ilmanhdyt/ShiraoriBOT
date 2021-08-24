let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://pencarikode.xyz/api/hentai?apikey=pais', '', '', m)
}
handler.help = ['hentai']
handler.tags = ['NSFW']
handler.command = /^(hentai)$/i

handler.limit = true
handler.group = true

module.exports = handler