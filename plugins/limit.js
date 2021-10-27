let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.limit}* Limit\n*${user.exp}* XP\nUang *${user.money}*\nLevel *${user.level}*\nRole *${user.role}*\nPasangan ${ pasangan ? `Pasangan: *${conn.getName(pasangan)}* ${global.db.data.users[pasangan].registered ? "(" + global.db.data.users[pasangan].name + ") 
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler