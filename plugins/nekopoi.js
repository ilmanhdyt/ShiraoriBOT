let { getVideo } = require('../lib/nekopoi')
let handler = async (m, { text }) => {
 if (!text) throw 'Tidak Ada Url'
 let { title, links } = await getVideo(text)
 if (links.length == 0) throw 'Video Tidak Ditemukan!'
 teksnya = `*[NEKOPOI DOWNLOADER]*\n\nTitle : ${title}\n\n${links.join('\n')}`
 m.reply(teksnya.trim())
}
handler.help = ['nekopoi'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.limit = true
handler.nsfw = true
handler.register = true
handler.command = /^nekopoi$/i

module.exports = handler
