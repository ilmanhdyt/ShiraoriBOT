let handler = async (m, { conn, participants, groupMetadata, text }) => {
  
  const getGroupAdmins = (participants) => {
    admins = []
    for (let i of participants) {
      i.isAdmin ? admins.push(i.jid) : ''
    }
    return admins
  }
  
  let pp = './src/logo_admin.jpg'
  try {
      pp = await conn.getProfilePicture(m.chat)
  } catch (e) {
  } finally {
    const groupAdmins = getGroupAdmins(participants)
    let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split`@`[0]}`).join('\n')
*Admin Grup*
${listAdmin}

let mentionedJid = groupAdmins.contact([`${m.chat.split`-`[0]}@s.whatsapp.net`])
conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', caption, m, 0, { contextInfo: { mentionedJid } })
  }
}
handler.help = ['admingrup', 'admingc']
handler.tags = ['group']
handler.command = /^(admingroup|admingc)$/i