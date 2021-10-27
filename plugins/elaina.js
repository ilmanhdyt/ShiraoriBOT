let fetch = require ('node-fetch')
let res = await fetch(global.API('lolhum', '/api/random/elaina', {
}, 'apikey'))
await conn.sendButtonImg(m.chat, await (await fetch(fetch)).buffer(), "Elaina", 'caption', 'NEXT', `.elaina`, m)
}
handler.help = ['elaina']
handler.tags = ['random']
handler.command /^(elaina)$/i

module.exports = handler