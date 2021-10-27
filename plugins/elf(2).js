let handler = async (m, { conn }) => {
  await conn.sendFile(m.chat, global.API('lolhum', '/random/elf', { text: © SHIRAORI }, ,APIKEY'), 'elf.jpg', teks, m)
}
handler.help = ['elf2']
handler.tags = ['random']
handler.command = /^(elf2)$/i

handler.limit = true
handler.group = true

module.exports = handler