let handler = async (m, { conn, participants }) => {
  let members = participants.filter(member => !member.isMods).map(member => member.jid)
  let users = m.mentionedJid.filter(user => members.includes(user))
  for (let user of users) await conn.groupMakeMods(m.chat, [user]).catch(console.log)
}
handler.help = ['addmods', '^'].map(v => 'o' + v + ' @user')
handler.tags = ['owner']

handler.command = /^(addmoderator|addmods\^)$/i

handler.owner = true
handler.group = true

handler.admin = false
handler.botAdmin = true

module.exports = handler
