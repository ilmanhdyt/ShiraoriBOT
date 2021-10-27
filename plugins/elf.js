let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let url = global.API('lolhum', '/api/random/elf', {}, 'apikey')
    await conn.sendFile(m.chat, url, '', '© SHIRAORI BOT', m, 0, { thumbnail: await (await fetch(url)).buffer() })  
}
handler.help = ['elf']
handler.tags = ['random']
handler.command = /^(elf)$/i

handler.limit = 2

module.exports = handler

