let handler = async (m, { conn }) => {
let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.qouted ? m.quoted.sender : ''
await conn.groupRemove(m.chat, [who || m.quoted.sender])
}
handler.help = ['mkick']
handler.tags = ['mods']
handler.command = /^(mkick)$/i

handler.group = true
handler.private = false
handler.premium = false

handler.mods = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
