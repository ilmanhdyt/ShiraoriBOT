let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/nhentai/344253?apikey=39f938655e624cb72a79560b')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'Istri kartun', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['nhentai']
handler.tags = ['NSFW']
handler.command = /^(nhentai)$/i

handler.limit = true

module.exports = handler




















https://api.lolhuman.xyz/api/nhentai/344253?apikey=39f938655e624cb72a79560b