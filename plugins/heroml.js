let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `uhm. cari apa?\n\ncontoh:\n${usedPrefix + command} logo`
  let res = await fetch(global.API('xteam', '/search/heroml', {
    q: text
  }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  let pint = json.data[Math.floor(Math.random() * json.data.length)];
  conn.sendFile(m.chat, pint, '', '© shiraori', m, 0, { thumbnail: await (await fetch(pint)).buffer() })
}
handler.help = ['heroml <pencarian>']
handler.tags = ['game']
handler.command = /^(heroml)$/i

handler.limit = true
handler.group = true

module.exports = handler
