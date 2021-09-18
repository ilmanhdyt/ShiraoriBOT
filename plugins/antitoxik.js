let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*「 ANTI TOXIC 」*
Pengirim : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Pesan : ${m.text}
Biasakan Jangan Toxic ya! :)
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /anjing|memek|kontol|goblok|goblog/i
handler.command = new RegExp

module.exports = handler
