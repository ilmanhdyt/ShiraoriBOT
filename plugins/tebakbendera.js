const fetch = require('node-fetch')
let timeout = 120000
let poin = 500
let handler = async (m, { conn, usedPrefix }) => {
  conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
  let id = m.chat
  if (id in conn.tebakbendera) {
    conn.reply(m.chat, 'Masih ada soal belum terjawab di chat ini', conn.tebakgambar[id][0])
    throw false
  }
  let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
  let caption = `
  ${json.deskripsi}
Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${usedPrefix}tebe untuk bantuan
Bonus: ${poin} XP
    `.trim()
  conn.tebakbendera[id] = [
    await conn.sendButtonLoc(m.chat, await (await fetch(json.img)).buffer(), caption, '© SHIRAORI', 'Bantuan', '.tebe', m)
    ,
    json, poin,
    setTimeout(async () => {
      if (conn.tebakbendera[id]) await conn.sendButton(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, '© SHIRAORI', 'Tebak Bendera', '.tebakbendera', conn.tebakbendera[id][0])
      delete conn.tebakbendera[id]
    }, timeout)
  ]
}
handler.help = ['tebakbendera']
handler.tags = ['game']
handler.command = /^tebakbendera/i
handler.disable = true

module.exports = handler
