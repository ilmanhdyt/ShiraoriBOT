const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {

    for (let i of json.sticker) {
        stiker = await sticker(false, i, global.packname, global.author)
        await conn.sendMessage(m.chat, stiker, MessageType.sticker)
        await delay(1500)
    }
    m.reply('_*Selesai*_')

}
handler.help = ['patrick']
handler.tags = ['sticker']
handler.command = /^(patrick)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))