let handler = async (m, { conn }) => {
    conn.tebakangka = conn.tebakangka ? conn.tebakangka : {}
    let id = m.chat
    if (!(id in conn.tebakangka)) throw false
    let json = conn.tebakangka[id][1]
    conn.reply(m.chat, '```' + json.answer.replace(/[1234567890]/g, '_') + '```\nBalas gambarnya, bukan pesan ini', conn.tebakangka[id][0])
}
handler.command = /^tean$/i
handler.limit = true
module.exports = handler
