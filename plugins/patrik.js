const fetch = require('node-fetch')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')

let handler = async (m, { conn, text, usedPrefix, command }) => {

}
handler.help = ['patrick']
handler.tags = ['sticker']
handler.command = /^(patrick)$/i

handler.limit = true

module.exports = handler

const delay = time => new Promise(res => setTimeout(res, time))