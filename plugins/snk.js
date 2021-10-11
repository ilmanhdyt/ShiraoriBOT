let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*Bot ini menggunakan open source*
*yang dibangun dengan nodejs*

*bot ini menggunakan sc buatan Nurutomo*
*dan di tulis ulang/recode*

https://github.com/ilmanhdyt/ShiraoriBOT

*Thank To*
- Nurutomo
- ariffb

`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.help = ['snk']
handler.tags = ['info']
handler.command = /^(snk)$/i

module.exports = handler
