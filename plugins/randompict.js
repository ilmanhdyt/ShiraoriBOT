let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://mhankbarbar.herokuapp.com/api/pussy')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '😑', m, 0, { thumbnail: Buffer.alloc(0) })
}
handler.help = ['randompict']
handler.tags = ['NSFW']
handler.command = /^(randompict)$/i

handler.limit = true

module.exports = handler

















https://mhankbarbar.herokuapp.com/api/pussy