function handler(m) {
  this.sendContact(m.chat, '62895803135347', this.getName('62895803135347@s.whatsapp.net'), m)
}
handler.help = ['mods', 'moderator']
handler.tags = ['info']

handler.command = /^(mods|moderator)$/i

module.exports = handler
