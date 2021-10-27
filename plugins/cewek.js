let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('xteam', '/randomimage/cewe', { text: © SHIRAORI }, ,APIKEY'), 'cewek.jpg', teks, m)
}
handler.help = ['cewek']
handler.tags = ['random']
handler.command = /^(cewek)$/i

handler.limit = true


module.exports = handler
