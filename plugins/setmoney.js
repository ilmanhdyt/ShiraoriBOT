let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	let list = Object.entries(global.db.data.users)
	let money = !args || !args[0] ? 100 : isNumber(args[0]) ? parseInt(args[0]) : 100
	money = Math.max(1, money)
	list.map(([user, data], i) => (Number(data.money = money)))
		conn.reply(m.chat, `*berhasil direset ${money} / user*`, m)
}
handler.help = ['money'].map(v => 'reset' + v)
handler.tags = ['owner', 'host']
handler.command = /^(resetmoney)$/i
//by games-bot
handler.rowner = true

module.exports = handler

function isNumber(x = 0) {
  x = parseInt(x)
  return !isNaN(x) && typeof x == 'number'
}
