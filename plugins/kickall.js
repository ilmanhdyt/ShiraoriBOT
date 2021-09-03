if (!isGroupMsg) return client.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return client.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return client.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMem = await client.getGroupMembers(groupId)
            for (let i = 0; i < allMem.length; i++) {
                if (groupAdmins.includes(allMem[i].id)) {
                    console.log('Upss this is Admin group')
                } else {
                    await client.removeParticipant(groupId, allMem[i].id)
                }
            }
            client.reply(from, 'Succes kick all member', id)
            break
}
handler.help = ['kickall']
handler.tags = ['group']
handler.command = /^(kickall)$/i

handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.rowner = true
handler.private = false

handler.admin = true
handlet.botAdmin = true

handler.fail = null

module.exports = handler
