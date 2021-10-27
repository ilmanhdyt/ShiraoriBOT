let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=HIRO', '', '', m)
}
handler.help = ['elf']
handler.tags = ['random']
handler.command = /^(elf)$/i

handler.limit = 2

module.exports = handler

