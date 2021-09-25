const fs = require('fs')
const fetch = require('node-fetch')

let timeout = 60000
let poin = 1500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakangka = conn.tebakangka ? conn.tebakangka : {}
  let id = m.chat
  if (id in conn.tebakangka) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakangka[id][0])
    throw false
  }
  let res = await fetch('https://salism3api.pythonanywhere.com/math/')
  if (!res.ok) throw await `${res.success} ${res.successText}`
  let json = await res.json()
  if (!json.success) throw json
  let caption = `
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tean untuk bantuan
Bonus: +Rp ${poin}
    `.trim()
  conn.tebakangka[id] = [
    await conn.sendButtonImg(m.chat, caption, await (await fetch(json.image)).buffer(), '© SHIRAORI', 'BANTUAN', '.tean')
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakangka[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.answer}*`, '© SHIRAORI', 'TEBAK ANGKA', '.tebakangka')
      delete conn.tebakangka[id]
    }, timeout)
  ]
}
handler.help = ['tebakangka']
handler.tags = ['game']
handler.command = /^tebakangka/i

module.exports = handler
