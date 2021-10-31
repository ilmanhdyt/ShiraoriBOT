let handler = async (m, { conn, args }) => {
  conn.job = conn.job ? conn.job : {}

  var ket = "\n\nKetik *.sewa @user* untuk menggunakan jasa"

  if (!args[0] || !args[1]){
    return conn.reply(m.chat,`*.job maling 100000*

Pekerjaan :
  - pijat
  - lonte
  - sepong
  - maling`,m)
  }else {
    if (parseInt(args[1]) < 100000 || parseInt(args[1]) > 100000000){
      return conn.reply(m.chat,'Harga jasa minimal Rp. 100.000,- dan maksimal Rp. 100.000.000,-',m)
    }
    args[0] = args[0].toLowerCase()
    if (args[0] === "lonte"){
      conn.job[m.sender] = {'job' : args[0], 'price' : parseInt(args[1])}
      conn.reply(m.chat,`*❏ JASA LONTE*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai lonte dengan biaya ${args[1].toLocaleString()},-${ket}`,m, {contextInfo: {
        mentionedJid: [m.sender]
      }})
    }else if (args[0] === "pijat"){
      conn.job[m.sender] = {'job' : args[0], 'price' : parseInt(args[1])}
      conn.reply(m.chat,`*❏ JASA PIJAT*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang pijat dengan biaya ${args[1].toLocaleString()},-${ket}`,m, {contextInfo: {
        mentionedJid: [m.sender]
      }})
    }else if (args[0] === "sepong"){
      conn.job[m.sender] = {'job' : args[0], 'price' : parseInt(args[1])}
      conn.reply(m.chat,`*❏ JASA SEPONG*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang sepong dengan biaya ${args[1].toLocaleString()},-${ket}`,m, {contextInfo: {
        mentionedJid: [m.sender]
      }})
    }else if (args[0] === "maling"){
      // return m.reply(`*Fitur job maling dinonaktifkan sementara.*`)
      conn.job[m.sender] = {'job' : args[0], 'price' : parseInt(args[1])}
      conn.reply(m.chat,`*❏ JASA MALING*\n\n@${m.sender.split('@')[0]} menawarkan diri sebagai tukang maling dengan biaya ${args[1].toLocaleString()},-${ket}`,m, {contextInfo: {
        mentionedJid: [m.sender]
      }})
    }else {
      conn.reply(m.chat,'Jenis pekerjaan yang tersedia adalah maling, lonte, sepong, pijat',m)
    }
  }

}
handler.help = ['job','jasa'].map(v => v + ' *service price*')
handler.tags = ['fun','game']
handler.command = /^job|jasa$/i
handler.group = true
handler.limit = true
module.exports = handler