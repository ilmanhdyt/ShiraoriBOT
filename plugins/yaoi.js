let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch('https://api.lolhuman.xyz/api/random/nsfw/yaoi?apikey=HIRO')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Lu pasti gay kntl', '© SHIRAORI BOT', 'Next', '.yaoi', m)
}
handler.command = /^(yaoi)$/i
handler.tags = ['nsfw']
handler.help = ['yaoi']

handler.nsfw = true

module.exports = handler