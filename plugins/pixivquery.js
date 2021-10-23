let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `cari apa?\nContoh:\n${usedPrefix + command} Shiraori`
  let res = await fetch(global.API('lolhum', '/api/pixiv2', {
    q: text
  }, 'apikey'))
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.status) throw json
  let pixiv = json.data[Math.floor(Math.random() * json.data.lenght)];
  conn.sendFile(m.chat, pixiv, '', '© SHIRAORI', m, 0, { thumbnail: await (await fetch(pixiv)).buffer() })
  }
  handler.help = ['pixiv <pencarian>']
  handler.tags = ['internet']
  handler.command = /^(pixiv)$/i

  module.exports = handler