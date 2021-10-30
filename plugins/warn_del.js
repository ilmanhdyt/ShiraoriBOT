let handler = async (m, { conn, args, groupMetadata }) => {
  if (args.length > 0) {
    const time = async (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : false
    let warning = global.db.data.users[mention].warning
    if (warning > 0) {
      global.db.data.users[mention].warning -= 1
      m.reply('⚠️ *WARNING -1*')
      m.reply(`Admin mengurangi warn kamu, warn kamu sekarang ${warning - 1}`, mention)
    } else if (warning == 0) {
      m.reply('User tidak memiliki warn')
    }
  } else conn.reply(m.chat, 'Tag target', m)
}

handler.help = ['Delwarn @user']
handler.tags = ['group']
handler.command = /^delwarn$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = false
handler.admin = true
handler.botAdmin = false

module.exports = handler
