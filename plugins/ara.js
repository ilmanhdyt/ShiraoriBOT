let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/Ara.mp3')
conn.sendMessage(m.chat, ara, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
} 
handler.customPrefix [ /^ara ?ara$/i
handler.command = new RegExp

module.exports = handler