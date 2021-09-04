let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ariel-sama Wangyy Wangyy
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /Ariel/i
handler.command = new RegExp

module.exports = handler
