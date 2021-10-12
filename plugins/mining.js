let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, 'Selamat Anda Mendapatkan\n827 Rupiah', m)
}
handler.help = ['mining']
handler.tags = ['xp']
handler.command = /^mining/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true
handler.exp = 100

module.exports = handler
