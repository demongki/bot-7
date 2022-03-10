var fetch = require('node-fetch')
var axios = require('axios')
var cfonts = require('cfonts')
var spin = require('spinnies')
var Crypto = require('crypto')
var figlet = require('figlet')
var chalk = require('chalk')

var color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}
var bgcolor = (text, bgcolor) => {
    return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}


var h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

var getBuffer = async (url, options) => {
	try {
		options ? options : {}
		var res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

var randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

var generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

var getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

var getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

var spinner = { 
  "interval": 120,
  "frames": [
    "",
    "B",
    "BY",
    "BY ",
    "BY :",
    "BY : ",
    "BY : B",
    "BY : Bl",
    "BY : Blo",
    "BY : Bloo",
    "BY : Blood",
    "BY : BloodS",
    "BY : BloodSw",
    "BY : BloodSwo",
    "BY : BloodSwor",
    "BY : BloodSword",
    "BY : BloodSwor",
    "BY : BloodSwo",
    "BY : BloodSw",
    "BY : BloodS",
    "BY : Blood",
    "BY : Bloo",
    "BY : Blo",
    "BY : Bl",
    "BY : B",
    "BY : ",
    "BY :",
    "BY ",
    "BY",
    "B",
    "",
    "B",
    "BY",
    "BY ",
    "BY :",
    "BY : ",
    "BY : B",
    "BY : Bl",
    "BY : Blo",
    "BY : Bloo",
    "BY : Blood",
    "BY : BloodS",
    "BY : BloodSw",
    "BY : BloodSwo",
    "BY : BloodSwor",
    "BY : BloodSword",
    "BY : BloodSwor",
    "BY : BloodSwo",
    "BY : BloodSw",
    "BY : BloodS",
    "BY : Blood",
    "BY : Bloo",
    "BY : Blo",
    "BY : Bl",
    "BY : B",
    "BY : ",
    "BY :",
    "BY ",
    "BY",
    "B",
    "",
    "B",
    "BY",
    "BY ",
    "BY :",
    "BY : ",
    "BY : B",
    "BY : Bl",
    "BY : Blo",
    "BY : Bloo",
    "BY : Blood",
    "BY : BloodS",
    "BY : BloodSw",
    "BY : BloodSwo",
    "BY : BloodSwor",
    "BY : BloodSword",
    "BY : BloodSwor",
    "BY : BloodSwo",
    "BY : BloodSw",
    "BY : BloodS",
    "BY : Blood",
    "BY : Bloo",
    "BY : Blo",
    "BY : Bl",
    "BY : B",
    "BY : ",
    "BY :",
    "BY ",
    "BY",
    "B",
    "",
    "B",
    "BY",
    "BY ",
    "BY :",
    "BY : ",
    "BY : B",
    "BY : Bl",
    "BY : Blo",
    "BY : Bloo",
    "BY : Blood",
    "BY : BloodS",
    "BY : BloodSw",
    "BY : BloodSwo",
    "BY : BloodSwor",
    "BY : BloodSword",
    "BY : BloodSwor",
    "BY : BloodSwo",
    "BY : BloodSw",
    "BY : BloodS",
    "BY : Blood",
    "BY : Bloo",
    "BY : Blo",
    "BY : Bl",
    "BY : B",
    "BY : ",
    "BY :",
    "BY ",
    "BY",
    "B",
    "",
    ]}

        let globalSpinner;


        var getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spin = getGlobalSpinner(false)

        var start = (id, text) => {
	       spin.add(id, {text: text})
	       }
        var info = (id, text) => {
	       spin.update(id, {text: text})
        }
        var success = (id, text) => {
	       spin.succeed(id, {text: text})

	       }

        var close = (id, text) => {
	       spin.fail(id, {text: text})
        }
 
console.log(color(figlet.textSync('BloodSword', {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
	}), 'yellow'))
console.log(bgcolor(`Follow IG : demo_ngki\n`,'blue'))



module.exports = { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close }
