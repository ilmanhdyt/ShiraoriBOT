let fs = require('fs')
let mods = global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
}
handler.help = ['moderator', 'mods']
handler.tags = ['owner']
handler.command = /^(moderator|mods)$/i

module.exports = handler
