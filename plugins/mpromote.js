let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isAdmin).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeAdmin(m.chat, [user]).catch(console.log)
}
handler.help = ['promote', 'admin', '^'].map(v => 'm' + v + ' @user')
handler.tags = ['mods']

handler.command = /^(opromote|oadmin|o\^)$/i

handler.mods = true
handler.group = true

handler.admin = false
handler.botAdmin = true

module.exports = handler
