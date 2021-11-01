let axios = require("axios");

let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nomor Telepon yang akan dispam OTP DanaCinta', m)

	axios.get(`https://api.xteam.xyz/spammer/danacita?no=${text}&APIKEY=APIKEYMU`).then ((res) => {
	 	let hasil = `${res.data.result}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['danacinta'].map(v => v + ' no hp')
handler.tags = ['premium']
handler.command = /^(danacinta)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 20
handler.limit = false

module.exports = handler
