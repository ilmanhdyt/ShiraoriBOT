let handler = async (m, { conn, args }) => {
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let members_id = m.members_id.filter(u => !(u == ownerGroup || u.includes(conn.members.jid)))
  for (let member of members) if (members.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [members_id])
  await m.reply(m.chat, 'Sukses Kick All Member', m)
}
handler.help = ['ekickall']
handler.tags = ['group']
handler.command = /^(ekickall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler
