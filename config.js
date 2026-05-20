let fs = require('fs')
global.owner  = ['6285871074034', '6285871074034'] // letakkan nomor kalian disini
global.mods  = JSON.parse(fs.readFileSync('./src/moderator.json')) // orang terpercaya?
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = {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
  nama: 'https://platform.openai.com/account/api-keys'
  bx: 'https://bx-hunter.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  xteam: 'https://api.xteam.xyz',
  lolhum: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://zekais-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
}
  'global.APIKeys = {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
  'https://api.lolhuman.xyz/auth/profile': 'b9b2b445c8f7c766c96811ce'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://melcanz.com': 'lugay',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'memeki',
  'https://api.lolhuman.xyz': 'windaj',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zekai-api.herokuapp.com': 'komtolofon',
  'https://api.zeks.xyz': 'apivinz',
}

// Sticker WM
global.packname = 'DITZZZBOTZ'
global.author = 'ilman'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = '_*tunggu..*_'
global.eror = '*_Server Eror_*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.tle = 'https://telegra.ph/file/ecb8f7d2c12d075fc4729.jpg',

global.multiplier = 69 // Semakin tinggi, semakin sulit naik level

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
