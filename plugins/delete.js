let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (/Shiraori Broadcast/i.test(m.quoted.text)) throw 'Tidak bisa menghapus pesan broadcast!'
  if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['del', 'delete']
handler.tags = ['info']

handler.command = /^del(ete)|unsend?$/i
handler.limit = 2

module.exports = handler
