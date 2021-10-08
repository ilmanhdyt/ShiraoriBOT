let handler = async (m, { conn }) => {
 
  conn.sendFile(m.chat, 'https://hardianto-chan.herokuapp.com/api/anime/loli?apikey=hardianto', '', 'dasar om om', m)
  await conn.sendButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

handler.limit = true
handler.group = true

module.exports = handler
