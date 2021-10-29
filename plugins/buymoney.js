const xppermoney = 500
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^buymoney/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / xppermoney) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (isNaN(count)) throw `hanya angka!\n\ncontoh: .buymoney5`
  if (global.db.data.users[m.sender].exp >= xppermoney * count) {
    global.db.data.users[m.sender].exp -= xppermoney * count
    global.db.data.users[m.sender].money += count
    conn.reply(m.chat, `-${xppermoney * count} XP\n+ ${count} Money`, m)
  } else conn.reply(m.chat, `XP tidak mencukupi untuk membeli ${count} money`, m)
}
handler.help = ['buymoney')
handler.tags = ['rpg']
handler.command = /^(buymoney)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
