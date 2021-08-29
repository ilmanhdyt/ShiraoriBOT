if (!isGroupMsg) return Shiraori.reply(from, 'Perintah ini hanya bisa di gunakan dalam group!', id)
            const isGroupOwner = sender.id === chat.groupMetadata.owner
            if (!isGroupOwner) return Shiraori.reply(from, 'Perintah ini hanya bisa di gunakan oleh Owner group', id)
            if (!isBotGroupAdmins) return Shiraori.reply(from, 'Perintah ini hanya bisa di gunakan ketika bot menjadi admin', id)
            const allMek = await Shiraori.getGroupMembers(groupId)
            for (let i = 0; i < allMek.length; i++) {
                if ((adminNumber, ownerNumber).includes(allMek[i].id)) {
                    console.log('Oops ini khusus admin group')
                } else {
                    await Shiraori.removeParticipant(groupId, allMek[i].id)
                }
            }
            Shiraori.reply(from, 'Success kick all member', id)
            break
}
handler.help = ['kickall']
handler.tags = ['admin']
handler.command = /^(kickall)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.limit = true

module.exports = handler


