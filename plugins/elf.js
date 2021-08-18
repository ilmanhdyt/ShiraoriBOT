let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/random/elf?apikey=39f938655e624cb72a79560b')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'elf chan', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['elf']
handler.tags = ['internet']
handler.command = /^(elf)$/i

handler.limit = true

module.exports = handler

