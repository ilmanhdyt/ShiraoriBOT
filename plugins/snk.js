//jangan di hapus yee kontol tambahin aja
// lu tu cuman recode

let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
*Bot ini merupakan Bot WhatsApp yang dibangun dengan menggunakan nodejs*

*Yang dibuat oleh Nurutomo*
*Dan ditulis ulang/recode oleh Ariffb*

*ingin membuat bot?* 
*bot ini open resource loh*
*bisa kalian coba dengan menekan link dibawah ini*
*https://github.com/ilmanhdyt/ShiraoriBOT*

*Thanks To*
=> *Nurutomo* > https://github.com/Nurutomo
=> *Ariffb* > https://github.com/ariffb25
=> *BochilGaming* > https://github.com/BochilGaming
=> *ilmanhdyt* > https://github.com/ilmanhdyt

`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.help = ['snk']
handler.tags = ['info', 'main']
handler.command = /^(snk)$/i

module.exports = handler
