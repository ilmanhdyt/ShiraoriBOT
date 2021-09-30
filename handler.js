let util = require('util')
let simple = require('./lib/simple')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      m.money = 0
      m.limit = false
      try {
        let user
        if (user = global.DATABASE._data.users[m.sender]) {
          if (!isNumber(user.money)) user.money = 0
          if (!isNumber(user.limit)) user.limit = 10
          if (!isNumber(user.xp)) user.xp = 0
          if (!isNumber(user.lastclaim)) user.lastclaim = 0
          if (!isNumber(user.lastseen)) user.lastseen = 0
          if (!isNumber(user.usebot)) user.usebot = 0
          if (!isNumber(user.warning)) user.warning = 0
          if (!isNumber(user.spam)) user.spam = 0
          if (!isNumber(user.premiumDate)) user.premiumDate = 0
          if (!isNumber(user.afk)) user.afk = -1
          if (!'afkReason' in user) user.afkReason = ''
          if (!'pasangan' in user) user.pasangan = ''
          if (!'banned' in user) user.banned = false
          if (!'premium' in user) user.premium = false
          if (!'whitelist' in user) user.whitelist = false
        } else global.DATABASE._data.users[m.sender] = {
          money: 0,
          limit: 10,
          xp: 0,
          lastclaim: 0,
          lastseen: 0,
          usebot: 0,
          warning: 0,
          spam: 0,
          afk: -1,
          premium: false,
          premiumDate: 0,
          afkReason: '',
          pasangan: '',
          whitelist: false,
          banned: false
        }

        let chat
        if (chat = global.DATABASE._data.chats[m.chat]) {
          if (!'banned' in chat) chat.banned = false
          if (!'welcome' in chat) chat.welcome = true
          if (!'left' in chat) chat.left = true
          if (!'sWelcome' in chat) chat.sWelcome = ''
          if (!'sBye' in chat) chat.sBye = ''
          if (!'delete' in chat) chat.delete = false
          if (!'adminMode' in chat) chat.adminMode = false
          if (!'antiLink' in chat) chat.antiLink = false
          if (!'antiVirtex' in chat) chat.antiVirtex = false
          if (!'antiBadword' in chat) chat.antiBadword = false
          if (!'antiSpam' in chat) chat.antiSpam = false
          if (!'antiDelete' in chat) chat.antiDelete = false
          if (!isNumber(chat.lastseen)) chat.lastseen = 0
          if (!isNumber(chat.expired)) chat.expired = 0
          if (!isNumber(chat.command)) chat.command = 0
        } else global.DATABASE._data.chats[m.chat] = {
          banned: false,
          welcome: false,
          left: false,
          sWelcome: '',
          sBye: '',
          delete: true,
          adminMode: false,
          antiLink: false,
          antiVirtex: false,
          antiBadword: false,
          antiSpam: false,
          antiDelete: false,
          lastseen: 0,
          expired: 0,
          command: 0
        }
      } catch (e) {
        console.log(e, global.DATABASE.data)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (typeof m.text !== 'string') m.text = ''
      if (m.isBaileys) return
      m.money += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.DATABASE.data && global.DATABASE.data.users && global.DATABASE.data.users[m.sender]
      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {}
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
      let isAdmin = user.isAdmin || user.isSuperAdmin || false
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false
      let adminMode = global.DATABASE.data.chats[m.chat].adminMode
      let whitelist = global.DATABASE._data.users[m.sender].whitelist
      let isPrems = global.DATABASE._data.users[m.sender].premium
      let isBanned = global.DATABASE.data.users[m.sender].banned
      let antiLink = global.DATABASE.data.chats[m.chat].antiLink
      let antiVirtex = global.DATABASE.data.chats[m.chat].antiVirtex
      let antiSpam = global.DATABASE.data.chats[m.chat].antiSpam
      let antiBadword = global.DATABASE.data.chats[m.chat].antiBadword
      let maintenance = global.DATABASE.data.maintenance
      let autoRead = global.DATABASE.data.autoRead

    if (autoRead) await conn.chatRead(m.chat)
    conn.withoutContact = global.DATABASE.data.withoutContact
    if (isBanned) return

    // partisipasi
    global.DATABASE.data.chats[m.chat].lastseen = new Date() * 1
    if (!isBanned) {
      global.DATABASE.data.users[m.sender].money += 1000
      global.DATABASE.data.users[m.sender].lastseen = new Date() * 1
      if (m.text.slice(0, 1) == hl) {
        global.DATABASE.data.users[m.sender].usebot = new Date() * 1
      }
    }

    if (maintenance && !isOwner && m.text.slice(0, 1) == hl) return
    if (adminMode && !isOwner && m.isGroup && !isAdmin && m.text.slice(0, 1) == hl) return

    // ANTI-SPAM COMMAND
    if (m.text.slice(0, 1) == hl) {
      global.DATABASE.data.chats[m.chat].command += 1
    }
    let cmd = global.DATABASE.data.chats[m.chat].command
    if (cmd >= 1) setTimeout(() => {
      global.DATABASE.data.chats[m.chat].command = 0
    }, 5500)
    if (cmd <= 1) {
      if (!isOwner && opts['self']) return
    } else {
      if (!isOwner && !opts['self']) return
    }

      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before == 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          isBanned,
          antiLink,
          antiVirtex,
          antiSpam,
          antiBadword
        })) continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.DATABASE.data.chats || m.sender in global.DATABASE.data.users) {
            let chat = global.DATABASE.data.chats[m.chat]
            if (name != 'on.js' && chat.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          // if (plugin.register == true && _user.registered == false) { // Butuh daftar?
          //   fail('unreg', m, this)
          //   continue
          // }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.money) : 17 // XP Earning per command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.money += xp
          if (!isPrems && plugin.limit && global.DATABASE._data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `*❏ LIMIT HABIS*

Cara mendapatkan limit :

1. Beli limit ( *.buy _total_* )
2. Daily claim ( *.claim* )
3. Mengemis limit/saldo kepada user sultan ( *.rank* )`, m)
            continue // Limit habis
          }
          try {
            await plugin.call(this, m, {
              match,
              usedPrefix,
              noPrefix,
              _args,
              args,
              command,
              text,
              conn: this,
              participants,
              groupMetadata,
              user,
              bot,
              isROwner,
              isOwner,
              isAdmin,
              isBotAdmin,
              isPrems,
              chatUpdate,
              whitelist,
              maintenance
            })
            m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user)) 
            // if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.DATABASE._data.users[m.sender])
      let user, stats = global.DATABASE._data.stats
      if (m) {
        if (m.sender && (user = global.DATABASE._data.users[m.sender])) {
          // user.money += m.money
          // user.limit -= m.limit * 1

          var limitAsli
          if (global.DATABASE.data.users[m.sender].limit > 10000000000050) {
            limitAsli = 10000000000000
          } else if (global.DATABASE.data.users[m.sender].limit > 1000000000050) {
            limitAsli = 1000000000000
          } else if (global.DATABASE.data.users[m.sender].limit > 100000000050) {
            limitAsli = 100000000000
          } else if (global.DATABASE.data.users[m.sender].limit > 10000000050) {
            limitAsli = 10000000000
          } else if (global.DATABASE.data.users[m.sender].limit > 1000000050) {
            limitAsli = 1000000000
          } else if (global.DATABASE.data.users[m.sender].limit > 100000050) {
            limitAsli = 100000000
          } else if (global.DATABASE.data.users[m.sender].limit > 10000050) {
            limitAsli = 10000000
          } else if (global.DATABASE.data.users[m.sender].limit > 1000050) {
            limitAsli = 1000000
          } else if (global.DATABASE.data.users[m.sender].limit > 100050) {
            limitAsli = 100000
          } else if (global.DATABASE.data.users[m.sender].limit > 10050) {
            limitAsli = 10000
          } else if (global.DATABASE.data.users[m.sender].limit > 1050) {
            limitAsli = 1000
          } else if (global.DATABASE.data.users[m.sender].limit > 150) {
            limitAsli = 100
          } else if (global.DATABASE.data.users[m.sender].limit > 50) {
            limitAsli = 10
          } else if (global.DATABASE.data.users[m.sender].limit > 20) {
            limitAsli = 5
          } else if (global.DATABASE.data.users[m.sender].limit > 1) {
            limitAsli = 2
          } else(
            limitAsli = 1
          )

          levelAwal = conn.level(user.xp)[0]
          if (user.premium) {
            user.limit -= m.limit * 1
            user.xp += m.limit * 2
          } else if (user.limit > 100 || user.money > 500000000) {
            user.limit -= m.limit * limitAsli
            user.xp += m.limit * 1
          } else {
            user.limit -= m.limit * 1
            user.xp += m.limit * 1
          }
          // nambah level

          levelAkhir = conn.level(user.xp)[0]
          if (levelAwal != levelAkhir) {
            conn.reply(m.chat, `*❏ LEVEL UP*\n\n@${m.sender.split('@')[0]}\n*[ ${levelAwal} ] 👉 [ ${levelAkhir} ]*`, m, {
              contextInfo: {
                mentionedJid: [m.sender]
              }
            })
          }
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.DATABASE._data.chats[jid]
    let text = ''
    switch (action) {
      case 'add':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            let pp = './src/avatar_contact.png'
            try {
              pp = await this.getProfilePicture(user)
            } catch (e) {
            } finally {
              text = (chat.sWelcome || this.welcome || conn.welcome || 'Welcome, @user!').replace('@group', this.getName(jid)).replace('@user', '@' + user.split('@')[0]).replace('@desc', groupMetadata.desc)
              this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
                contextInfo: {
                  mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'remove':
        // if (chat.left) {
        //   for (let user of participants) {
        //     let pp = './src/avatar_contact.png'
        //     try {
        //       pp = await this.getProfilePicture(user)
        //     } catch (e) {
        //     } finally {
        //       text = (chat.sBye || this.bye || conn.bye || 'Bye, @user!').replace('@user', '@' + user.split('@')[0]).replace('@group', this.getName(jid))
        //       this.sendFile(jid, pp, 'pp.jpg', text, null, false, {
        //         contextInfo: {
        //           mentionedJid: [user]
        //         }
        //       })
        //     }
        //   }
        // }
        break
      case 'promote':
        text = conn.spromote
      case 'demote':
        if (!text) text = conn.sdemote
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        this.sendMessage(jid, text, MessageType.extendedText, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.DATABASE.data.chats[m.key.remoteJid]
    if (!chat.antiDelete) return
    await this.reply(m.key.remoteJid, `
*Terdeteksi @${m.participant.split`@`[0]} telah menghapus pesan*
`.trim(), m.message, {
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  },
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.DATABASE.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    if (global.DATABASE.data.antiCall){
      await this.reply(from, '*DILARANG TELP BANGSAT !*\n*BANNED THANKS*', null, { contextInfo: { mentionedJid: ['6283128734012@s.whatsapp.net'] } })
      await this.blockUser(from, 'add')
      user.banned = true
    }
  }
}

global.dfail = (type, m, conn) => {
  let msg = {
    rowner: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk owner.',
    owner: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk owner.',
    mods: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk owner.',
    premium: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk user premium.\nHubungi owner ( *.owner* ) untuk upgrade premium',
    group: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk di dalam grup.',
    private: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk di chat pribadi bot.',
    admin: '*❏ AKSES DITOLAK*\n\nFitur ini khusus untuk admin.',
    botAdmin: '*❏ AKSES DITOLAK*\n\nJadikan bot sebagai admin terlebih dahulu.'
  }[type]
  if (msg) return m.reply(msg)
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
