let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat,`${pickRandom(global.shiraori)}`, m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /ilman|Ilman/i
handler.command = new RegExp

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.shiraori = [
'halo ilman',
'knp ilman?',
]