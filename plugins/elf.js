let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/elf?apikey=39f938655e624cb72a79560b', '', '', m)
}
handler.help = ['elf']
handler.tags = ['anime']
handler.command = /^(elf)$/i

handler.limit = 2

module.exports = handler

