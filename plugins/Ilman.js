let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ilman Onii-Chan Punya  >///<
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /ilman/i
handler.command = new RegExp

module.exports = handler
