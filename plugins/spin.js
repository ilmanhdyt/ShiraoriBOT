let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args }) => {
	let money = global.DATABASE._data.users[m.sender].money
	if (args[0] == "all"){
		args[0] = global.DATABASE._data.users[m.sender].money
	}
	if(!args || !args[0] || args[0] == 0) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Masukkan nominal / jumlah uang untuk di spin.*`, m)
	} else if(isNaN(args[0]) && args[0] !== "all") {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Uang harus berupa angka & tanpa [ . ]*`, m)
	} else if(args[0] > money) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Uang anda tidak cukup untuk melakukan spin sebanyak Rp. ${Number(args[0]).toLocaleString().replace(/,/g, '.')},-*`, m)
	} else if(money == 0) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Kamu tidak punya uang untuk bermain permainan spin.*`, m)
	} else if(args[0] < 10000) {
		await conn.updatePresence(m.chat, Presence.composing) 
		conn.reply(m.chat, `*Tidak bisa melakukan spin dengan nominal di bawah Rp. 10.000,-*`, m)
	}else {
		global.DATABASE._data.users[m.sender].money -= args[0]
		await conn.updatePresence(m.chat, Presence.composing)
		setTimeout(() => {
			var maxReward = 5
			if (money > 1000000000){		// > 1 M
				if (args[0] > 1000000000){
					var reward = getRandom(1,0.25*args[0])
				}else if (args[0] > 100000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 10000000){
					var reward = getRandom(1,0.75*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,1.25*args[0])
				}else {
					var reward = getRandom(1,1.5*args[0])
				}
			}else if (money > 100000000){	// > 100 jt
				if (args[0] > 100000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 10000000){
					var reward = getRandom(1,0.75*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,1.5*args[0])
				}else {
					var reward = getRandom(1,2*args[0])
				}
			}else if (money > 20000000){	// > 20 jt
				if (args[0] > 20000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 10000000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,1.25*args[0])
				}else if (args[0] > 100000){
					var reward = getRandom(1,2*args[0])
				}else {
					var reward = getRandom(1,3*args[0])
				}
			}else if (money > 5000000){	// > 5 jt
				if (args[0] > 5000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 1000000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 500000) {
					var reward = getRandom(1,2*args[0])
				}else if (args[0] > 100000) {
					var reward = getRandom(1,3*args[0])
				}else {
					var reward = getRandom(1,4*args[0])
				}
			}else{		// < 5jt
				if (args[0] > 1000000){
					var reward = getRandom(1,0.5*args[0])
				}else if (args[0] > 500000){
					var reward = getRandom(1,1*args[0])
				}else if (args[0] > 250000) {
					var reward = getRandom(1,2*args[0])
				}else if (args[0] > 100000) {
					var reward = getRandom(1,3*args[0])
				}else if (args[0] > 50000) {
					var reward = getRandom(1,4*args[0])
				}else {
					var reward = getRandom(1,maxReward*args[0])
				}
			}
			
			global.DATABASE._data.users[m.sender].money += reward  
			let last = global.DATABASE._data.users[m.sender].money
			let total = last

			conn.updatePresence(m.chat, Presence.composing)

			return conn.reply(m.chat, `*❏ SPIN RESULT*\n\n	- *Rp. ${Number(args[0]).toLocaleString().replace(/,/g, '.')}*\n	+ *Rp. ${Number(reward).toLocaleString().replace(/,/g, '.')}*\n\n*Total : Rp. ${Number(total).toLocaleString().replace(/,/g, '.')},-*\n\n*NB* : “Rentang hadiah adalah Rp. 1 sampai ${maxReward}x lipat modal dengan pengurangan limit setiap kali penggunaan”`, m)  
    }, 1000)
	} 
}
handler.help = ['spin *money*','judi *money*', 'spin *all*', 'judi *all*']
handler.tags = ['game']
handler.command = /^(spin|judi)$/i
handler.owner = false
handler.group = false
handler.limit = true

handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
