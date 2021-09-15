let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
E
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /.sewa/i
handler.command = new RegExp

module.exports = handler
