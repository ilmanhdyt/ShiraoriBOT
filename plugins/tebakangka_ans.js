const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tean/i.test(m.quoted.contentText)) return !0
  this.tebakangka = this.tebakangka ? this.tebakangka : {}
  if (!(id in this.tebakangka)) return m.reply('Soal itu telah berakhir')
  // if (m.quoted.id == this.tebakangka[id][0].id) { // undefined T_T
  let json = JSON.parse(JSON.stringify(this.tebakangka[id][1]))
  if (['.tean', 'BANTUAN', ''].includes(m.text)) return !0
  if (m.text.toLowerCase() == json.answer.toLowerCase()) {
    global.DATABASE._data.users[m.sender].uang += this.tebakangka[id][2]
    await this.sendButton(m.chat, `*Benar!* +Rp ${this.tebakangka[id][2]}`, '© SHIRAORI', 'TEBAK ANGKA', '.tebakangka')
    clearTimeout(this.tebakangka[id][3])
    delete this.tebakangka[id]
  } else if (similarity(m.text.toLowerCase(), json.answer.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
  else m.reply(`*Salah!*`)
  // }
  return !0
}
handler.exp = 0

module.exports = handler
