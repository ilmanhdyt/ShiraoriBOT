let handler = async (m, { conn }) => {

  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=HIRO', '', 'caption', m)
}
handler.help = ['elf2']
handler.tags = ['random']
handler.command = /^(elf2)$/i

handler.limit = true
handler.group = true

module.exports = handler