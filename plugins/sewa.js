const sewabot = () => { 
	return `
*OPEN JASA SEWA BOT*

Sewa Seminggu / Rp 10,000
Sewa Sebulan / Rp 20,000
Member Premium / Rp 5,000

*Payment :*
_Pulsa Dan Dana_

Minat?Chat
wa.me/6281351047727
`
}
handler.help = ['sewa']
handler.tags = ['info']
handler.command = /^(sewa)$/i

module.exports = handler
