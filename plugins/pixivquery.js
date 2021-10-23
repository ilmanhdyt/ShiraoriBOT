const fetch = require('node-fetch')

let handler = async (m, { conn }) => {
    let res = await fetch(global.API('lolhum', '/api/konachan', {}, 'apikey'))
    if (!res.ok) throw await res.text()
    let img = await res.buffer()
    if (!img) throw img
    conn.sendFile(m.chat, img, '', '© SHIRAORI', m, 0, { thumbnail: await (await fetch(img)).buffer()
}
handler.help = ['konachan <pencarian>']
handler.tags = ['internet']
handler.command = /^(konachan)$/i

handler.limit = true

module.exports = handler