let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('broadcast') && db.data.settings[this.user.jid].sw) {
        console.log(m)
        let to = '6281351047727-1625042431@g.us'
        this.reply(to, `@${m.sender.split`@`[0]} membuat sw`, 0)
        this.copyNForward(to, m).catch(e => console.log(e, m))
    }
}

module.exports = handler
