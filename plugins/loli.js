let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.http://zekais-api.herokuapp.com/randomloli?apikey=tzjHtUpG')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', 'lolicon', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['loli']
handler.tags = ['internet']
handler.command = /^(loli)$/i

handler.limit = true
handler.group = true

module.exports = handler
