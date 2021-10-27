let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/blowjob', { text: © SHIRAORI }, ,APIKEY'), 'blowjob.jpg', teks, m)
  
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i

handler.limit = true
handler.group = true
handler.nswf = true

module.exports = handler
