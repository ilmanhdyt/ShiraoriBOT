let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
  conn.mancing = conn.mancing ? conn.mancing : {}

  const delay = time => new Promise(res=>setTimeout(res,time));
  
  if (typeof conn.mancing[m.sender] != "undefined" && conn.mancing[m.sender] == true) return m.reply(`*Tidak bisa memancing lagi karena anda sedang menunggu tangkapan ikan*`)

  conn.mancing[m.sender] = true

  let wait = getRandom(1,5)
  let minute = wait * 1000 * 60
  m.reply("*Sedang memancing selama " + wait + " menit*\n\n*Silahkan menunggu*")
  await delay(minute)

  let ikan = ['🐠','🐟','🐡','🐬','🐳','🐋','🦈','🦀','🐊']
  var randIkan = ikan[Math.floor(Math.random() * ikan.length)]
  randIkan2 = randIkan
  
  setTimeout(() => {
    if (randIkan2 == "🐠"){
      var jumlahIkan = getRandom(1,25)
      var hargaIkan = 10000
      var namaIkan = "Ikan Biru"
    }else if (randIkan2 == "🐟"){
      var jumlahIkan = getRandom(1,13)
      var hargaIkan = 20000
      var namaIkan = "Mujair"
    }else if (randIkan2 == "🐡"){
      var jumlahIkan = getRandom(1,7)
      var hargaIkan = 40000
      var namaIkan = "Ikan Buntal"
    }else if (randIkan2 == "🐬"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Lumba Lumba"
    }else if (randIkan2 == "🐳"){		// < 5jt
      var jumlahIkan = getRandom(1,4)
      var hargaIkan = 70000
      var namaIkan = "Ikan Paus"
    }else if (randIkan2 == '🐋'){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Ikan Paus Biru"
    }else if (randIkan2 == "🦈"){
      var jumlahIkan = getRandom(1,5)
      var hargaIkan = 50000
      var namaIkan = "Ikan Hiu"
    }else if (randIkan2 == "🐊"){
      var jumlahIkan = getRandom(1,3)
      var hargaIkan = 100000
      var namaIkan = "Buaya"
    }else if (randIkan2 == "🦀"){
      var jumlahIkan = getRandom(1,17)
      var hargaIkan = 15000
      var namaIkan = "Kepiting"
    }
    
    global.db.data.users[m.sender].money += hargaIkan * jumlahIkan
    conn.updatePresence(m.chat, Presence.composing)

    tampilanIkan = ""
    for (i=0;i<jumlahIkan;i++){
      tampilanIkan += randIkan + " "
    }

    conn.reply(m.chat, `*❏ MANCING MANIA*\n\nTangkapan : ${tampilanIkan}\nSelamat anda berhasil menangkap *${jumlahIkan} ekor ${namaIkan}* dengan penjualan *Rp. ${Number(hargaIkan*jumlahIkan).toLocaleString()}*`, m)
    delete conn.mancing[m.sender]
  }, 1000)
}
handler.help = ['mancing']
handler.tags = ['rpg']
handler.command = /^(mancing)$/i
handler.limit = true
handler.group = true
handler.register = true
handler.exp = 0
module.exports = handler

function getRandom(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}

function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
        seconds = Math.floor((duration / 1000) % 60),
        minutes = Math.floor((duration / (1000 * 60)) % 60),
        hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

    return minutes + " menit " + seconds + " detik"
}

