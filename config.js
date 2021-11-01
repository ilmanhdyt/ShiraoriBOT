let fs = require('fs')
global.owner  = ['6281351047727', '38094268992'] // letakkan nomor kalian disini
global.mods  = JSON.parse(fs.readFileSync('./src/moderator.json'))
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // nama: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
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
global.APIKeys = { // APIKey nya disini
  // 'https://website': 'apikey'
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://pencarikode.xyz': 'pais',
  'https://api.xteam.xyz': 'c81b3345e477a0c7',
  'https://api.lolhuman.xyz': '3af90a5d6317457b1f93e921',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://zekai-api.herokuapp.com': 'tzjHtUpG',
  'https://api.zeks.xyz': 'dkADrYwdlb2mmZXerMq72mbD',
}

// Sticker WM
global.packname = 'SHIRAORI️ BOT'
global.author = 'ilman'

global.wait = '_*tunggu..*_'
global.eror = '*_Server Eror_*'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
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
