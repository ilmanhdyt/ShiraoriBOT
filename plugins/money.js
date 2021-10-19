let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    m.reply(`*${user.money}* uang`)
}
handler.help = ['uang']
handler.tags = ['rpg']
handler.command = /^(uang)$/i
module.exports = handler
