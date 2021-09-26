let fs = require('fs')
let mods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
}
handler.help = ['moderator']
handler.tags = ['owner']
handler.command = /^moderator$/i

module.exports = handler
