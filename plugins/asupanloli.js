let fetch = require("node-fetch");
let arr = [];
fetch("https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt")
  .then((res) => res.text())
  .then((txt) => (arr = txt.split("\n")));
let handler = async (m, { conn }) => {
  let loli = arr[Math.floor(Math.random() * arr.length)];
  if (!loli) throw false;
  await conn.sendFile(m.chat, loli, loli, ":<", m, 0);
};
handler.command = /^(asupanloli)$/i
handler.help = ["asupanloli"];
handler.tags = ["anime"];

handler.limit = true;
module.exports = handler;
