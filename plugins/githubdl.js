let handler = async (m, { args, usedPrefix, command }) => {

if (!args[0]) throw 'usernamenya mana om'
if (!args[1]) throw 'repo nya mana?'

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`
//ByRizkyAdi
m.reply(`sedang mengungkapkan file ke zip`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
handler.help = ['githubdl']
handler.tags = ['downloader']
handler.command = /githubdl/i

handler.limit = 5

module.exports = handler
