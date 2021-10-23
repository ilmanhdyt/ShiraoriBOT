let handler = m => m
handler.before = async function (m) {
  this.suit ? this.suit : {}
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
  let room Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
  if (room) {
    let win = ''
    let tie = false
    if (m.sender) == room.p2 && /^(acc(ept)?|terima|gas|ok|oke?|tolak|gamau|nanti|ga(k.)?bisa)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      this
    }
    
  }
}
