let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Ada Apa Nge Tag Onii-chan Mau Di Kick?
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6281351047727/i
handler.command = new RegExp

module.exports = handler
