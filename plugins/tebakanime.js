const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakanime = conn.tebakanime ? conn.tebakanime : {}
  let id = m.chat
  if (id in conn.tebakanime) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakanime[id][0])
    throw false
  }
  let tebakanime = JSON.parse(fs.readFileSync(`./src/tebakanime.json`))
  let json = tebakanime[Math.floor(Math.random() * tebakanime.length)]
  let caption = `
  ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}wut untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakanime[id] = [
    await conn.sendButtonImg(m.chat, caption, await (await fetch(json.img)).buffer(), '© shiraori', 'BANTUAN', '.wut')
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakanime[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© shiraori', 'TEBAK ANIME', '.tebakanime')
      delete conn.tebakanime[id]
    }, timeout)
  ]
}
handler.help = ['tebakanime']
handler.tags = ['game']
handler.command = /^tebakanime/i

module.exports = handler
