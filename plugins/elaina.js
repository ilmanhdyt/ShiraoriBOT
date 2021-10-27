var {WAMessageProto} = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
heum = await require('node-fetch')('https://api.lolhuman/api/random/elaina?apikey=HIRO'').then(v => v.json())
let url = heum[Math.floor(Math.random() * heum.length)]
 let buttons = [
  {buttonId: '.elaina', buttonText: {displayText: 'Get Again'}, type: 1}
]
const buttonsMessage = {
    contentText: `
Elaina
`.trim(),    footerText: '© Elaina Punya ilman',
    buttons: buttons,
  imageMessage: await conn.toMSG({ url }, 'imageMessage'),
    headerType: 'IMAGE'
}
const sendMsg = await conn.prepareMessageFromContent(m.chat,{buttonsMessage},{ quoted: m})

conn.relayWAMessage(sendMsg)
}
handler.command = /^(elaina)$/i
handler.tags = ['random']
handler.help = ['elaina']
module.exports = handler