let handler = async (m, { conn }) => {
	
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)', '', 'caption', m)
}
handler.help = ['school]
handler.tags = ['NSFW']
handler.command = /^(school)$/i

handler.limit = true
handler.premium = true
handler.group = true

module.exports = handler