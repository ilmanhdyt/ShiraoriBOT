let handler = async (m, { conn, args }) => {
         let members_id = groupMembers.map(v => v.jid)
          let mentioned = members_id
       let using = mentioned.filter(u => !(u == isOwner || u.includes(conn.user.jid)))
                for (let member of using) {
                if (member.endsWith('@s.whatsapp.net')) 
                await delay(3000)
                await conn.groupRemove(from, members_id)
                }
               await m.reply(m.chat, 'Sukses Kick All Member', m)
}
handler.help = ['okickall']
handler.tags = ['owner']
handler.command = /^(okickall)$/i
handler.rowner = true
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = false

module.exports = handler
