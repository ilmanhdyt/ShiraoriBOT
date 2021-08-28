case 'kickall':
if (!isOwner) return reply(ind.ownerb())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
     teks += `*sayonara* ${mem.jid.split('@')[0]}\n`
	 members_id.push(mem.jid)
}
mentions(teks, members_id, true)
client.groupRemove(from, members_id)
break
}
handler.help = ['kickall']
handler.tags = ['admin']
handler.command = /^(kickall|\-)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
