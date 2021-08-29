let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'uhm.. url nya mana?'
  global.API('xteam', '/dl/', {
    url: args[0]
  }, 'FuzBot1')
  conn.sendFile(m.chat, undefined, '', '© Shiraori', m)
}
handler.help = ['snackvideo'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^\snackvideo/i
handler.limit = true

module.exports = handler
