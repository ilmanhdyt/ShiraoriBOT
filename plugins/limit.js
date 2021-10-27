let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* Limit\n*${user.exp}* XP\nUang *${user.money}*\nLevel *${user.level}*\nRole *${user.role}*\nPasangan *${user.pasangan}*`)
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler