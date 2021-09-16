let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['rkick']
handler.tags = ['admin']
handler.command = /^(rkick)$/i

handler.group = true
handler.private = false
handler.premium = false

handler.admin = true
handler.botAdmin = true
handler.owner = false

handler.fail = null
handler.limit = true

module.exports = handler
