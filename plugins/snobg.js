let { MessageType, Mimetype, Presence } = require('@adiwajshing/baileys')
const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn }) => {
	conn.updatePresence(m.chat, Presence.composing) 
	const content = JSON.stringify(m.message)
	const type = Object.keys(m.message)[0]
	const isImage = type === 'extendedTextMessage' && content.includes('imageMessage')
	if(!isImage) return m.reply(`*Reply foto untuk dijadikan sticker tanpa background.*`)
	m.reply(global.wait)
	encmedia = JSON.parse(JSON.stringify(m).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
	media = await conn.downloadAndSaveMediaMessage(encmedia)
	ranc = getRandom('.png')
	ran = path.join(__dirname, '../tmp', ranc)
	exec(`magick "${media}" -fuzz 2% -fill none -draw "alpha 0,0 floodfill" -channel alpha -blur 0x2 -level 50x100% +channel ${ran}`, (err, stderr, stdout) => {
	fs.unlinkSync(media)
	if (err) return m.reply(global.error)
		buffer = fs.readFileSync(ran)
		conn.sendFile(m.chat, buffer, 'a.png', '', m)
		fs.unlinkSync(ran)
	})
}
handler.help = ['snobg *(reply)*']
handler.tags = ['sticker']
handler.command = /^(s?nobg)$/i
handler.premium = true
handler.limit = true
handler.fail = null
module.exports = handler

function getRandom(ext) {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}
