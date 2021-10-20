let { MessageType, Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text, participants }) => {
	await conn.updatePresence(m.chat, Presence.composing)
	conn.job = conn.job ? conn.job : {}
	let member = participants.map(u => u.jid)
	var sum = member.length
	var total = 0
	var user = []
	for(let i = 0; i < sum; i++) {
		if(typeof global.db.data.users[member[i]] != 'undefined') {
      if (typeof conn.job[member[i]] != "undefined"){
        total += 1
        user.push(member[i])
      }
		}
	}
	if(total == 0) return conn.reply(m.chat, `*❏ LIST JOB*\n\nTidak ada yang menawarkan jasa apapun di grup ini`, m) 
	conn.reply(m.chat, `*❏ LIST JOB*\n\n${user.map(v => '  ○ @' + v.replace(/@.+/, '') + ' [ ' + conn.job[v].job + ' - Rp. ' + conn.job[v].price.toLocaleString()  +' ]').join('\n')}\n\nKetik .sewa @user untuk menyewa orang`, m,{ contextInfo: { mentionedJid: user } })
}
handler.help = ['listjob']
handler.tags = ['game']
handler.command = /^(listjob)$/i
handler.group = true
handler.fail = null
module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
