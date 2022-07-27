const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')

let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])

let { MessageType } = require('@adiwajshing/baileys')
let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
} catch (e) {
} finally {
let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.db.data.users[m.sender]
let { min, xp, max } = levelling.xpRange(level, global.multiplier)
let username = conn.getName(who)
let menu = 

╭══〘 ✯✯✯✯✯✯✯✯ 〙═╮
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
║➤ *✨𝗛ola, ${username} ${name} !!* _ESPERO QUE TENGAS UN LINDO DÍA O NOCHE_

    _Número del creador del bot_ +595 983 186566
   

*📅 𝙵𝙴𝙲𝙷𝙰: ${week}, ${date}*

    
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡
╰══╡✯✯✯✯✯✯✯✯╞══╯
┏━━━━━━━━━━━━━┓
┃ *< COMANDOS >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _a_
┣ ඬ⃟💫 _${usedPrefix}cat_
┣ ඬ⃟💫 _${usedPrefix}dog_
┣ ඬ⃟💫 _${usedPrefix}logos_
┣ ඬ⃟💫 _${usedPrefix}runtime_
┣ ඬ⃟💫 _${usedPrefix}tiktok *[url]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[url]*_
┣ ඬ⃟💫 _${usedPrefix}attp *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}google *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}imagen *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}play2 *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}invocar *[texto]*_
┣ ඬ⃟💫 _${usedPrefix}ytmp3 *[url]*_
          ©️ *SapitoBot*
┣ ඬ⃟💫 _${usedPrefix}ytmp4 *[url]*_
┣ ඬ⃟💫 _${usedPrefix}tts *[lenguaje] [texto]*_
┣ ඬ⃟💫 _${usedPrefix}toimg *[sticker]*_
┣ ඬ⃟💫 _${usedPrefix}sticker *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[imagen]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[video]*_
┣ ඬ⃟💫 _${usedPrefix}tourl *[audio]*_
┣ ඬ⃟💫 _${usedPrefix}fat *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}bass *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}blown *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}deep *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}fast *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}robot *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}slow *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}tupai *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}vibra *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}nightcore *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}earrape *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}reverse *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}smooth *[nota de voz]*_
┣ ඬ⃟💫 _${usedPrefix}estado_ (para saber si el bot está activo)
┣ ඬ⃟💫 _${usedPrefix}spamchat_
┣ ඬ⃟💫 _${usedPrefix}gay_




┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┃ *< OWNER >*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡
┣ ඬ⃟💫 _${usedPrefix}update_
┗━━━━━━━━━━━━━┛
`.trim()
let mentionedJid = [who]
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
hydratedContentText: menu,
locationMessage: { 
jpegThumbnail: fs.readFileSync('./Menu2.jpg') },
hydratedFooterText: '©𝑆apito𝐵𝑜𝑡✔️',
hydratedButtons: [{
urlButton: {
displayText: '𝙶𝙸𝚃𝙷𝚄𝙱',
url: 'https://github.com/SAPITOBo/sapitoo'
}},
{
urlButton: {
displayText: '𝙲𝚁𝙴𝙰𝙳𝙾𝚁',
url: 'https://wa.me/595983286566'    
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}},
{
quickReplyButton: {
displayText: null,
id: null,
}}]}}
}), { userJid: m.sender, quoted: m });
return await conn.relayMessage(
m.chat,
template.message,
{ messageId: template.key.id })    
    
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(menucompleto|comandos|allmenu|info|speed|estado|menú|menu|help|\?)$/i
handler.fail = null
module.exports = handler
