var 
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   WA_DEFAULT_EPHEMERAL,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
} = 
    require('@adiwajshing/baileys')
    var fs = require('fs')
    var moment = require('moment-timezone')
    var { exec, spawn } = require('child_process')
    var crypto = require('crypto')
    var qrcode = require('qrcode')
    var ffmpeg = require('fluent-ffmpeg')
    var fetch = require('node-fetch')
    var fs = require('fs-extra')
    var ms = require('parse-ms')
    var axios = require('axios')
    var hx = require('hxz-api')
    var request = require('request')
    var fromBuffer = require('file-type')
    var FormData = require('form-data')
    var speed = require('performance-now')
    var yts = require('yt-search')
    var PhoneNumber = require('awesome-phonenumber')
    var JSDOM = require('jsdom')
    var fetch = require('node-fetch')
    var qs = require('qs')
    var cheerio = require('cheerio')
  
var { yta } = require('./ZAK1/ytdl')
var { fetchJson } = require('./ZAK1/krbtz')
var { color, bgcolor, biocolor, ZakLog } = require('./ZAK1/color')
var { jadibot, stopjadibot, listjadibot } = require('./ZAK1/jadibot')
var { mediafireDl } = require('./ZAK1/mediafire.js')
var { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./ZAK1/functions')
var { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./ZAK1/levell')
var { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./ZAK1/limit')
var { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./ZAK1/rpg')

var _scommand = JSON.parse(fs.readFileSync('./ZAK2/scommand.json'))
var antilink = JSON.parse(fs.readFileSync('./ZAK2/antilink.json'))
var welkom = JSON.parse(fs.readFileSync('./ZAK2/welcome.json'))
var _petualang = JSON.parse(fs.readFileSync('./ZAK2/inventori.json'))
var prem = JSON.parse(fs.readFileSync('./ZAK2/premium.json'))
var pendaftar = JSON.parse(fs.readFileSync('./ZAK2/user.json'))
var balance = JSON.parse(fs.readFileSync('./ZAK2/balance.json'))
var _level = JSON.parse(fs.readFileSync('./ZAK2/leveluser.json'))
var ban = JSON.parse(fs.readFileSync('./ZAK2/banned.json'))
var autosticker = JSON.parse(fs.readFileSync('./ZAK2/autosticker.json'))

var soundnya = fs.readFileSync('./ZAK5/sound.mp3')

var kirrfake = fs.readFileSync('./ZAK4/zakky1.jpg')
var kirrfoto = fs.readFileSync('./ZAK4/zakky2.jpg')
var kirrtod = fs.readFileSync('./ZAK4/zakky3.jpg')
var kirtodrpg = fs.readFileSync('./ZAK4/ZakCokrpg.jpg')
var payment = fs.readFileSync('./ZAK4/payment.jpg')

var devil = fs.readFileSync('./ZAK4/zdevil.jpg')
var slime = fs.readFileSync('./ZAK4/zslime.jpg')
var demon = fs.readFileSync('./ZAK4/zdemon.jpg')
var goblin = fs.readFileSync('./ZAK4/zgoblin.jpg')
var demonking = fs.readFileSync('./ZAK4/zdemonking.jpg')
var behemoth = fs.readFileSync('./ZAK4/zbehemoth.jpg')

var ownerfake = fs.readFileSync('./ZAK5/foto/ownermenu.jpg')
var otherfake = fs.readFileSync('./ZAK5/foto/othermenu.jpg')
var groupfake = fs.readFileSync('./ZAK5/foto/groupmenu.jpg')
var islamifake = fs.readFileSync('./ZAK5/foto/islamimenu.jpg')
var downloadfake = fs.readFileSync('./ZAK5/foto/downloadmenu.jpg')
var nulisfake = fs.readFileSync('./ZAK5/foto/nulismenu.jpg')
var stickerfake = fs.readFileSync('./ZAK5/foto/stickermenu.jpg')
var photoxyfake = fs.readFileSync('./ZAK5/foto/photoxymenu.jpg')
var ephotofake = fs.readFileSync('./ZAK5/foto/ephotomenu.jpg')
var cecanfake = fs.readFileSync('./ZAK5/foto/cecanmenu.jpg')
var fotofake = fs.readFileSync('./ZAK5/foto/fotomenu.jpg')
var videofake = fs.readFileSync('./ZAK5/foto/videomenu.jpg')
var rpgfake = fs.readFileSync('./ZAK5/foto/rpgmenu.jpg')

var editkirtod = JSON.parse(fs.readFileSync('./editdisini.json'))

ownerName = editkirtod.NamaOwner
ownerNumber = editkirtod.NomorOwner
owner = editkirtod.NomorOwner2
lolkey = editkirtod.LolKeyy
api2 = editkirtod.apiweb2
api4 = editkirtod.apiweb4
api6 = editkirtod.apiweb6
api7 = editkirtod.apiweb7
api8 = 'https://api.dapuhy.xyz'

KirSelfPublic = false

var multi = true
var nopref = false
var single = false
var prefa = '!'

var getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i;
}
});
if (position !== null) {
return _scommand[position].chats;
}
};  
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}
if(time2 < "19:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐞𝐭𝐚𝐧𝐠'
}
if(time2 < "18:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐨𝐫𝐞'
}
if(time2 < "15:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐒𝐢𝐚𝐧𝐠'
}
if(time2 < "11:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐏𝐚𝐠𝐢'
}
if(time2 < "05:00:00"){
var ucapanWaktu = '𝐒𝐞𝐥𝐚𝐦𝐚𝐭 𝐌𝐚𝐥𝐚𝐦'
}

module.exports = ZakCok = async (ZakCok, todd) => {
	   try {
	   var 
	   { 
	   ownermenu 
	   ,
	   othermenu 
	   ,
	   groupmenu 
	   ,
	   islamimenu
	   ,
	   downloadmenu 
	   ,
	   nulismenu 
	   ,
	   stickermenu 
	   ,
	   photoxymenu 
	   ,
	   ephotomenu 
	   ,
	   cecanmenu
	   ,
	   fotomenu
	   ,
	   videomenu
       ,
       rpgmenu
	   } 
	   = require('./ZAK5/listmenu')
       if (!todd.hasNewMessage) return
       todd = todd.messages.all()[0]
	   if (!todd.message) return
	   if (todd.key && todd.key.remoteJid == 'status@broadcast') return
	   global.blocked
	   todd.message = (Object.keys(todd.message)[0] === 'ephemeralMessage') ? todd.message.ephemeralMessage.message : todd.message
	   var { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
       var content = JSON.stringify(todd.message)
	   var from = todd.key.remoteJid
	   var type = Object.keys(todd.message)[0]
	   var cmd = (type === 'conversation' && todd.message.conversation) ? todd.message.conversation : (type == 'imageMessage') && todd.message.imageMessage.caption ? todd.message.imageMessage.caption : (type == 'videoMessage') && todd.message.videoMessage.caption ? todd.message.videoMessage.caption : (type == 'extendedTextMessage') && todd.message.extendedTextMessage.text ? todd.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(todd.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(todd.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '.'	  
		} else {
		if (nopref){
		prefix = ''
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
       body = (type === 'conversation' && todd.message.conversation.startsWith(prefix)) ? todd.message.conversation : (type == 'imageMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'videoMessage') && todd.message[type].caption.startsWith(prefix) ? todd.message[type].caption : (type == 'extendedTextMessage') && todd.message[type].text.startsWith(prefix) ? todd.message[type].text : (type == 'listResponseMessage') && todd.message[type].singleSelectReply.selectedRowId ? todd.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && todd.message[type].selectedButtonId ? todd.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(todd.message[type].fileSha256.toString('base64')) !== null && getCmd(todd.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(todd.message[type].fileSha256.toString('base64')) : ""
       budy = (type === 'conversation') ? todd.message.conversation : (type === 'extendedTextMessage') ? todd.message.extendedTextMessage.text : ''
       var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()   
       var args = body.trim().split(/ +/).slice(1)
       var arg = body.substring(body.indexOf(' ') + 1)
       var ar = args.map((v) => v.toLowerCase())
       var argz = body.trim().split(/ +/).slice(1)
       var is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
       var isCmd = body.startsWith(prefix) 
       var q = args.join(' ')
       var Verived = "0@s.whatsapp.net"
       var txt = todd.message.conversation
       var botNumber = ZakCok.user.jid
       var isGroup = from.endsWith('@g.us')
       var sender = isGroup ? todd.participant : todd.key.remoteJid
       var senderr = todd.key.fromMe ? ZakCok.user.jid : todd.key.remoteJid.endsWith('@g.us') ? todd.participant : todd.key.remoteJid
       var totalchat = await ZakCok.chats.all()
       var groupMetadata = isGroup ? await ZakCok.groupMetadata(from) : ''
       var groupName = isGroup ? groupMetadata.subject : ''
       var groupId = isGroup ? groupMetadata.jid : ''
       var groupMembers = isGroup ? groupMetadata.participants : ''
       var groupDesc = isGroup ? groupMetadata.desc : ''
       var groupOwner = isGroup ? groupMetadata.owner : ''
       var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
       var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
       var isGroupAdmins = groupAdmins.includes(sender) || false
       var conts = todd.key.fromMe ? ZakCok.user.jid : ZakCok.contacts[sender] || { notify: jid.replace(/@.+/, '') }
       var pushname = todd.key.fromMe ? ZakCok.user.name : conts.notify || conts.vname || conts.name || '-'
       var isOwner = ownerNumber.includes(sender)
       var isPetualang = checkPetualangUser(sender)
       var isPremium = prem.includes(sender)
       var isBanned = ban.includes(sender)
       var readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏"

var isAntiLink = isGroup ? antilink.includes(from) : false
var isWelkom = isGroup ? welkom.includes(from) : false
var isAuto = isGroup ? autosticker.includes(from) : false
       
selectedButton = (type == 'buttonsResponseMessage') ? todd.message.buttonsResponseMessage.selectedButtonId : ''
responseButton = (type == 'listResponseMessage') ? todd.message.listResponseMessage.title : ''

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
ZakCok.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
var sendButton = async (from, context, fortext, but, todd) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
ZakCok.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: todd
})
}
var sendButImage = async (from, context, fotext, img, but) => {
gam = img
kirtoddd = await ZakCok.prepareMessage(from, gam, MessageType.image)
buttonMessagesI = {
imageMessage: kirtoddd.message.imageMessage,
contentText: context,
footerText: fotext,
buttons: but,
headerType: 4
}
ZakCok.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage, {quoted: zaktod})}
var sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await ZakCok.prepareMessage(from, kma, video)
var buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
ZakCok.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
var sendButloc = (from, title, text, desc, button, sen, men, file) => {
return ZakCok.sendMessage(from, {"text": '',"contentText": title + text,"footerText": desc, "buttons": button, "headerType": "LOCATION", "locationMessage": { "degreesLongitude": "", "degreesLatitude": "", "jpegThumbnail": file}}, MessageType.buttonsMessage, { quoted: todd, contextInfo: {"mentionedJid": men ? men : []}})
}

demong = {
		  wait: 'Waittt.....',
		  success: 'Nih Kak',
		  banned: 'Maaf Kamu Sudah Di Ban',
		  error: {
		  stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !!!',
		  Iv: 'Linknya Error Tod !!!'
		  },
		  only: {
		  admin: 'Kusus Admin Tod !!!',
		  group: 'Khusus Group Tod !!!'
		  }
		  }

var kirprem1 = `Maaf Kak ${pushname} Kamu Belum Premium Silahkan Chat Owner Untuk Menjadi Premium`
var kirprem2 = `Silahkan Pencet Di Bawah Untuk Beli Premium`
var kirprem3 = 
[
{
buttonId: `${prefix}buypremium`,
buttonText: 
{
displayText: `BUY PREMIUM`,
},
type: 1,
}
]
		  
var elit = 'Petualang Biasa'
if (isPremium)
{
elit = 'Petualang Pro'
}
if (isOwner)
{
elit = 'GM IN GAME'
}

var hideTag = async function(from, text){
let anu = await ZakCok.groupMetadata(from)
let members = anu.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
ZakCok.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./ZAK4/ZakCok2.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
var hideTagKontak = async function(from, nomor, nama){
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
var anu = await ZakCok.groupMetadata(from)
var members = anu.participants
var ane = []
for (let i of members){
ane.push(i.jid)
}
ZakCok.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
var sendKontak = (from, nomor, nama) => {
var vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ZakCok\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
ZakCok.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted: zaktod , contextInfo: { forwardingScore: 508, isForwarded: true }})
}

var levelRole = getLevelingLevel(sender, _level)
var role = 'Warrior III'
if (levelRole <= 5) {
role = 'Warrior II'
} else if (levelRole <= 10) {
role = 'Warrior I'
} else if (levelRole <= 15) {
role = 'Elite III'
} else if (levelRole <= 20) {
role = 'Elite II'
} else if (levelRole <= 25) {
role = 'Elite I'
} else if (levelRole <= 30) {
role = 'Master III'
} else if (levelRole <= 35) {
role = 'Master II'
} else if (levelRole <= 40) {
role = 'Master I'
} else if (levelRole <= 45) {
role = 'GrandMaster III'
} else if (levelRole <= 50) {
role = 'GrandMaster II'
} else if (levelRole <= 55) {
role = 'GrandMaster I'
} else if (levelRole <= 60) {
role = 'Epic III'
} else if (levelRole <= 65) {
role = 'Epic II'
} else if (levelRole <= 70) {
role = 'Epic I'
} else if (levelRole <= 75) {
role = 'Legend III'
} else if (levelRole <= 80) {
role = 'Legend II'
} else if (levelRole <= 85) {
role = 'Legend I'
} else if (levelRole <= 90) {
role = 'Mythic'
} else if (levelRole <= 95) {
role = 'Mythical Glory'
} else if (levelRole >= 100) {
role = 'Immortal'
} 

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎']
var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']        
var petnya = ['😾','🐺','🦊','🐶','🐰']
var makan = ['🌭','🌮','🌯','🍙','🍝','🍕','🍘','🍟','🍞','🍖','🍡']
var buahan = ['🍇','🍎','🍏','🍐','🍒','🍊','🍋','🍑','🍓']

var jam = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         
var hour_now = moment().format('HH:mm:ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

switch(hari) 
{
case 0: hari = "𝐌𝐢𝐧𝐠𝐠𝐮"; break;
case 1: hari = "𝐒𝐞𝐧𝐢𝐧"; break;
case 2: hari = "𝐒𝐞𝐥𝐚𝐬𝐚"; break;
case 3: hari = "𝐑𝐚𝐛𝐮"; break;
case 4: hari = "𝐊𝐚𝐦𝐢𝐬"; break;
case 5: hari = "𝐉𝐮𝐦′𝐚𝐭"; break;
case 6: hari = "𝐒𝐚𝐛𝐭𝐮"; break;
}
switch(bulan) 
{
case 0: bulan = "𝐉𝐚𝐧𝐮𝐚𝐫𝐢"; break;
case 1: bulan = "𝐅𝐞𝐛𝐫𝐮𝐚𝐫𝐢"; break;
case 2: bulan = "𝐌𝐚𝐫𝐞𝐭"; break;
case 3: bulan = "𝐀𝐩𝐫𝐢𝐥"; break;
case 4: bulan = "𝐌𝐞𝐢"; break;
case 5: bulan = "𝐉𝐮𝐧𝐢"; break;
case 6: bulan = "𝐉𝐮𝐥𝐢"; break;
case 7: bulan = "𝐀𝐠𝐮𝐬𝐭𝐮𝐬"; break;
case 8: bulan = "𝐒𝐞𝐩𝐭𝐞𝐦𝐛𝐞𝐫"; break;
case 9: bulan = "𝐎𝐤𝐭𝐨𝐛𝐞𝐫"; break;
case 10: bulan = "𝐍𝐨𝐯𝐞𝐦𝐛𝐞𝐫"; break;
case 11: bulan = "𝐃𝐞𝐬𝐞𝐦𝐛𝐞𝐫"; break;
}

var Tanggal= "" + hari + ", " + tanggal + " " + bulan + " " + tahun;

var sendWebp = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './ZAK3' + names + '.png', async function () {
console.log('selesai');
let filess = './ZAK3' + names + '.png'
let asw = './ZAK3' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {
fs.unlinkSync(filess)
if (err) return reply(`${err}`)
exec(`webpmux -set exif ./ZAK3/data.exif ${asw} -o ${asw}`, async (error) => {
if (error) return reply(`${error}`)
ZakCok.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:zaktod})
fs.unlinkSync(asw)
});
});
});
}


var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
ZakCok.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
ZakCok.sendMessage(from, hasil, type, options).catch(e => {
ZakCok.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}


var uploadImages = (buffData, type) => {      
return new Promise(async (resolve, reject) => {        
var { ext } = await fromBuffer(buffData)       
var cmd = text.toLowerCase()      
var filePath = 'utils/tmp.' + ext 
var _buffData = type ? await resizeImage(buffData, false) : buffData  
fs.writeFile(filePath, _buffData, { encoding: 'base64' }, (err) => {			
if (err) return reject(err)
console.log('Proses Follow IG : demo_ngki')			
var fileData = fs.readFileSync(filePath)			
var form = new FormData()			
form.append('file', fileData, 'tmp.' + ext)    
fetch('https://telegra.ph/upload', {			   
method: 'POST',     	
body: form			
})     	
.then(res => res.json())     	
.then(res => {			
if (res.error) return reject(res.error)			
resolve('https://telegra.ph' + res[0].src)     	
})     	
.then(() => fs.unlinkSync(filePath))			   
.catch(err => reject(err))			   
})			 
})		
}

var fakee = (teks) => {
var mena = ['1','2','3'] 
var menhe = mena[Math.floor(Math.random() * mena.length)]     
ZakCok.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hai Kak ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://e.top4top.io/p_2231oxc0u0.png",
"mediaUrl": "https://www.instagram.com/reel/CYKGjBzIw5m/?utm_source=ig_web_copy_link",
"thumbnail": fs.readFileSync(`./ZAK4/ZakCok${menhe}.jpg`),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : zaktod})
};

var isImage = (type === 'imageMessage')
var isVideo = (type === 'videoMessage')
var isSticker = (type == 'stickerMessage')

var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var listmsg = (from, title, desc, list) => { 
let po = ZakCok.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "SELECT","footerText": "_*©ZakCok*_","listType": "SINGLE_SELECT","sections": list}}, {})
return ZakCok.relayWAMessage(po, {waitForAck: true})
}
var reply = (teks) => {
ZakCok.sendMessage(from, teks, text, { thumbnail: kirrfoto, sendEphemeral: true, quoted: zaktod, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `GROUP ZakBotz`,body:"SELECT",previewType:"PHOTO",thumbnail:kirrfoto,sourceUrl:`https://chat.whatsapp.com/GBf6RlEFqH3ACCRa1N1g1c`}}})
}
var sendMess = (hehe, teks) => {
ZakCok.sendMessage(hehe, teks, text)
}
var sendVn = (teks) => {ZakCok.sendMessage(from, teks, audio, {mimetype:"audio/mp4", ptt:true, quoted:zaktod,contextInfo: {forwardingScore: 508, isForwarded: true}})}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? ZakCok.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : ZakCok.sendMessage(from, teks.trim(), extendedText, { quoted: todd, contextInfo: { "mentionedJid": memberr } })
}            
var getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`
}
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
var costum = (pesan, tipe, target, target2) => {
ZakCok.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var costum = (pesan, tipe, target, target2) => {
ZakCok.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
var runtime = function(seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor(seconds % (3600 * 24) / 3600);
var m = Math.floor(seconds % 3600 / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " 𝙷𝙰𝚁𝙸, " : " 𝙷𝙰𝚁𝙸, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " 𝙹𝙰𝙼, " : " 𝙹𝙰𝙼, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " 𝙼𝙴𝙽𝙸𝚃, " : " 𝙼𝙴𝙽𝙸𝚃, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " 𝙳𝙴𝚃𝙸𝙺" : " 𝙳𝙴𝚃𝙸𝙺") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
}
function monospace(string) {
return '```' + string + '```'
}   
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

if (isGroup && !todd.key.fromMe && isAntiLink) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply('Your is Admin!! Bot not Found kick You :D')
console.log(color('[KICK]', 'green'), color('Link Terdeteksi', 'white'))
reply(`「 *LINK TERDETEKSI* 」\n\n_Link Group Terdeteksi!!_\n_Kamu Akan Di Kick Dari Group!!_`)
setTimeout(() => {
ZakCok.groupRemove(from, [sender])
}, 2000);
}
}

if (isGroup && isPetualang) {
var currentLevel = getLevelingLevel(sender)
var checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
var amountXp = Math.floor(Math.random() * 10) + 100
var requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
var getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1) 
var lvlup = monospace(`╭───「 Level Up 」\n│\n├ • Nama : ${pushname}\n├ • Rank : ${role}\n├ • Status : ${elit}\n├ • Xp : ${getLevelingXp(sender)}\n├ • Level : ${getLevelingLevel(sender)}\n│\n╰───「 Level By ZakCok 」`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButton(from, lvlup, 'Level Up', but)
}
} catch (err) {
console.error(err)
}
}

var menua = ['vnd.openxmlformats-officedocument.wordprocessingml.document','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','zip','pdf']
var appl = menua[Math.floor(Math.random() * menua.length)]

emote = ['😁','😆','😉','😋','😎','😍','😘','🥴','🤩','🤪','🤫','😗','😚','☺','🙂','🤗','🤥','🤔','😐','😣','😮','😝','🙃','😲','😤','☹️','😦','😬','😳','😡']
var emoji = emote[Math.floor(Math.random() * (emote.length))]	
zaktod = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },message: {extendedTextMessage: {text: `BloodSword\n𝚁𝚄𝙽𝚃𝙸𝙼𝙴 : ${runtime(process.uptime())}\n〘 𝙴𝙼𝙾𝚃𝙴 : ${emoji} 〙`,contextInfo: {participant: `0@s.whatsapp.net`}}}}

thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

var Yy = 0
var bio = `*────" 𝖀𝖘𝖊𝖗 𝕴𝖓𝖋𝖔 "────*
    *Name :* ${pushname}
    *Bio :* ${thu.status}
    *Premium*: ${isPremium ? 'Iya' : 'Tidak'}
*────────────────*`
var allmenu = `${readmore}
*────" LIST MENU "────*
${emoji} ${prefix}ownermenu
${emoji} ${prefix}othermenu
${emoji} ${prefix}groupmenu
${emoji} ${prefix}islamimenu
${emoji} ${prefix}downloadmenu
${emoji} ${prefix}nulismenu
${emoji} ${prefix}stickermenu
${emoji} ${prefix}photoxymenu
${emoji} ${prefix}ephotomenu
${emoji} ${prefix}cecanmenu
${emoji} ${prefix}fotomenu
${emoji} ${prefix}videomenu
${emoji} ${prefix}rpgmenu
〇───────⌦`

colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (isCmd && !isGroup) {console.log(color('| PRIVATE |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(`${command} [${args.length}]`, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}
if (isCmd && isGroup) {console.log(color('| GROUP |', 'greenyellow'), color(moment(todd.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'blue'), color(cmd, 'cyan'), color(`${pushname}`, 'orange'), color(`${sender}`, 'deeppink'))}

if (!todd.key.fromMe && KirSelfPublic === true) return

ZakCok.updatePresence(from, Presence.composing)
ZakCok.chatRead(from, "read")
//━━━━━━━━━━━━━━━[ UNTUK FITUR ]━━━━━━━━━━━━━━━\\
switch (command) {

case 'jadibot':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (todd.key.fromMe) return reply("Tidak Bisa Jadibot Di Dalam Bot")
jadibot(reply, ZakCok, from)
break
case 'stopjadibot':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (todd.key.fromMe) return reply('Tidak Bisa Di Dalam Bot')
stopjadibot(reply)
break
case 'listjadibot':
let tekss = '「 *LIST JADIBOT* 」\n'
for (let i of listjadibot) {
tekss += `*Nomor* : ${i.jid.split("@")[0]}\n*Nama* : ${i.name}\n*Device* : ${i.phone.device_manufacturer}\n*Model* : ${i.phone.device_model}\n\n`
}
reply(tekss)
break
case 'patrick':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'gura':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendWebp(from, pjr)
}
)
break
case 'stickeranime':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendWebp(from, pjrr)
}
)
break
case 'cekserver':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} deku-network.my.id`)
statuss = args.join(" ")
anu = await fetchJson(`https://api.mcsrvstat.us/bedrock/2/${statuss}`)
ini_txt =`╭─ 𝐌𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 𝐒𝐞𝐫𝐯𝐞𝐫\n`
ini_txt +=`│➳ IP : ${anu.ip}\n`
ini_txt +=`│➳ PORT : ${anu.port}\n`
ini_txt +=`│➳ PING : ${anu.debug.ping}\n`
ini_txt +=`│➳ QUERY : ${anu.debug.query}\n`
ini_txt +=`│➳ SRV : ${anu.debug.srv}\n`
ini_txt +=`│➳ QUERYMISMATCH : ${anu.debug.querymismatch}\n`
ini_txt +=`│➳ IPINSRV : ${anu.debug.ipinsrv}\n`
ini_txt +=`│➳ CNAMESRV : ${anu.debug.cnameinsrv}\n`
ini_txt +=`│➳ ANIMATEDMOTD : ${anu.debug.animatedmotd}\n`
ini_txt +=`│➳ CACHETIME : ${anu.debug.cachetime}\n`
ini_txt +=`│➳ APIVERSION : ${anu.debug.apiversion}\n`
ini_txt +=`│➳ HOST NAME : ${anu.hostname}\n`
ini_txt +=`│➳ ONLINE : ${anu.online}\n`
ini_txt +=`└─────────────`
reply(ini_txt)
break
case 'script':
case 'sc':
fakee(`Mau Sc Kak
Buy Lah Di Owner Ku
Murah Kok Cuman 25K
Fitur Bisa Di Cek Di Bot Ini
Fitur Work All
Full No Enc 
No Error Error
Minat? 
Sung Chat https://wa.me/6287705048235`)
break
case 'menua':
if (isBanned) return reply(demong.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
ZakCok.sendMessage(from, 
{"contentText": `${bio}`,
footerText: `${allmenu}`,
"buttons": [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'owner'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": `application/${appl}`,
            "title": "ZakCok",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "BloodSword",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync(`./ZAK4/ZakCok${menhe}.jpg`)
}}, 
MessageType.buttonsMessage,
{ quoted: zaktod,thumbnail: fs.readFileSync(`./ZAK4/ZakCok${menhe}.jpg`), 
contextInfo: {mentionedJid: [sender]}})
listMsg = {
buttonText: '♞ ♚ ❁',
footerText: `Created By BloodSword`,
description: `${ucapanWaktu} Kak @${sender.split('@')[0]}`,
sections: [
{
"title": `OWNER`,
 rows: [
{
"title": "OWNER MENU",
"rowId": `${prefix}ownermenu`
}
]
}
,
{
"title": `OTHER`,
 rows: [
{
"title": "OTHER MENU",
"rowId": `${prefix}othermenu`
}
]
}
,
{
"title": `GROUP`,
 rows: [
{
"title": "GROUP MENU",
"rowId": `${prefix}groupmenu`
}
]
}
,
{
"title": `ISLAMI`,
 rows: [
{
"title": "ISLAMI MENU",
"rowId": `${prefix}islamimenu`
}
]
}
,
{
"title": `DOWNLOAD`,
 rows: [
{
"title": "DOWNLOAD MENU",
"rowId": `${prefix}downloadmenu`
}
]
}
,
{
"title": `NULIS`,
 rows: [
{
"title": "NULIS MENU",
"rowId": `${prefix}nulismenu`
}
]
}
,
{
"title": `STICKER`,
 rows: [
{
"title": "STICKER MENU",
"rowId": `${prefix}stickermenu`
}
]
}
,
{
"title": `PHOTOXY`,
 rows: [
{
"title": "PHOTOXY MENU",
"rowId": `${prefix}photoxymenu`
}
]
}
,
{
"title": `EPHOTO`,
 rows: [
{
"title": "EPHOTO MENU",
"rowId": `${prefix}ephotomenu`
}
]
}
,
{
"title": `CECAN`,
 rows: [
{
"title": "CECAN MENU",
"rowId": `${prefix}cecanmenu`
}
]
}
,
{
"title": `FOTO`,
 rows: [
{
"title": "FOTO MENU",
"rowId": `${prefix}fotomenu`
}
]
}
,
{
"title": `VIDEO`,
 rows: [
{
"title": "VIDEO MENU",
"rowId": `${prefix}videomenu`
}
]
}
,
{
"title": `RPG`,
 rows: [
{
"title": "RPG MENU",
"rowId": `${prefix}rpgmenu`
}
]
}
],
listType: 1
}
ZakCok.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:zaktod})
break
///////////////////
case 'ownermenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${ownermenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: ownerfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'othermenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${othermenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: otherfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'groupmenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${groupmenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: groupfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'islamimenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${islamimenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: islamifake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'downloadmenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${downloadmenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: downloadfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break























case 'mediafire':
              if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
              if (args.length < 1) return fakeyt('Link Nya Mana? ')
              if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(demong.error.Iv)
              teks = args.join(' ')
              res = await mediafireDl(teks)
              result = `MediaFire Downloader
               
Nama : ${res[0].nama}
Ukuran : ${res[0].size}
Link : ${res[0].link}

_*Tunggu Proses Upload Media......*_`
              reply(result)
              sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: zaktod})
              break


case 'nulismenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${nulismenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: nulisfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'stickermenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${stickermenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: stickerfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'photoxymenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${photoxymenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: photoxyfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'ephotomenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${ephotomenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: ephotofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'cecanmenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${cecanmenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: cecanfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'fotomenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${fotomenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fotofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'videomenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${videomenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: videofake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'rpgmenu':
if (isBanned) return reply(demong.banned)
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`「 INFO USER 」
*Kontak User* : @${sender.split('@')[0]} 
*Bio User* : ${thu.status}

${rpgmenu(prefix)}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: rpgfake,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
/////////////////////////\\//\\/\\/\\/\\/\\/\\/\\/\\//\/\\//

case 'd':
case 'del':
case 'delete': 
            ZakCok.deleteMessage(from, { id: todd.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
               break




case 'ganteng': 
case 'cantik': 
case 'jelek': 
case 'goblok':  
case 'bego': 
case 'pintar': 
case 'jago': 
case 'nolep': 
case 'monyet':     	 
case 'babi': 
case 'beban': 
case 'baik': 
case 'jahat': 
case 'anjing': 
case 'haram': 
case 'kontol': 
case 'pakboy': 
case 'pakgirl': 
case 'wibu': 
case 'hebat': 
case 'sadboy': 
case 'sadgirl':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group`)
jds = []
var AS1 = groupMembers
var CS1 = AS1[Math.floor(Math.random() * AS1.length)]      
var vcardd = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ `FN:${command}\n` 
+ `ORG: Anak ${command};\n`
+ `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
+ 'END:VCARD' 
ZakCok.sendMessage(from, {displayname: "Mikey", vcard: vcardd}, MessageType.contact, { quoted: zaktod})
reply(`Hahah Dia Yang *Ter${command}* Disini`)
break 
//////////////////////////////
case 'listsurah':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'asmaulhusna':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':	
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break
//////////////////////////////////////////////\\//\//\//\/\\\/\/\\//\\\
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks`)
reply(demong.wait)
txt1 = args[0]
getBuffer(`${api4}/api/photooxy1/${command}?apikey=${lolkey}&text=${txt1}`).then((gambar) => {
ZakCok.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ZakCok×`, quoted : zaktod})
})
break
case 'tiktokmaker':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(demong.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/tiktok?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
ZakCok.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ZakCok×`, quoted : zaktod})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} teks1 teks2`)
reply(demong.wait)
txt1 = args[0]
txt2 = args[1]
getBuffer(`${api4}/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
ZakCok.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ZakCok×`, quoted : zaktod})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(demong.wait)
ini_txt = args.join(" ")
getBuffer(`${api4}/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
ZakCok.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Subrek : ZakCok×`, quoted : zaktod}) 
})
break
case 'neondevil':
case '3dshiny':
case 'zombie3d':
case 'wordgreen':
case 'cloud':
case 'metal':
case 'neon':
case 'graffiticolor':
case 'lightgalaxy':
case 'hotmetalic':
case 'snake':
case 'graffiti5':
case 'graffiti3':
case 'graffiti':
case 'neon2':
case 'thunder':
case 'startsnight':
case 'cake':
case 'writingchalk':
case 'birthdaycake':
case '3dhologram':
case 'galaxystyle':
case 'lighteffects':
case 'greenbrush':
case 'cakes':
case 'startsnight2':
case 'glowing':
case 'blackpinkneon':
case '3dcrack':
case '3dunderwater':
case 'bearlogo':
case 'graffiti2':
case 'watercolor':
case 'clouds':
case 'pubgmascot':
case 'summerbeach':
case 'neonlight':
case 'summerbeach2':
case 'glow':
case 'wooden3d':
case 'galaxy':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(demong.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Follow IG : demo_ngki`
sendButImage(from, pll, `Created By BloodSword`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'brokenglass':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(demong.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Follow IG : demo_ngki`
sendButImage(from, pll, `Created By BloodSword`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'artpapercut':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} teks`)
reply(demong.wait)
ini_txt = args.join(" ")
get_result = await getBuffer(`${api8}/api/ephoto/${command}?text=${ini_txt}&apikey=C6Oaxwtr9H`)
pll = `Nih Kak Jangan Lupa Follow IG : demo_ngki`
sendButImage(from, pll, `Created By BloodSword`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=NisaaCantik`)
pll = `Nih Kak Awas Berdiri`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'bokep':
case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'storywa':
case 'storygalau':
case 'storyanime':
case 'storytruk':
case 'storybus':
case 'storysholawatan':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButVideo(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])            
break
case 'naruto':
case 'boruto':
case 'nekonime':
case 'Zakky':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestie':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [  
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
case 'motor':
case 'mobil':
case 'memeindo':
case 'renungan':
case 'quotesimage':
case 'katakataimage':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'pokemon':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'wallpaperhacker':
case 'wallpaperhacker2':
case 'wallpaperharley':
case 'wallpaperjoker':
case 'wallpaperpubg':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'wallpaperkpop':
case 'wallpaperblackpink':
case 'wallpapergame':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/randomimage/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
///////////////////
case 'vietnam':
case 'indonesia':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=NisaaCantik`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
case 'cecan':
case 'cogan':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
get_result = await getBuffer(`${api4}/api/random/${command}?apikey=${lolkey}`)
pll = `Nih Kak シ︎`
sendButImage(from, pll, `Klik Di Bawah Untuk Melanjutkan`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `NEXT KAK︎`,
},
type: 1,
},
])
break
//\\\//\\//\//\\/\\//\/\\//\//\\/\\/\\/\/\\/\\/\\/\//\/\\/\
case 'nulis':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if(!q) return reply('Teks Yang Mau Di Tulis??')
listMsg = {
buttonText: '𝗟𝗜𝗦𝗧',
footerText: `${ucapanWaktu} Kak @${sender.split('@')[0]}
Silahkan Pilih Di Bawah`,
description: `LIST NULIS`,
sections: [
{
"title": `NULIS BUKU`,
 rows: [
{
"title": `BUKU KANAN`,
"rowId": `${prefix}nuliskanan ${q}`
}
,
{
"title": `BUKU KIRI`,
"rowId": `${prefix}nuliskiri ${q}`
}
]
}
,
{
"title": `NULIS FOLIO`,
 rows: [
{
"title": `FOLIO KANAN`,
"rowId": `${prefix}foliokanan ${q}`
}
,
{
"title": `FOLIO KIRI`,
"rowId": `${prefix}foliokiri ${q}`
}
]
}],
listType: 1
}
ZakCok.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:zaktod})
break
case 'nuliskiri':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
reply(demong.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./ZAK4/NULIS/FOTO/BUKU/sebelumkiri.jpg','-font','./ZAK4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./ZAK4/NULIS/FOTO/BUKU/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
ZakCok.sendMessage(from, fs.readFileSync('./ZAK4/NULIS/FOTO/BUKU/setelahkiri.jpg'), image, {quoted: zaktod, caption: `Jangan malas kak...`})
})
}
break
case 'nuliskanan':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
reply(demong.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./ZAK4/NULIS/FOTO/BUKU/sebelumkanan.jpg','-font','./ZAK4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./ZAK4/NULIS/FOTO/BUKU/setelahkanan.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
ZakCok.sendMessage(from, fs.readFileSync('./ZAK4/NULIS/FOTO/BUKU/setelahkanan.jpg'), image, {quoted: zaktod, caption: `Jangan malas kak...`})
})
}
break
case 'foliokiri':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
reply(demong.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./ZAK4/NULIS/FOTO/FOLIO/sebelumkiri.jpg','-font','./ZAK4/NULIS/FONT/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./ZAK4/NULIS/FOTO/FOLIO/setelahkiri.jpg'])
.on('error', () => reply('error'))
.on('exit', () => {
ZakCok.sendMessage(from, fs.readFileSync('./ZAK4/NULIS/FOTO/FOLIO/setelahkiri.jpg'), image, {quoted: zaktod, caption: `Jangan malas kak...`})
})
}
break
case 'foliokanan':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
{
if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
reply(demong.wait)
var tulisan = body.slice(12)
var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
spawn('convert', ['./ZAK4/NULIS/FOTO/FOLIO/sebelumkanan.jpg','-font','./ZAK4/NULIS/FONT/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./ZAK4/NULIS/FOTO/FOLIO/setelahkanan.jpg'])
.on('error', () => reply(mess.error.api))
.on('exit', () => {
ZakCok.sendMessage(from, fs.readFileSync('./ZAK4/NULIS/FOTO/FOLIO/setelahkanan.jpg'), image, {quoted: zaktod, caption: `Jangan malas kak...`})
})
}
break
///\\//\//\\//\\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\////\\//\//\\//\
case 'tiktokstalk':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namatt`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ttk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${ttk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Username : ${get_result.username}\n`
txt += `Nickname : ${get_result.nickname}\n`
txt += `Bio : ${get_result.bio}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.followings}\n`
txt += `Likes : ${get_result.likes}\n`
txt += `Vidio : ${get_result.video}\n`
buffer = await getBuffer(get_result.user_picture)
ZakCok.sendMessage(from, buffer, image, {quoted: zaktod, caption: txt})
break
case 'githubstalk':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namagh`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ghk = args.join(" ")
get_result = await fetchJson(`http://api.lolhuman.xyz/api/github/${ghk}?apikey=${lolkey}`)
get_result = get_result.result
txt = `Full : ${get_result.name}\n`
txt += `Followers : ${get_result.followers}\n`
txt += `Following : ${get_result.following}\n`
txt += `Publick : ${get_result.public_repos}\n`
txt += `Public Gits : ${get_result.public_gists}\n`
txt += `User : ${get_result.user}\n`
txt += `Compi : ${get_result.company}\n`
txt += `Lokasi : ${get_result.location}\n`
txt += `Email : ${get_result.email}\n`
txt += `Bio : ${get_result.bio}\n`
buffer = await getBuffer(get_result.avatar)
ZakCok.sendMessage(from, buffer, image, {quoted: zaktod, caption: txt})
break

case 'youtubestalk':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} namachannel`)
reply('[❗] Wait Kak Mohon Di Tunggu Yah')
ytk = args.join(" ")
anu = await fetchJson(`http://api.lolhuman.xyz/api/ytchannel?apikey=${lolkey}&query=${ytk}`)
cari = '↻↻↻↻↻\n'
for (let search of anu.result) {
cari += `Chanel : ${search.channel_name}\nTentang : ${search.channel_about}\nCreated : ${search.channel_created}\nLink : https://youtu.com/channel/${search.channel_id}\n•••••••••••••••••\n`
}
reply(cari.trim())
break

case 'xnxxsearch':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Duration : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break
case 'xnxxdl':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!q) return reply('Linknya?')
x = await fetchJson(`https://bx-hunter.herokuapp.com/api/xvideodetail?url=${q}&apikey=FuckBitch`)
reply(demong.wait)
vid = await getBuffer(x.result.files.high)
ZakCok.sendMessage(from, vid, video, {quoted: zaktod})
break
case 'play':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
reply(demong.wait)
var yut = await yts(q)
yta(yut.videos[0].url)         
.then(async(res) => {
var { thumb, title, filesizeF, filesize } = res
var capti = `🜲 𝗬𝗢𝗨𝗧𝗨𝗕𝗘 𝗣𝗟𝗔𝗬 🜲

𖥸 Judul : ${yut.all[0].title}
𖥸 ID Video : ${yut.all[0].videoId}
𖥸️ Diupload Pada : ${yut.all[0].ago}
𖥸️️ Views : ${yut.all[0].views}
𖥸️ Durasi : ${yut.all[0].timestamp}
𖥸 Channel : ${yut.all[0].author.name}
𖥸 Link Channel : ${yut.all[0].author.url}
𖥸 Link Video : ${yut.videos[0].url}`
ya = await getBuffer(thumb)
py =await ZakCok.prepareMessage(from, ya, image)
sendButloc(from,monospace(capti),'',`Base By *ZakCok×*`,
[
{buttonId: `${prefix}ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'AUDIO'}, type: 1}
,
{buttonId: `${prefix}ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'VIDEO'}, type: 1}
],null,null,ya)
})
break
case 'ytmp4':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length < 1) return reply('Link?')     
reply(demong.wait)
KirTid = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${q}&apikey=NisaaCantik`)
kirmp4 = await getBuffer(KirTid.result.url)
await ZakCok.sendMessage(from, kirmp4, video, { mimetype: 'video/mp4', quoted: zaktod })
break
case 'ytmp3':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length < 1) return reply('Link?')         
reply(demong.wait)      
KirTid = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${q}&apikey=NisaaCantik`)
kirmp3 = await getBuffer(KirTid.result.url)
await ZakCok.sendMessage(from, kirmp3, audio, { mimetype: 'audio/mp4', quoted: zaktod})
break
case 'tiktok':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!q) return reply('Linknya?')
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
result = `⌦ *Nickname*: ${data.result.author.nickname}
⌦ *Like*: ${data.result.statistic.diggCount}
⌦ *Komentar*: ${data.result.statistic.commentCount}
⌦ *Share*: ${data.result.statistic.shareCount}
️⌦ *Views*: ${data.result.statistic.playCount}
⌦ *Desc*: ${data.result.title}`
buttons = 
[
{buttonId:`${prefix}tiktoknowm ${q}`,buttonText:{displayText: `NO WM` },type:1}
,
{buttonId:`${prefix}tiktokwm ${q}`,buttonText:{displayText: `WM` },type:1}
]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))
imageMsg = ( await ZakCok.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,
contentText:`${result}`,buttons,headerType:4}
prep = await ZakCok.prepareMessageFromContent(from,{buttonsMessage},{quoted: zaktod})
ZakCok.relayWAMessage(prep)
fs.unlinkSync(`./${sender}.jpeg`)
break
case 'tiktoknowm':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!q) return reply('Linknya?')
reply(demong.wait)
if (!q.includes('tiktok')) return reply(`Link Error Bang`)
data = await fetchJson(`${api4}/api/tiktok?apikey=${lolkey}&url=${q}`)
ini_video = await getBuffer(data.result.link)
ZakCok.sendMessage(from, ini_video, video, { quoted: zaktod })
break
case 'tiktokwm':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isUrl(args[0]) && !args[0].includes('tiktok')) return reply(mess.Iv)
if (!q) return reply('Link?')
reply(demong.wait)
hx.ttdownloader(`${args[0]}`)
.then(result => {
var { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${wm}`)
.then(async (a) => {
me = `Nih Bree✔︎`
ZakCok.sendMessage(from,{url:`${wm}`},video,{mimetype:'video/mp4',quoted:zaktod,caption:me})
})
})
break
////////////////////\/\\///\\//\//\//\//\//\/\/\\/\/\/\/\\/\//\\\//\/\\/\/
case 'kontak':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
argzu = arg.split('|')
if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
if (todd.message.extendedTextMessage != undefined){
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break
case 'kontag':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
argzi = arg.split('|')
if (!argzi) return reply(`Penggunaan ${prefix}kontag @tag|nama`)
if (todd.message.extendedTextMessage != undefined){
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
reply(`Command Kayak Gini\n${prefix+command} @tag|nama`)
}
break
case 'listonline':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
try {
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(ZakCok.chats.get(ido).presences), ZakCok.user.jid]
ZakCok.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: zaktod, contextInfo: { mentionedJid: online }})
} catch (e) {
reply(`${e}`)
}
break
case 'listadmin':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
teks = `List admin of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'setnamaa':
if (isBanned) return reply(demong.banned)
if (!q) return reply(`Nama?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
ZakCok.groupUpdateSubject(from, `${body.slice(9)}`)
ZakCok.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: todd })
break
case 'setdesc':
if (isBanned) return reply(demong.banned)
if (!q) return reply(`Teks Deskripsi?`)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
ZakCok.groupUpdateDescription(from, `${body.slice(9)}`)
ZakCok.sendMessage(from, `\`\`\`Sukses ✅, Mengganti Deskripsi Grup\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: zaktod })
break
case 'setppgc':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot\nKhusus Owner Kontol`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
let media = await ZakCok.downloadMediaMessage(encmedia)
ZakCok.updateProfilePicture(from, media)
} else {
reply(`Kirim atau tag gambar dengan caption ${prefix}setppgc`)
}
break
case 'linkgc':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
linkgc = await ZakCok.groupInviteCode(from)
yah = `https://chat.whatsapp.com/${linkgc}\n\nLink Group *${groupName}*`
ZakCok.sendMessage(from, yah, text, { quoted: zaktod })
break
case 'tagall':
if (isBanned) return reply(demong.banned)
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
var arr = [];
var txti = `[ TAG ALL ]\n\n*Teks :* ${q ? q : ''}\n\n`
for (var i of groupMembers)
{
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'hidetag':
if (isBanned) return reply(demong.banned)
if (!q) return reply('Tekss?')
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner && !isGroupAdmins) return reply(`Khusus Admin Kak`)
try {
quotedText = todd.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
try {
var pic = await ZakCok.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n\n${groupMetadata.desc}`
ZakCok.sendMessage(from, await getBuffer(pic), image, {quoted: zaktod, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'promote' :
if (!isGroup) return reply(`Khusus Group`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (todd.message.extendedTextMessage === undefined || todd.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
ZakCok.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
ZakCok.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(`Khusus Group`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (todd.message.extendedTextMessage === undefined || todd.message.extendedTextMessage === null) return reply(`Gunakan Seperti Ini ${prefix+command} @tag`)
mentioned = todd.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
ZakCok.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
ZakCok.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} 628×××××××`)
if (todd.message.extendedTextMessage === null || todd.message.extendedTextMessage === undefined) {
entah = q.split("|")[0]
entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
entah = `${entah}@s.whatsapp.net`
ZakCok.groupAdd(from, [entah])
} else {
entah = todd.message.extendedTextMessage.contextInfo.participant
ZakCok.groupAdd(from, [entah])
}
break
case 'kick':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (!q) return reply(`Format Error!\n\nContoh : ${prefix + command} @tag`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
y = q.split('@')[1] + '@s.whatsapp.net'
ZakCok.groupRemove(from, [y])
reply(`Succses kick target!`)
break
case 'open':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
reply(`Sukses Membuka Grup ${groupName}`)
ZakCok.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'close':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Bang`)
if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
reply(`Sukses Menutup Grup ${groupName}`)
ZakCok.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'menu':
case 'help':
if (isBanned) return reply(demong.banned)
var mena = ['1','2','3']
var menhe = mena[Math.floor(Math.random() * mena.length)]
thu = await ZakCok.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
menu =
`*「 INFO USER 」*
*↻Kontak User* : @${sender.split('@')[0]} 
*↻Bio User* : ${thu.status}
*↻Premium*: ${isPremium ? 'Iya' : 'Tidak'}

*「 INFO BOT 」*
*↻Nama Bot* : ZakBotz
*↻Nama Owner* : Zakky
*↻Runtime Bot* : ${runtime(process.uptime())}
*↻Speed Bot* : ${latensie.toFixed(4)} Detik ⚡
*↻Mode Bot* : ${KirSelfPublic ? 'MODE SELF' : 'MODE PUBLIC'}
*↻Total Group Chat* : ${groups.length}
*↻Total Private Chat* : ${privat.length}
*↻Total Semua Chat* : ${totalChat.length}
*↻Tanggal* : ${Tanggal}
*↻Waktu WIB* : ${wib}
*↻Waktu WIT* : ${wit}
*↻Waktu WITA* : ${wita}`
ZakCok.sendMessage(from, { contentText: `${menu}`, 
footerText: `Created By BloodSword`, 
buttons: [
{ buttonId: `${prefix}menua`, buttonText: { displayText: 'LIST MENU' }, type: 1 },{ buttonId: `${prefix}instagramowner`, buttonText: { displayText: 'INSTAGRAM OWNER' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: fs.readFileSync(`./ZAK4/ZakCok${menhe}.jpg`),
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
sendVn(soundnya)
break
case 'instagramowner':
reply(` *INSTAGRAM OWNER*
*https://instagram.com/demo_ngki* `)
break
/////////////////\\\\/\\//\\//\\/\\//\\//\///
case 'joinrpg':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)  
if (isPetualang) return reply('Kamu Sudah Menjadi Petualang')
if (args.length < 1) return reply(`Kirim perintah ${prefix + command} nama`) 
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
_petualang.push(sender)
fs.writeFileSync('./ZAK2/inventori.json', JSON.stringify(_petualang))        
addInventori(sender)
addLevelingId(sender) 
var name = args[0]
try {
ppimg = await ZakCok.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://telegra.ph/file/bc83fab9ed0fe327fe5ad.jpg'	
}
var serialUser = createSerial(14)
var anuu = monospace(`〘 SUKSES JOIN RPG 〙\n\n「 PROFILE 」\n • Nama : ${name}\n • Level : ${getLevelingLevel(sender)}\n • Status : ${elit}\n • Xp :  ${getLevelingXp(sender)}/${reqXp}\n\n「 RPG GAME 」`)
haitod = await getBuffer(ppimg)
ZakCok.sendMessage(from, { contentText: `${anuu}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}profile`, buttonText: { displayText: 'RPG MENU' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: haitod,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'profile':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}
 • Emas : ${getEmas(sender)}
 • Besi : ${getBesi(sender)}
 • Ikan : ${getFish(sender)}
 • Berlian : ${getDm(sender)}

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 × ${prefix}joinrpg
 × ${prefix}quest 
 × ${prefix}mining
 × ${prefix}mancing
 × ${prefix}luckyday
 × ${prefix}luckytime
 × ${prefix}adventure
 × ${prefix}inventori
 
⚔️ 𝗙𝗮𝗿𝗺𝗶𝗻𝗴 𝗥𝗣𝗚
 × ${prefix}killslime
 × ${prefix}killgoblin
 × ${prefix}killdevil
 × ${prefix}killbehemoth
 × ${prefix}killdemond
 × ${prefix}killdemondking 
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 × ${prefix}sellikan
 × ${prefix}sellbesi
 × ${prefix}sellemas
 × ${prefix}selldiamond`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: kirtodrpg,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'sellikan':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 5 * jmlh
if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
sellFish(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellikan', but)
break
case 'sellbesi':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 10 * jmlh
if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
sellBesi(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellbesi', but)
break
case 'sellemas':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
jmlh = body.slice(10)
rp = 25 * jmlh
if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
sellEmas(sender, jmlh, balance)
addBalance(sender, rp, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Sellemas', but)
break 
case 'selldiamond':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)
ttl = body.slice(13)
var etoo = 75 * ttl
if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
sellDm(sender, ttl)
addBalance(sender, etoo, balance) 
capti = monospace(`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
but = [{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
sendButton(from, capti, 'Selldiamond', but)
break 
case 'quest':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
groups = ZakCok.chats.array.filter(v => v.jid.endsWith('g.us'))
privat = ZakCok.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
uptime = process.uptime();
timestampe = speed();
totalChat = await ZakCok.chats.all()
latensie = speed() - timestampe
listMsg = {
buttonText: 'S E L E C T',
footerText: `@Quest Game`,
description: `Hallo Kak @${sender.split('@')[0]}, Aku ZakCok
Aku Adalah Admin Quest Di Group Ini!!!
Silahkan Pilih Quest Yang Cocok Dengan Kakak!!!
Gabung Ke Petualang Pro Untuk Membuka Quest Mode Demon
*Jadi Petualangan Pro Untuk Mendapatkan Hadiah Special>_<*`,
sections: [
{
"title": `MISI KE 1`,
 rows: [
{
"title": `Membunuh Slime`,
"description": `Berburu Slime Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}slime`
}
]
}
,
{
"title": `MISI KE 2`,
 rows: [
{
"title": `Membunuh Goblin`,
"description": `Berburu Globin Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}goblin`
}
]
}
,
{
"title": `MISI KE 3`,
 rows: [
{
"title": `Membunuh Devil`,
"description": `Berburu Devil Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}devil`
}
]
}
,
{
"title": `MISI KE 4`,
 rows: [
{
"title": `Membunuh Behemoth`,
"description": `Berburu Behemoth Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}behemoth`
}
]
}
,
{
"title": `MISI KE 5`,
 rows: [
{
"title": `Membunuh Demon`,
"description": `Berburu Demon Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demon`
}
]
}
,
{
"title": `MISI KE 6`,
 rows: [
{
"title": `Membunuh DemonKing`,
"description": `Berburu DemonKing Untuk Mendapatkan Hadiah`,
"rowId": `${prefix}demonking`
}
]
}
],
listType: 1
}
ZakCok.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:zaktod})
break
case 'slime':
case 'killslime':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 400)
addLevelingXp(sender, ez)
a = randomNomor(55)
b = randomNomor(400)
c = randomNomor(80)
d = randomNomor(3)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗦𝗹𝗶𝗺𝗲️\n\n🎁 Hadiah Membunuh Slime\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: slime,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'goblin':
case 'killgoblin':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 500)
addLevelingXp(sender, ez)
a = randomNomor(65)
b = randomNomor(500)
c = randomNomor(90)
d = randomNomor(5)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗚𝗼𝗯𝗹𝗶𝗻\n\n🎁 Hadiah Membunuh Goblin\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: goblin,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'devil': 
case 'killdevil':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 600)
addLevelingXp(sender, ez)
a = randomNomor(70)
b = randomNomor(600)
c = randomNomor(95)
d = randomNomor(6)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝘃𝗶𝗹️\n\n🎁 Hadiah Membunuh Devil\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: devil,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'behemoth':
case 'killbehemoth':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 700)
addLevelingXp(sender, ez)
a = randomNomor(75)
b = randomNomor(600)
c = randomNomor(100)
d = randomNomor(7)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗕𝗲𝗵𝗲𝗺𝗼𝘁𝗵️\n\n🎁 Hadiah Membunuh Behemoth\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: behemoth,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'demon':
case 'killdemond':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 850)
addLevelingXp(sender, ez)
a = randomNomor(90)
b = randomNomor(900)
c = randomNomor(120)
d = randomNomor(10)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
addDm(sender, d)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻️\n\n🎁 Hadiah Membunuh Demond\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demon,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break  
case 'demonking':
case 'killdemondking':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ez = Math.ceil(Math.random() * 1000)
addLevelingXp(sender, ez)
addLevelingXp(sender, ez)
addBalance(sender, 1999, balance)
addEmas(sender, 99)
addBesi(sender, 99)
addDm(sender, 99)
pp = monospace(`☠️ 𝗠𝗶𝘀𝗶 𝗠𝗲𝗺𝗯𝘂𝗻𝘂𝗵 𝗗𝗲𝗺𝗼𝗻𝗞𝗶𝗻𝗴\n\n🎁 Hadiah Membunuh DemonKing\n • Uang : $${b}\n • Besi : ${c}\n • Emas : ${a}\n • Diamond : ${d}\n\nTerimakasih Telah Menjalankan Misi Ini>_<`)
ZakCok.sendMessage(from, { contentText: `${pp}`, 
footerText: `Rpg Game`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'CEK INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: demonking,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
break
case 'mancing':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
ikannya = ikan[Math.floor(Math.random() * ikan.length)]
xp = Math.ceil(Math.random() * 350)
coin = randomNomor(50)	    
ditangkap = Math.ceil(Math.random() * 50)
cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
setTimeout( () => {
caption = monospace(`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
ZakCok.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `${prefix}mancing`, buttonText: { displayText: `Lanjut Mancing` }, type: 1 },
{ buttonId: `${prefix}inventori`, buttonText: { displayText: `Cek Inventori` }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: cing,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 6000)
setTimeout( () => {
ZakCok.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, '🎣Meanarik kail. . .', text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, '🎣Mulai memancing. . .', text) 
}, 1500) // 1000 = 1s,
addFish(sender, ditangkap)
addLevelingXp(sender, xp)
addBalance(sender, coin, balance) 
break
case 'inventori':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = monospace(`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `${prefix}adventure`, buttonText: { displayText: 'ADVENTURE' }, type: 1 }]
sendButton(from, done, 'Inventori User', but)
break
case 'adventure':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(mess.only.group)
if (!isPetualang) return reply(mess.only.player)
ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
var sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
var dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
anu = fs.readFileSync('./ZAK1/dungeon.js');
var ad = dungeon[Math.floor(Math.random() * dungeon.length)]
jsonData = JSON.parse(anu);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
hasm = await getBuffer(randKey.result)  
var adven = Math.ceil(Math.random() * 1000)
var money = Math.ceil(Math.random() * 300)
setTimeout( () => {		
caption = monospace(`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
ZakCok.sendMessage(from, { contentText: `${caption}`, 
footerText: `Memancing`, 
buttons: [
{ buttonId: `${prefix}inventori`, buttonText: { displayText: 'INVENTORI' }, type: 1 }
], 
headerType: 'LOCATION',
locationMessage: { degreesLatitude: '',
degreesLongitude: '',
jpegThumbnail: hasm,
contextInfo: {mentionedJid: [sender]}}}, 
'buttonsMessage')
}, 7000)
setTimeout( () => {
ZakCok.sendMessage(from, `Awass`, text) 
}, 5000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
}, 3000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, `${pushname} sedang bertualang`, text) 
}, 1500) // 1000 = 1s,
addLevelingXp(sender, adven)
addBalance(sender, money, balance)
break
case 'mining':   
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
pp = randomNomor(75)
emas = randomNomor(15)
dm = randomNomor(3)
besi = randomNomor(50)
done = monospace(`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
addBalance(sender, pp, balance)
addBesi(sender, besi)
addEmas(sender, emas)
addDm(sender, dm)
mining = ('Waitt sedang menguli . . .')
setTimeout( () => {
but = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'LANJUT MINING' }, type: 1 }]
sendButton(from, done, 'Mining', but)
}, 9000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
}, 7000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
}, 4000) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
}, 1500) // 1000 = 1s,
setTimeout( () => {
ZakCok.sendMessage(from, mining, text, {quoted: zaktod}) 
}, 0) // 1000 = 1s,
break
case 'luckyday':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 450)
a = randomNomor(99)
b = randomNomor(500)
c = randomNomor(150)
addBalance(sender, b, balance)
addLevelingXp(sender, ez)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckyday`, buttonText: { displayText: 'LuckyDay' }, type: 1 }]
sendButton(from, za, '@LuckyDay', but, zaktod)   
}
break
case 'luckytime':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isPetualang) return reply(`Maaff Kak *${pushname}* Sepertinya Kakak Bukan Petualang!!!\nUntuk Menjadi Petualang Silahkan Ketik :\n${prefix}joinrpg`)
{
ez = Math.ceil(Math.random() * 300)
addLevelingXp(sender, ez)
a = randomNomor(49)
b = randomNomor(300)
c = randomNomor(70)
addLevelingXp(sender, ez)
addBalance(sender, b, balance)
addEmas(sender, a)
addBesi(sender, c)
za = monospace(`🎰 LuckyTime\n• Uang : $${b}\n• Emas : ${a}\n• Besi : ${c}\n• Xp : ${ez}`)
but = [{ buttonId: `${prefix}luckytime`, buttonText: { displayText: 'LuckyTime' }, type: 1 }]
sendButton(from, za, '@LuckyTime', but, zaktod)
}
break
////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\///////////////////\\\\/\\//\\//\\/\\//\\//\//
case 'tts':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!q) return reply(`Contoh ${prefix + command} KirTod`)
titidZakky = await getBuffer(`${api7}/api/maker/tts?text=${q}&lang=id&apikey=TtiLOZsxnW`)
ZakCok.sendMessage(from, titidZakky, MessageType.audio, {quoted: todd, mimetype: 'audip/mp4', ptt:true})
break
case 'public':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === false) return
uptime = process.uptime()
KirSelfPublic = false
reply(`「 *PUBLIC-MODE* 」`)
break
case 'self':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Bacot Ngentot`)
if (KirSelfPublic === true) return
uptime = process.uptime()
KirSelfPublic = true
reply(`「 *SELF-MODE* 」`)
break
case 'tes':
reply(` Bot On Kak Silahkan Ketik ${prefix}menu `)
break
case 'runtime':
fakee(`Aktip Selama ${runtime(process.uptime())}\n\n${wib} *WIB*\n${wit} *WIT*\n${wita} *WITA*`)
break
case 'owner':
if (isBanned) return reply(demong.banned)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 
'BEGIN:VCARD\n' +
'VERSION:3.0\n' +
'N:Sy;Bot;;;\n' +
`FN:${ownerName}\n` +
`item1.TEL;waid=${owner}:${owner}\n` +
`item1.X-ABLabel:👑 Creator\n` +
`item2.EMAIL;type=INTERNET:tesheroku123@gmail.com\n` +
`item2.X-ABLabel:📧 Email\n` +
`item3.URL:https://instagram.com/demo_ngki\n` +
`item3.X-ABLabel:⚙️ Instagram Owner\n` +
`item4.ADR:;;🇮🇩 Indonesia;;;;\n` +
`item4.X-ABADR:ac\n` +
`item4.X-ABLabel:🌍 Region\n` +
`item5.X-ABLabel:⚔️ BloodSword Developer\n` +
'END:VCARD'.trim()
ZakCok.sendMessage(from, {displayName: `Creator Zakky`, vcard: vcard2}, contact, 
{ quoted: zaktod, 
})
reply('Itu Kak >_<')
break
case 'ssweb':
case 'sswebfull':
if (isBanned) return reply(demong.banned)
if (args.length < 1) return reply(`url mana broh?\ncontoh : ${prefix + command} https://qa.islam.com`)
reply(demong.wait)
kirlink = args.join(' ')
loh = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&url=${kirlink}`)
ZakCok.sendMessage(from, loh, image, {quoted: zaktod})
break
case 'sticker':
case 'stiker':
case 's':
if (isBanned) return reply(demong.banned)
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await ZakCok.downloadAndSaveMediaMessage(encmedia, `./ZAK3/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(demong.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./ZAK3/data.exif ./ZAK3/${sender}.webp -o ./ZAK3/${sender}.webp`, async (error) => {
if (error) return reply(demong.error.api)
ZakCok.sendMessage(from, fs.readFileSync(`./ZAK3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./ZAK3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./ZAK3/${sender}.webp`)
} else if ((isMedia && todd.message.videoMessage.fileLength < 10000000 || isQuotedVideo && todd.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
var encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await ZakCok.downloadAndSaveMediaMessage(encmedia, `./ZAK3/${sender}`)
reply(demong.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(demong.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./ZAK3/data.exif ./ZAK3/${sender}.webp -o ./ZAK3/${sender}.webp`, async (error) => {
if (error) return reply(demong.error.api)
ZakCok.sendMessage(from, fs.readFileSync(`./ZAK3/${sender}.webp`), sticker, {quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(`./ZAK3/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./ZAK3/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break
case 'toimg':
if (isBanned) return reply(demong.banned)
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await ZakCok.downloadAndSaveMediaMessage(encmedia, './ZAK3/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subrek YT : ZakCok×`)
fs.unlinkSync(ran)
})
break
case 'tourl':
if (isBanned) return reply(demong.banned)
if ((isMedia && !todd.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
reply(demong.wait)
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
owgi = await ZakCok.downloadMediaMessage(boij)
res = await uploadImages(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
break
case 'shortlink':
if (!q) return reply(`Contoh ${prefix}bitly https://github.com/ZakCok`)
anu = await fetchJson(`https://api.lolhuman.xyz/api/shortlink3?apikey=${lolkey}&url=${q}`)
reply(`Dah Jadi Nih Kak
${anu.result}

Note : Untuk Melihat Web
Silahkan Ketik
${prefix}ssweb ${anu.result}
`)
break
case 'darkjokes':
case 'darkjoke':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
reply(demong.wait)
data = fs.readFileSync('./ZAK1/darkjokes.js')
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
hasil = await getBuffer(randKey.result)
ZakCok.sendMessage(from, hasil, image, {quoted: todd, caption: '*GELAP BOS :V*'})
break
case 'attp':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} Hai`)
reply(demong.wait)
buffer = await getBuffer(`${api6}/attp?file&text=${encodeURI(q)}`)
ZakCok.sendMessage(from, buffer, sticker, { quoted: todd })
break
case 'ttp':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (!q) return reply(`Teks Nya Mana Kak?\nContoh :\n${prefix}ttp ZakCok`)
anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${q}`)
ZakCok.sendMessage(from, anu1, image, {quoted: zaktod, caption : `${prefix}s`})
break
case 'antilink':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (!q) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if (args[0].toLowerCase() === 'enable'){
if (isAntiLink) return reply(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./ZAK2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Bakal Ke Kick!')
} else if (args[0].toLowerCase() === 'disable'){
var anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./ZAK2/antilink.json', JSON.stringify(antilink))
reply('*「 ANTILINK DI NONAKTIFKAN 」*')
} else {
reply(`Pilih enable atau disable`)
}
break
case 'welcome':
if (isBanned) return reply(demong.banned)
if (!isGroup) return reply(`Khusus Group Kak`)
if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)
if (args.length < 1) return reply(`Buat Nyalain : ${prefix + command} enable\nBuat Matiin : ${prefix + command} disable`)
if ((args[0]) === 'enable') {
if (isWelkom) return reply('Udah aktif')
welkom.push(from)
fs.writeFileSync('./ZAK2/welcome.json', JSON.stringify(welkom))
reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
} else if ((args[0]) === 'disable') {
welkom.splice(from, 1)
fs.writeFileSync('./ZAK2/welcome.json', JSON.stringify(welkom))
reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
} else {
reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
break
case 'bc':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (args.length < 1) return reply('teks?')
anu = await ZakCok.chats.all()
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await ZakCok.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
ZakCok.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `Base By *BloodSword*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
ZakCok.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `Base By *BloodSword*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'bcg':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak\nBtw Lu Siapa Owner Bukan???`)
if (args.length < 1) return reply('teks?')
var anu = await ZakCok.chats.all().filter(v => v.jid.endsWith('g.us'))
if (isMedia && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
bc = await ZakCok.downloadMediaMessage(encmedia)
for (let _ of anu) {
tes = `${body.slice(4)}`
ZakCok.sendMessage(_.jid, bc, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${tes}`, 
footerText: `Base By *BloodSword*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
textt = `${body.slice(4)}`
ZakCok.sendMessage(_.jid, { contentText: `⌜ ⚝ BROADCAST GROUP ⚝ ⌟\n\n⌦ : ${textt}`, 
footerText: `Base By *BloodSword*`, 
buttons: 
[
{buttonId: `${prefix}menu`,buttonText:{displayText: 'MENU'},type:1}
],
headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: kirrfoto, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
}
reply('Suksess broadcast')
}
break
case 'setnamabot':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
if (args.length < 1) return reply('Teksnya?')
anu = body.slice(11)
ZakCok.updateProfileName(anu)
reply(`Sukses Mengganti Nama Bot Menjadi ${body.slice(11)}`)
break
case 'setppbot':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix}setppbot atau tag gambar yang sudah dikirim`)
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM','m')).message.extendedTextMessage.contextInfo : todd
media = await ZakCok.downloadAndSaveMediaMessage(encmedia, './ZAK4')
await ZakCok.updateProfilePicture(botNumber, media)
reply('Makasih Foto BaruNya')
break
case 'setbioo':
if (isBanned) return reply(demong.banned)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
if (args.length < 1) return reply('Teksnya?')
iyek = body.slice(8)
ZakCok.setStatus(`${iyek}`)
reply(`Sukses Mengganti Bio Menjadi ${body.slice(8)}`)
break
case 'ban':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
ban.push(bnnd)
fs.writeFileSync('./ZAK2/banned.json', JSON.stringify(ban))
reply(`Nomor ${bnnd} Telah Di Ban!`)
break
case 'unban':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unb = ban.indexOf(ya)
ban.splice(unb, 1)
fs.writeFileSync('./ZAK2/banned.json', JSON.stringify(ban))
reply(`Nomor ${ya} Telah Di UnBan!`)
break
case 'addprem':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
prem.push(bnnd)
fs.writeFileSync('./ZAK2/premium.json', JSON.stringify(prem))
reply(`Nomor ${bnnd} Telah Menjadi Premium!`)
break
case 'delprem':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
ya = `${args[0].replace('@', '')}@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./ZAK2/premium.json', JSON.stringify(prem))
reply(`Nomor ${ya} Telah Di Hapus Premium!`)
break
case 'listpremium':
if (!todd.key.fromMe && !isOwner) return reply(`Khusus Owner Kak`)
teks = '*List Premium*\n\n'
for (let ZakCok of prem) {
teks += `- ${ZakCok}\n`
}
teks += `\n*Total : ${prem.length}*`
ZakCok.sendMessage(from, teks.trim(), extendedText, { quoted: zaktod, contextInfo: { "mentionedJid": prem } })
break
case 'sewabot':
case 'buypremium':
gopeynya = 'https://telegra.ph/file/b5d21887a22c1fa26d464.jpg'
buff = await getBuffer(gopeynya)
teksnya = `
 *🐣 LIST SEWA & PREMIUM 🐣*
🔖 SEWA 18K/BULAN
🔖 SEWA + PREMIUM 28K
🔖 PREMIUM 10K/BULAN

*🌹 LIST SCRIPT BOT 🌹*
🔖 SC BOT NO ENC
🔖 HARGA = 20K

*🐋 MINAT? PM 🐋*
🔖 wa.me/62881036690566
🔖 IG : demo_ngki
🔖 GH : demongki
🔖 YT : gapunya
🔖 © Developer BloodSword`
buttons = [
{buttonId: `${prefix}owner`,buttonText:{displayText: `👥 OWNER`},type:1},
{buttonId: `${prefix}payment`, buttonText:{displayText: `💳 PAYMENT`},type:1}]
imageMsg = (await ZakCok.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Created By BloodSword', imageMessage: imageMsg,
contentText: teksnya,buttons,headerType:4}
prep = await ZakCok.prepareMessageFromContent(from,{buttonsMessage},
{quoted: zaktod})
ZakCok.relayWAMessage(prep)
break
case 'payment':
case 'donasi':
ZakCok.sendMessage(from, 
{"contentText": `${bio}`,
footerText: `PAYMENT

NOMOR GOPAY : 0881-0366-90566
NOMOR DANA  : 0881-0366-90566
NOMOR OVO   : 0881-0366-90566
PULSA       : 0881-0366-90566
FOLLOW IG : demo_ngki
QR DANA : https://telegra.ph/file/c719a4b3fb608dc75ba73.jpg`,
"buttons": [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'KIRIM SS BUKTI'}, type: 1}
],
            "headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc",
            "mimetype": `application/${appl}`,
            "title": "ZakCok",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "999999999999",
            "pageCount": 999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "BloodSword",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync(`./ZAK4/payment.jpg`)
}}, 
MessageType.buttonsMessage,
{ quoted: zaktod,thumbnail: fs.readFileSync(`./ZAK4/payment.jpg`), 
contextInfo: {mentionedJid: [sender]}})
break
case 'pacar':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length == 0) return reply(`Contoh: ${prefix + command} Nama1 Nama2`)
reply(demong.wait)
txt1 = args[0]
txt2 = args[1]
get_result = await getBuffer(`https://api.lolhuman.xyz/api/pacarserti?apikey=Deffdemong&name1=${txt1}&name2=${txt2}`)
pll = `Nih Kak Jangan Lupa Follow IG : demo_ngki`
sendButImage(from, pll, `Created By BloodSword`, get_result, [      
{
buttonId: `${prefix}menu`,
buttonText: {
displayText: `BACK MENU`,
},
type: 1,
},
])            
break
case 'serti1':
case 'serti2':
case 'serti3':
if (!isPremium) return sendButMessage(from, kirprem1, kirprem2, kirprem3, { quoted: zaktod })
if (isBanned) return reply(demong.banned)
if (args.length ==0) return reply('Text Nya Mana Tod?')
txtt = args.join (" ")
reply(`Wet wet...`)
buff = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/${command}/img.php?nama=${txtt}`)
ZakCok.sendMessage(from, buff, image, { quoted: zaktod, caption: 'Nih Bro Hasil nya' })
break
//////
case 'autosticker':
if (!isGroup) return reply(`Khusus Group Kak`)
if (!todd.key.fromMe && !isGroupAdmins) return reply(`Khusus Admin Kak`)
if (args.length < 1) return reply('Mengaktifkan tekan 1, Menonaktif tekan 0')
if (args[0] === '1') {
if (isAuto) return reply('*Fitur AutoSticker sudah aktif sebelum nya*')
autosticker.push(from)
fs.writeFileSync('./ZAK2/autosticker.json', JSON.stringify(autosticker))
reply(`Berhasil Di Aktipkan`)
} else if (args[0] === '0') {
autosticker.splice(from, 1)
fs.writeFileSync('./ZAK2/autosticker.json', JSON.stringify(autosticker))
reply(`Berhasil Di Nonaktifkan`)
} else {
reply(`Mengaktifkan tekan 1, Menonaktif tekan 0`)
}
break

default:
if (isMedia && isAuto && !todd.message.videoMessage || isQuotedImage) {
var encmedia = isQuotedImage ? JSON.parse(JSON.stringify(todd).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : todd
var media = await ZakCok.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(dla.stikga())
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
ZakCok.sendMessage(from, buffer, sticker, { quoted: todd})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
}
					
				

if (budy.startsWith('to')){
if (!todd.key.fromMe && !tod.key.fromMe) return reply (`Khusus Owner Kak`)
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
}
}
catch 
(e)
{
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('ERROR : %s', color(e, 'magenta'))
}
}
}
