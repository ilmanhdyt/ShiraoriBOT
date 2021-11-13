let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat,`${pickRandom(global.shiraori)}`, m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = //i
handler.command = new RegExp
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.shiraori = [
'halo kak',
'knp kak',
'kak jalan yuk>_<',
'jangan ganggu shiraori lagi sibuk',
'bentar ewe dulu ama ilman',
'Shiraori lagi makan',
'Shiraori disini',
'Donasi dulu',
'Shiraori pengen punya adik, tapi gk dibolehin ama ilman:(',
'bagi duit dulu/',
'Silahkan ketik .menu ya kak',
'Shiraori istirahat dulu',
]
