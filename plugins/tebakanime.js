let fetch = require('node-fetch')
let timeout = 60000
let poin = 25000

let handler  = async (m, { conn, usedPrefix }) => {

    conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
    let id = m.chat
    if (id in conn.tebakanime) {
        conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
        throw false
    }
    let res = await fetch('http://zekais-api.herokuapp.com/tebakanime')
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let caption = `「 TEBAK ANIME 」\n\nWaktu : ${(timeout / 1000).toFixed(2)} Detik\nBonus : ${poin} XP`
    conn.tebakanime[id] = [
      await conn.sendFile(m.chat, json.image, 'tebakanime.jpg', caption, m),
      json, poin,
      setTimeout(() => {
        if (conn.tebakanime[id]) conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.name}*\n\nUrl : ${json.url}\nDesk :\n${json.desc}`, conn.tebakanime[id][0])
        delete conn.tebakanime[id]
      }, timeout)
    ]
  }
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime$/i

module.exports = handler
