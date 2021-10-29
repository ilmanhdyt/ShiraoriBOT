let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* Limit\n*${user.exp}* XP\nLevel *${user.level}*\nRole *${user.role}*\nUang *${user.money}*\nPasangan *${user.pasangan}*`)
}
handler.help = ['my [@user]', 'balance']
handler.tags = ['xp']
handler.command = /^(my|limit|balance)$/i
module.exports = handler