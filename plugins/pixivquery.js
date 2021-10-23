const axios = require('axios')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/pixiv2', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© SHIRAORI', m, 0, { thumbnail: await (await fetch(img)).buffer()
}
handler.help = ['pixiv <pencarian>']
handler.tags = ['internet']
handler.command = /^(pixiv)$/i

handler.limit = true

module.exports = handler