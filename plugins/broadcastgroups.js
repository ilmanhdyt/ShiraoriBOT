let handler = async (m, { conn, text }) => {
  let groups = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v => v.jid)
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_\nestimasi selesai ${groups.length * 1.5} detik`, m)
  for (let id of groups) {
    await delay(1500)
    var _0x4c5008=_0x3192;function _0x3192(_0x13e838,_0x99fb29){var _0xedf126=_0xedf1();return _0x3192=function(_0x31926d,_0x516d72){_0x31926d=_0x31926d-0x172;var _0x3c2885=_0xedf126[_0x31926d];return _0x3c2885;},_0x3192(_0x13e838,_0x99fb29);}function _0xedf1(){var _0x4b60f7=['41199130JGkDbO','〔\x20SHIRAORI\x20Broadcast\x20〕\x0a\x0a','44NqqqTk','test','10165659infVzH','4164042lcZUJM','11223369KQWUdf','12748296XglPKk','246354paoGDX','1jrFths','5pEJhgc','1130044zpcMed','catch'];_0xedf1=function(){return _0x4b60f7;};return _0xedf1();}(function(_0x2174cf,_0x35657c){var _0x4198c0=_0x3192,_0x1fa409=_0x2174cf();while(!![]){try{var _0xf98e21=parseInt(_0x4198c0(0x17d))/0x1*(-parseInt(_0x4198c0(0x172))/0x2)+-parseInt(_0x4198c0(0x17c))/0x3*(-parseInt(_0x4198c0(0x176))/0x4)+-parseInt(_0x4198c0(0x17e))/0x5*(-parseInt(_0x4198c0(0x179))/0x6)+-parseInt(_0x4198c0(0x178))/0x7+-parseInt(_0x4198c0(0x17b))/0x8+-parseInt(_0x4198c0(0x17a))/0x9+parseInt(_0x4198c0(0x174))/0xa;if(_0xf98e21===_0x35657c)break;else _0x1fa409['push'](_0x1fa409['shift']());}catch(_0x5efcf1){_0x1fa409['push'](_0x1fa409['shift']());}}}(_0xedf1,0xd1cf5),await conn['copyNForward'](id,conn['cMod'](m['chat'],cc,/bc|broadcast/i[_0x4c5008(0x177)](teks)?teks:_0x4c5008(0x175)+teks+'\x0a'+readMore+randomID(0x20)),!![])[_0x4c5008(0x173)](_0x3fd123=>_0x3fd123));
  }
  m.reply('_*Broadcast Selesai*_')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i
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
