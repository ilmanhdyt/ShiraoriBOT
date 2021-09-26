function handler(m) {
  this.sendContact(m.chat, './src/moderator.json', this.getName('[]@s.whatsapp.net'), m)
}
handler.help = ['mods', 'moderator']
handler.tags = ['info']

handler.command = /^(mods|moderator)$/i

module.exports = handler
