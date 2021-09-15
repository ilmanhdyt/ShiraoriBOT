let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
   *Open Jasa Sewa Bot*
   
   *Sewa Seminggu* / 10k
   *Sewa Sebulan* / 20k
   *member premium* / 5k
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /.sewa/i
handler.command = new RegExp

module.exports = handler
