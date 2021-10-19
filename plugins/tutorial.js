let handler  = async (m, { conn, usedPrefix }) => {
  conn.reply(m.chat, `
╭─「 *Tutorial Main SHIRAORI BOT* 」
│ 
│〘 Tutorial EPIC RPG 〙
│• *${usedPrefix}collect*
│   Staterpack yang bisa di klaim 
│   12 jam sekali
│• *${usedPrefix}mulung*
│• *${usedPrefix}adventure*
│• *${usedPrefix}petualang*
│   Untuk mencari resource seperti 
│   Money, Exp, dll..,dibutuhkan  
│   minimal 80 nyawa untuk bisa 
│   melakukannya dan, kamu tidak 
│   dapat spam karena ada delay 5 
│   menit
│• *${usedPrefix}use potion <jumlah>*
│   Untuk memakai potion/untuk 
│   mengisi nyawa/health
│• *${usedPrefix}shop buy potion <jumlah>*
│   Untuk membeli potion dan ketik 
│   *${usedPrefix}use potion <jumlah>*
│   untuk menggunakan potion
│• *${usedPrefix}shop <args>*
│   Untuk membeli atau menjual sesuatu
│• *${usedPrefix}shop buy <crate> <jumlah>*
│   Untuk membeli Crate
│• *${usedPrefix}profile*
│• *${usedPrefix}pp*
│• *${usedPrefix}profil*
│   untuk mengetahui No whatsapmu, dll
│• *${usedPrefix}inv*
│• *${usedPrefix}inventory*
│• *${usedPrefix}bal*
│   Untuk mengecek nyawa, money, dll.
│• *${usedPrefix}judi <jumlah>*
│   *_Jangan judi, Karena gk bakal_*
│   *_balik modal.BENERAN GK BOHONG_*
│  
│*©Shiraori Bot 2020-2021*
╰─「 *Tutorial Main SHIRAORI BOT* 」
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['rpg']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
