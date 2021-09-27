let handler = async (m, { conn, text, participants }) => {
  conn.job = conn.job ? conn.job : {}
  
  function getRandom(min,max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random()*(max-min+1)) + min
  }

  user = text.split('@')[1] + "@s.whatsapp.net"

  if (typeof global.DATABASE.data.users[user] == 'undefined') return m.reply(`*Orang yang anda tag tidak terdaftar di bot.*`)

  if (!text){
    return conn.reply(m.chat,'*Tag nama orang yang ingin anda sewa jasanya.*',m)
  }else if(typeof conn.job[user] == "undefined"){
    return conn.reply(m.chat,'*Orang yang anda tag tidak menawarkan jasa apapun.*',m)
  }else {
    if (m.sender == user){
      return conn.reply(m.chat,'*Tidak bisa menyewa diri sendiri*',m)
    }else if (global.DATABASE.data.users[m.sender].money < conn.job[user].price){
      return conn.reply(m.chat,`Uang anda miliki tidak cukup untuk membeli jasa dari @${user.split('@')[0]}\n\nSaldo anda : Rp. ${global.DATABASE.data.users[m.sender].money.toLocaleString()},-\nHarga jasa : Rp. ${conn.job[user].price.toLocaleString()},-`,m,{contextInfo: {
        mentionedJid: [user]
      }})
    }else {
      if (conn.job[user].job === "x"){
        return conn.reply(m.chat,'*Orang yang anda tag tidak menawarkan jasa apapun.*',m)  
      }else if (conn.job[user].job === "lonte"){
        global.DATABASE.data.users[m.sender].money -= conn.job[user].price
        conn.job[user].money += conn.job[user].price
        conn.reply(m.chat,`*❏ JASA LONTE*\n\n@${m.sender.split('@')[0]} : "Aku masukin ya sayang ahhh"\n@${user.split('@')[0]} : "Aduuh pelan pelan dong, enaaak"\n@${m.sender.split('@')[0]} : "Aaaah aaaahhh, croooot"\n\nBiaya sewa : Rp. ${conn.job[user].price.toLocaleString()}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        delete conn.job[user]
      }else if (conn.job[user].job === "pijat"){
        global.DATABASE.data.users[m.sender].money -= conn.job[user].price
        conn.job[user].money += conn.job[user].price
        conn.reply(m.chat,`*❏ JASA PIJAT*\n\n@${m.sender.split('@')[0]} : "Bagian sininya pijat yang enak ya bangsat"\n@${user.split('@')[0]} : "Iya suhu, sabar, ini lagi di pijat, huft"\n@${m.sender.split('@')[0]} : "Aaaah aaaahhh jangan ke alat vital dooong"\n\nBiaya sewa : Rp. ${conn.job[user].price.toLocaleString()}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        delete conn.job[user]
      }else if (conn.job[user].job === "sepong"){
        global.DATABASE.data.users[m.sender].money -= conn.job[user].price
        conn.job[user].money += conn.job[user].price
        conn.reply(m.chat,`*❏ JASA SEPONG*\n\n@${m.sender.split('@')[0]} : "Ayok aku buka dulu celananya"\n@${user.split('@')[0]} : "Waduh gede kali om, mmppsss"\n@${m.sender.split('@')[0]} : "Croooot, telen ayo telen"\n\nBiaya sewa : Rp. ${conn.job[user].price.toLocaleString()}`,m,{contextInfo: {
          mentionedJid: [m.sender,user]
        }})
        delete conn.job[user]
      }else if (conn.job[user].job === "maling"){
        let users = participants.map(u => u.jid)
        var tag
		    tag = users[Math.floor(users.length * Math.random())]
        let x = 0
        while(typeof global.DATABASE.data.users[tag] == "undefined" || global.DATABASE.data.users[tag].limit == 0 || global.DATABASE.data.users[tag].premium) {
          tag = users[Math.floor(users.length * Math.random())]
          x += 1
          if (x == 100) return m.reply("*Gagal mendapatkan limit karena si maling terlalu tolol.*")
        }

        let pertarungan = []
        for (i=0;i<conn.level(conn.job[user].xp)[0];i++) pertarungan.push(user)
        for (i=0;i<conn.level(global.DATABASE.data.users[tag].xp)[0];i++) pertarungan.push(tag)
        let pointMaling = 0
        let pointKorban = 0
        for (i=0;i<10;i++){
          if (pertarungan[getRandom(0,pertarungan.length-1)] == user) pointMaling += 1
          else pointKorban += 1
        }

        // kalah level
        if (pointKorban >= pointMaling) {
          delete conn.job[user]
          return conn.reply(m.chat,`*@${user.split('@')[0]} gagal mencuri limit @${tag.split('@')[0]} karena dihajar saat berusaha mencuri.*\n\n*Note : keberhasilan mencuri tergantung dari level pencuri dan korban*`, m, {contextInfo : {mentionedJid : [tag,user]}})
        }
        
        limitMax = getRandom(1,Math.floor(conn.job[user].price/100000)*2)
        if (global.DATABASE.data.users[tag].limit < limitMax){
          limitMax = global.DATABASE.data.users[tag].limit
        }

        global.DATABASE.data.users[tag].limit -= limitMax
        global.DATABASE.data.users[m.sender].limit += limitMax
        global.DATABASE.data.users[m.sender].money -= conn.job[user].price
        conn.job[user].money += conn.job[user].price
        conn.reply(m.chat,`*❏ JASA MALING*\n\n@${user.split('@')[0]} : "Woy bangsat sini gw maling limit lu !"\n@${tag.split('@')[0]} : "Ampuuuun ndan, hiks hiks"\n\n_5 Menit kemudian_\n\n@${user.split('@')[0]} : "Ni bos hasil maling limitnya si @${tag.split('@')[0]} cuma dapet ${limitMax} limit"\n@${m.sender.split('@')[0]} : "Oke siap njing"\n\nBiaya sewa : Rp. ${conn.job[user].price.toLocaleString()}`,m,{contextInfo: {
          mentionedJid: [m.sender,user,tag]
        }})
        delete conn.job[user]
      }
    }
  }

}
handler.help = ['sewa *@tag*']
handler.tags = ['fun','game']
handler.command = /^sewa$/i
handler.admin = false
handler.group = true
handler.botAdmin = false
handler.limit = true
module.exports = handler
