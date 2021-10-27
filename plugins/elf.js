let handler = async (m, { conn }) => {
 await conn.sendFile(m.chat, global.API('lolhum', '/random/elf', { text: © SHIRAORI }, ,APIKEY'), 'elf.jpg', teks, m)
}
handler.help = ['elf']
handler.tags = ['random']
handler.command = /^(elf)$/i

handler.limit = 2

module.exports = handler

