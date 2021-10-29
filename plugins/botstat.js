let handler = async (m, { conn, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
    let chat = db.data.chats[m.chat]
    let user = db.data.users[who]
    let set = db.data.settings[conn.user.jid]
    if (/chat$/i.test(command)) {
        m.reply(`
┌「 Chat 」${m.isGroup ? `
├ ${chat.isBanned ? '✅' : '❌'} Banned
├ ${chat.welcome ? '✅' : '❌'} Welcome
├ ${chat.detect ? '✅' : '❌'} Detect
├ ${chat.antiLink ? '✅' : '❌'} Anti Link` : ''}
├ ${chat.delete ? '❌' : '✅'} Anti Delete
├ ${chat.download ? '❌' : '✅'} Auto Download
├ ${chat.getmsg ? '❌' : '✅'} Auto Get Messages
├ ${chat.stiker ? '❌' : '✅'} Auto Sticker
├ ${chat.viewonce ? '❌' : '✅'} Auto View Once
└────
       `.trim())
    }
    if (/user$/i.test(command)) {
        m.reply(`
┌「 User 」${user.registered ? `
├ NIM : ${user.nim}` : ``}
├ Name: ${user.name}
├ EXP: ${user.exp}
├ Limit: ${user.limit}
├ Premium: ${prems.includes(who.split`@`[0]) ? '✅' : '❌'}
├ Banned: ${user.banned ? '✅' : '❌'}
└────
            `.trim())
    }
    if (/bot$/i.test(command)) {
        m.reply(`
┌「 Bot 」
├ Name: ${conn.user.name}
├ ${set.anticall ? '✅' : '❌'} Anti Call
├ ${set.antispam ? '✅' : '❌'} Anti Spam
├ ${set.antitroli ? '✅' : '❌'} Anti Troli
├ ${set.autoread ? '✅' : '❌'} Auto Read
├ ${set.forward ? '✅' : '❌'} Forward Erajaya
├ ${set.group ? '✅' : '❌'} Group Only
├ ${set.jadibot ? '✅' : '❌'} Jadibot
├ ${set.private ? '✅' : '❌'} Private Chat Only
├ ${set.restrict ? '✅' : '❌'} Restrict
├ ${set.self ? '✅' : '❌'} Self
└────
`.trim())
    }
}
handler.help = ['infochat', 'infouser', 'infobot']
handler.tags = ['info']
handler.command = /^(info(chat|user|bot))$/i

module.exports = handler
