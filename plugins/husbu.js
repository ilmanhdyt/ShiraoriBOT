let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('lolhum', '/random/sagiri', { text: © SHIRAORI }, ,APIKEY'), 'sagiri.jpg', teks, m)
}
handler.help = ['sagiri']
handler.tags = ['random']
handler.command = /^(sagiri)$/i

handler.limit = true
handler.group = true

module.exports = handler