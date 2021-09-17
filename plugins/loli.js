let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto', '', 'lolinya kak', m)
  await conn.sendButtonImg(m.chat, await conn.getFile(url).data, 'Klik Disini', '© SHIRAORI', 'Next', '.loli', m, { optionnya })
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true
handler.group = true

module.exports = handler
