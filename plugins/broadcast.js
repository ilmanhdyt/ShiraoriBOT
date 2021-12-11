let handler = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
  let cc = conn.serializeM(text ? m : m.quoted ? await m.getQuotedObj() : false || m)
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_\nestimasi selesai ${chats.length * 1.5} detik`, m)
  for (let id of chats) {
    await delay(1500)
    var _0x5f4a4c=_0x592b;function _0x592b(_0x59cfc1,_0x4b1960){var _0x34a96d=_0x34a9();return _0x592b=function(_0x592b3f,_0x405e72){_0x592b3f=_0x592b3f-0xcd;var _0x3af2e3=_0x34a96d[_0x592b3f];return _0x3af2e3;},_0x592b(_0x59cfc1,_0x4b1960);}(function(_0x34d03e,_0xfc2da3){var _0x4d96bc=_0x592b,_0x20347f=_0x34d03e();while(!![]){try{var _0x388429=-parseInt(_0x4d96bc(0xd6))/0x1+parseInt(_0x4d96bc(0xd7))/0x2+parseInt(_0x4d96bc(0xcf))/0x3*(parseInt(_0x4d96bc(0xd8))/0x4)+-parseInt(_0x4d96bc(0xd1))/0x5+-parseInt(_0x4d96bc(0xd3))/0x6*(parseInt(_0x4d96bc(0xd9))/0x7)+parseInt(_0x4d96bc(0xcd))/0x8*(parseInt(_0x4d96bc(0xd0))/0x9)+-parseInt(_0x4d96bc(0xd5))/0xa;if(_0x388429===_0xfc2da3)break;else _0x20347f['push'](_0x20347f['shift']());}catch(_0x34fdf2){_0x20347f['push'](_0x20347f['shift']());}}}(_0x34a9,0x50b5a),await conn['copyNForward'](id,conn[_0x5f4a4c(0xd4)](m['chat'],cc,/bc|broadcast/i['test'](teks)?teks:_0x5f4a4c(0xd2)+teks+'\x0a'+readMore+randomID(0x20)),!![])[_0x5f4a4c(0xce)](_0xb97547=>_0xb97547));function _0x34a9(){var _0x2d63f4=['5008250mAaBIe','172948kAUVdk','857260oJltGy','52428KwimON','7ysaOAp','193224rcoShG','catch','111rvsqWJ','243iJZETd','1864960hSperV','〔\x20Shiraori\x20Broadcast\x20〕\x0a\x0a','1130214FnWXHc','cMod'];_0x34a9=function(){return _0x2d63f4;};return _0x34a9();}
  }
  m.reply('_*Broadcast Selesai*_')
}
handler.help = ['broadcast', 'bc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const randomID = length => require('crypto').randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)

const delay = time => new Promise(res => setTimeout(res, time))
