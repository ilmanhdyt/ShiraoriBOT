let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto', '', 'lolicon ajg', m)
  await conn.sendButtonLoc(m.chat, await (await fetch(json.img)).buffer(), caption, '© SHIRAORI', 'Next', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true
handler.group = true

module.exports = handler
