let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Njer Ni orang Mau di kick
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6288279550172/i
handler.command = new RegExp

module.exports = handler
