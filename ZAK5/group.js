var {
	MessageType
} = require('@adiwajshing/baileys');
var fs = require('fs-extra')
var { color, bgcolor } = require('../ZAK1/color')
var { getGroupAdmins, getBuffer } = require('../ZAK1/functions')

module.exports = welcome = async (Zakky, anu) => {
	    var welkom = JSON.parse(fs.readFileSync('./ZAK2/welcome.json'))
	    var isWelcome = welkom.includes(anu.jid)
	    if (!isWelcome) return
		try {
			    groupMet = await Zakky.groupMetadata(anu.jid)
                groupMembers = groupMet.participants
                groupAdmins = getGroupAdmins(groupMembers)
			    mem = anu.participants[0]
			    console.log(anu)
                try {
               pic = await Zakky.getProfilePicture(mem)
                } catch (e) {
                pic = 'https://telegra.ph/file/3311a0df260165a4eb953.jpg'
            }
            try {
                pp_grup = await Zakky.getProfilePicture(anu.jid)
                } catch (e) {
                pp_grup = 'https://telegra.ph/file/3311a0df260165a4eb953.jpg'
             }
            if (anu.action == 'add' && mem.includes(Zakky.user.jid)) {
            Zakky.sendMessage(anu.jid, 'Halo! Terima Kasih sudah Mengundangku, Jika ingin Menggunakan Bot, Tolong Jadikan Admin Ya, Ketik .menu', 'conversation')
            }
             if (anu.action == 'add' && !mem.includes(Zakky.user.jid)) {
             if (!welkom.includes(anu.jid)) return
                mdata = await Zakky.groupMetadata(anu.jid)
                memeg = mdata.participants.length
            	num = anu.participants[0]
               groupName = mdata.subject
                let v = Zakky.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
              teks = `ʜᴀʟʟᴏ ᴋᴀᴋ *@${mem.split('@')[0]}*
◧ ɪɴᴛʀᴏ ᴅᴜʟᴜ
*□* ɴᴀᴍᴀ :
*□* ᴜᴍᴜʀ :
*□* ʜᴏʙʙʏ :
*□* ɢᴇɴᴅᴇʀ :
*□* ᴀꜱᴀʟ ᴋᴏᴛᴀ :
⌬━━━━━━━━━━━⌬`
              buff = await getBuffer(pic)
               Zakky.sendMessage(mdata.id, { contentText: `${teks}`, footerText: `ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ *${groupName}*`, buttons: [{buttonId: `.selamatdatang`,buttonText:{displayText: 'WELCOME KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
		}
            if (anu.action == 'remove' && !mem.includes(Zakky.user.jid)) {
            if (!welkom.includes(anu.jid)) return
                mdata = await Zakky.groupMetadata(anu.jid)
            	num = anu.participants[0]
                let w = Zakky.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                memeg = mdata.participants.length
                groupName = mdata.subject
                out = `ꜱᴇʟᴀᴍᴀᴛ ᴛɪɴɢɢᴀʟ ᴋᴀᴡᴀɴ @${num.split('@')[0]}`
               buff = await getBuffer(pic)
               Zakky.sendMessage(mdata.id, { contentText: `${out}`, footerText: `ᴛᴇʟᴀʜ ᴍᴇɴɪɴɢɢᴀʟᴋᴀɴ ɢʀᴏᴜᴘ *${groupName}*`, buttons: [{buttonId: `.bay`,buttonText:{displayText: 'BYE KAK👋'},type:1}],headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: buff, contextInfo: {"mentionedJid": [num]}}}, 'buttonsMessage')
            }
		} catch (e) {
			console.log('Error : %s', color(e, 'pink'))
		}
	}
