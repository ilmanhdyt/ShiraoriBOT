let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Telkomsel [081351047727]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [081351047727]
└────
 saweria.co/manilman
 donasi tuh buat 
memperpanjang masa *server* *(rdp)*
sama *api key*
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
