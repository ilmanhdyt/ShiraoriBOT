let fetch = require ('node-fetch')
let res = await fetch(global.API('lolhum', '/api/random/elaina', {
}, 'apikey'))
await conn.sendButtonImg(m.chat, await (await fetch(res)).buffer(), "Elaina Punya Ilman", '© SHIRAORI BOT', 'NEXT', `.elaina`, m)
}
handler.help = ['elaina']
handler.tags = ['anime']
handler.command /^(elaina)$/i

module.exports = handler