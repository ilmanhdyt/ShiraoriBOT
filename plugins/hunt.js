let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {

	let monsters = [
		{ area: 1, : "Goblin" },
		{ area: 1, : "Slime" },
		{ area: 1, : "Wolf" },
		{ area: 2, : "Nymph" },
		{ area: 2, : "Skeleton" },
		{ area: 2, : "Wolf" },
		{ area: 3, : "Baby Demon" },
		{ area: 3, : "Ghost" },
		{ area: 3, : "Zombie" },
		{ area: 4, : "Imp" },
		{ area: 4, : "Witch" },
		{ area: 4, : "Zombie" },
		{ area: 5, : "Ghoul" },
		{ area: 5, : "Giant Scorpion" },
		{ area: 5, : "Unicorn" },
		{ area: 6, : "Baby Robot" },
		{ area: 6, : "Sorcerer" },
		{ area: 6, : "Unicorn" },
		{ area: 7, : "Cecaelia" },
		{ area: 7, : "Giant Piranha" },
		{ area: 7, : "Mermaid" },
		{ area: 8, : "Giant Crocodile" },
		{ area: 8, : "Nereid" },
		{ area: 8, : "Mermaid" },
		{ area: 9, : "Demon" },
		{ area: 9, : "Harpy" },
		{ area: 9, : "Killer Robot" },
		{ area: 10, : "Dullahan" },
		{ area: 10, : "Manticore" },
		{ area: 10, : "Killer Robot" },
		{ area: 11, : "Baby Dragon" },
		{ area: 11, : "Young Dragon" },
		{ area: 11, : "Scaled Baby Dragon" },
		{ area: 12, : "Kid Dragon" },
		{ area: 12, : "Not so young Dragon" },
		{ area: 12, : "Scaled Kid Dragon" },
		{ area: 13, : "Definitely not so young Dragon" },
		{ area: 13, : "Teen Dragon" },
		{ area: 13, : "Scaled Teen Dragon" },
		{ area: 14, : "ogre" },
		{ area: 15, : "kijin" },
		{ area: 16, : "majin" },
		{ area: 17, : "demon lord" },
	]
	let player = global.db.data.users[m.sender]
	let pname = conn.getName(m.sender),

	let cdm = `${MeNit(new Date - player.Thunt)}`
	let cds = `${DeTik(new Date - player.Thunt)}`
	let cd1 = Math.ceil(01 - cdm)
	let cd2 = Math.ceil(60 - cds)
	
let { name, limit, money, exp, lastclaim, registered, regTime, age, level, role, banned, pasangan } = global.db.data.users[m.sender]

	let area_monsters = monsters.filter(monster => { return monster.area === player.area })
	let monster = area_monsters[Math.floor(Math.random() * area_monsters.length)]
	let monsterName = monster.name.toUpperCase()

	if (new Date - global.db.data.users[m.sender].lasthunt > 120000) {
		let coins = parseInt(Math.floor(Math.random() * 401))
		let exp = parseInt(Math.floor(Math.random() * 601))
		let sum = 82 * player.area - 59
		let dmg = (player.sword  * 5 + player.armor * 5 - sum)
		dmg = dmg < 0 ? Math.abs(dmg) : 0

		player.healt -= dmg
		player.lasthunt = new Date * 1 // waktu hunt 2menit

		if (player.healt < 0) {
			let msg = `Anda Mati Di Bunuh Oleh ${monsterName}`
			if (user.level > 0) {
				user.level -= 1
				msg += `\nLevel Anda Turun 1 Karena Mati Saat Berburu!`
			}
			player.healt = 100
			m.reply(msg)
			return
		}

		player.money += coins * 1
		player.exp += exp * 1

		let pesan = `*${name} Menemukan Dan Membunuh *${monsterName}*\nMendapatkan ${new Intl.NumberFormat('en-US').format(coins)} coins & ${new Intl.NumberFormat('en-US').format(exp)} XP\nBerkurang -${dmg}Hp, Tersisa ${player.healt}/${100}`
		m.reply(pesan)
	} else throw `Tunggu *00:${cd1}:${cd2}* Untuk Berburu Lagi`
}

handler.help = ['hunt']
handler.tags = ['rpg']
handler.command = /^(hunt)$/i

handler.premium = true

handler.fail = null

module.exports = handler

function MeNit(ms) {
	let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
	return [m].map(v => v.toString().padStart(2, 0)).join(':')
}

function DeTik(ms) {
	let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
	return [s].map(v => v.toString().padStart(2, 0)).join(':')
}
