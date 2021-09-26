function handler(m) {
  const json = JSON.parse(fs.readFileSync('./src/moderator.json'))
}
handler.help = ['mods', 'moderator']
handler.tags = ['info']

handler.command = /^(mods|moderator)$/i

module.exports = handler
