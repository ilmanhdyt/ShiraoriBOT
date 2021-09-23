let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
https://github.com/Hidayatilman/ShiraoriBOT
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /.sc/i
handler.command = new RegExp

module.exports = handler
