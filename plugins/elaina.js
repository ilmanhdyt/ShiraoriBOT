let { getBuffer } = require('../lib/function')
let fetch = require('node-fetch')
let handler = async (m, { conn, command, text, usedPrefix }) => {

let hasil = await getBuffer('https://lolhuman.xyz/api/random/elaina?apikey=HIRO')

await conn.sendButtonImg(m.chat, await fetch(Img)).buffer(),`
}
