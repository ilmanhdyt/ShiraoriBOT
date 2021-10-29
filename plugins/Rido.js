let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
@6281351047727 ada yg manggil
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6281351047727/i
handler.command = new RegExp

module.exports = handler
