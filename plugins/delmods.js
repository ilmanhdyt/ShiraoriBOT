let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/moderator.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who)) throw `${conn.getName(who)} dia bukan admin shiraori!`
    let index = json.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
    json.splice(index, 1)
    fs.writeFileSync('./src/moderator.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} telah dipecat menjadi admin shiraori!`)

    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['deladmin [@user]']
handler.tags = ['owner']
handler.command = /^(deladmin)$/i

handler.owner = true

module.exports = handler
