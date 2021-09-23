let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
let handler = async (m, { conn, participants, groupMetadata, text }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }
  conn.reply(m.chat, `
*「 ANTI TOXIC 」*
Pengirim : ${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}
Pesan : ${m.text}
Biasakan Jangan Toxic ya! :)
Jangan Diulangi Yaa!
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /anjing|memek|kontol|goblok|goblog|asw|asu|ajg|anjg|anj|babi|vagina|penis|yamete|kudasai/i
handler.command = new RegExp

module.exports = handler
