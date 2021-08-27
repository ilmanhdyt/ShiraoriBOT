let handler = async (m, { conn, args }) => {

  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'

  if (!m.allmem[0]) throw `siap dikickall`

  let users = m.allmem.filter(u => !(u == ownerGroup || u.includes(conn.allmem.jid)))

  for (let allmem) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [allmem])

}

handler.help = ['kickall', '-'].map(v => 'o' + v + ' @member')

handler.tags = ['owner']

handler.command = /^(okickall|o\-)$/i

handler.owner = true

handler.mods = false

handler.premium = false

handler.group = true

handler.private = false

handler.admin = false

handler.botAdmin = true

handler.fail = null

module.exports = handler
