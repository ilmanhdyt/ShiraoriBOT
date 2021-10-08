let fetch = require("node-fetch");
let handler = async (m, { conn }) => {
  if (!db.data.settings.nsfw) throw "Mode NSFW tidak aktif";
  let res = await fetch(global.API("https://api.waifu.pics/", "/nsfw/neko"));
  if (!res.ok) throw await `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.url)
    conn.sendFile(
      m.chat,
      json.url,
      "bokepkartun",
      "sange kok sama kucing, stress...",
      m
    );
  else throw json;
};
handler.help = ["nsfwneko", "nekonsfw"];
handler.tags = ["nsfw"];

handler.command = /^(nsfwneko|nekonsfw)$/i;

handler.limit = true;

module.exports = handler;
