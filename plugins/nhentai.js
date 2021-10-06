const { WAConnection: _WAConnection, MessageType, Mimetype } = require('@adiwajshing/baileys')
let axios = require('axios');
let handler = async (m, { conn, usedPrefix: _p, text }) => {
	if (!text) throw `Masukan kodenya\nContoh : ${_p}nhentai 375518`
	axios.get(`https://api.lolhuman.xyz/api/nhentaipdf/${text})`?apikey=3af90a5d6317457b1f93e921
    	if(res.data.status) throw res.data.msg
    	conn.sendFile(m.chat, res.data, MessageType.document, { mimetype: Mimetype.pdf, filename: `nhentai.pdf` })
	})
}
handler.help = ['nhentai']
handler.tags = ['downloader']
handler.command = /^nhentai/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
