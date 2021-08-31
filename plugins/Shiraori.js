let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Haiiikk Ilman Onii-chan  >///<
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /Shiraori/i
handler.command = new RegExp

module.exports = handler
