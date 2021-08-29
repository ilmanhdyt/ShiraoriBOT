

let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.DATABASE._data.users[m.sender]
    if (!text) throw '_yg dicari apa_'
    await m.reply(global.wait)
  let res = await fetch('https://api.lolhuman.xyz/api/nekopoisearch?apikey=39f938655e624cb72a79560b&query=' + encodeURIComponent(text))
let json= await res.json()
  const ardi =  `*judul:* "${json.title}"\n\n*info:* ${json.info}\n\n*sinopsis:* ${json.sinopsis}\n\n*link download:* ${json.link_dl}`
     conn.sendFile(m.chat,json.thumb, 'image.jpg', ardi, m)
}
handler.help = ['nekopoi <judul>']
handler.tags = ['nsfw']
handler.command = /^nekopoi$/i
handler.group = true
handler.limit = true

module.exports = handler

