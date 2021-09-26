let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`)
}
handler.command = ['ojoin']

handler.owner = true

module.exports = handler
