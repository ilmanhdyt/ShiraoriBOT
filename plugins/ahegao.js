let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('xteam', '/randomimage/ahegao', { text: © SHIRAORI }, ,APIKEY'), 'ahegao.jpg', teks, m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i

handler.limit = true
handler.group = true
handler.nsfw = true
handler.register = false

module.exports = handler
