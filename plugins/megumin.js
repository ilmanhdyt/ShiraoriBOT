let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/megumin')
  if (!res.ok) throw await `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.url) throw 'Eror!'
  conn.sendFile(m.chat, json.url, '', '© shiraori', m, 0, { thumbnail: await (await fetch(json.url)).buffer() })
  await conn.sendButtonImg(m.chat, await (await fetch(json.img)).buffer(), Klik Disni, '© SHIRAORI', 'Next', '.megumin', m)
}
handler.help = ['megumin']
handler.tags = ['anime']
handler.command = /^(megumin)$/i

handler.limit = true
//buatan ftwrr
module.exports = handler
