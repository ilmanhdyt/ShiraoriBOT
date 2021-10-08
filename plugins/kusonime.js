let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_yg dicari apa_'
    await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const ardi =  `*judul:* "${json.title}"\n\n*info:* ${json.info}\n\n*sinopsis:* ${json.sinopsis}\n\n*link download:* ${json.link_dl}`
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `  
  await (await fetch(thumb)).buffer(), '© stikerin', 'AUDIO', ``, 'V', ``)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.group = false

module.exports = handler
