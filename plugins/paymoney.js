let pajak = 0.02
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let fail = `perintah ini buat ngasih Uang ke pengguna lain\n\ncontoh:\n${usedPrefix + command} @6281351047727 10\natau balas pesan doi dengan perintah: ${usedPrefix + command} 10`
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.chat
    if (!who) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
        throw false
    }
    if (typeof global.db.data.users[who] == "undefined") {
        global.db.data.users[who] = {
            exp: 0,
            limit: 10,
            lastclaim: 0,
            registered: false,
            name: conn.getName(m.sender),
            age: -1,
            regTime: -1,
            afk: -1,
            afkReason: '',
            banned: false,
            level: 0,
            call: 0,
            role: 'Warrior V',
            autolevelup: false,
            pc: 0,
        }
    }
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) {
        conn.reply(m.chat, fail, m, { contextInfo: { mentionedJid: ['6285157336614@s.whatsapp.net'] } })
        throw false
    }
    if (isNaN(txt)) throw 'Hanya angka'
    let poin = parseInt(txt)
    let money = poin
    let pjk = Math.ceil(poin * pajak)
    limit += pjk
    if (money < 1) throw 'minimal 1'
    let users = global.db.data.users
    if (money > users[m.sender].money) throw 'Uang tidak mencukupi untuk mentransfer, ada pajaknya juga'
    users[m.sender].money -= money
    users[who].money += poin

    m.reply(`(${-poin} Money) + (${-pjk} Money (Pajak 2%)) = ( ${-Money} Money)`)
    conn.fakeReply(m.chat, `+${poin} Limit`, who, m.text)
}
handler.help = ['paymoney @user <jumlah>']
handler.tags = ['rpg']
handler.command = /^(paymoney)?$/

module.exports = handler
