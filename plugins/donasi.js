let fetch = require('node-fetch')
let handler = async (m, { conn, text, command, usedPrefix }) => {
  conn.sendFile(m.chat, url, 'gimage', '', m, 0, { thumbnail: await (await fetch('https://telegra.ph/file/ce200b33ebdc9ef61074a.jpg')).buffer() })
}
┌〔 Donasi • Emoney 〕
├ https://saweria.co/ilmanhdyt
├ Pulsa Telkomsel : 081251047727
└────

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
