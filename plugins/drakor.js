let axios = require("axios");
let handler = async(m, { conn, text, usedPrefix }) => {

    if (!text) return m.reply(`Silahkan masukan nama drakor\ncontoh *${usedPrefix}drakor must you go*`)

  await m.reply(global.wait)
	axios.get(`https://docs-jojo.herokuapp.com/api/drakor?q=${text.toLowerCase()}`).then ((res) => {
	 	let caption = `*Judul:* ${res.data.title}\n*Tahun Rilis:* ${res.data.years}\n*Genre:* ${res.data.genre}\n*Durasi:* ${res.data.duration}\n*Sipnosis:* ${res.data.synopsis}\n*Pemain:* ${res.data.cast}\n*Link:* ${res.data.url}`
	 	let pp = res.data.image
if (pp) conn.sendFile(m.chat, pp, 'pp.jpg', caption, m)
  else m.reply(caption)
})
}
handler.help = ['drakor <judul>']
handler.tags = ['internet']
handler.command = /^(drakor)$/i
handler.register = true

handler.fail = null
handler.limit = true

module.exports = handler
