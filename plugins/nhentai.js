let { get } = require('axios')
let handler = async (m, { conn, args }) => {
   if (!args[0]) throw 'Masukkan kode sebagai parameter. Berikut: .nhentai 177013'
  m.reply(global.wait)
let lol = global.API('lolhum', `/api/nhentaipdf/${args[0]}`, {}, '3af90a5d6317457b1f93e921')
  let { result } = (await get(lol)).data
  if (result.includes('HTML')) throw `Code ${args[0]} Not Found!`
   conn.sendMessage(m.chat, await getBuffer(result), 'documentMessage', { quoted: m, filename: `${args[0]}.pdf`, mimetype: 'application/pdf' })
}

handler.help = ['nhentai'].map(v => v + ' <code>')

handler.tags = ['nsfw']
handler.command = /^(nhentai)$/i
handler.nsfw = true

handler.limit = 1

module.exports = handler



async function getBuffer(url) {

k = await require('node-fetch')(url)

a = await k.buffer()

return a 

}
