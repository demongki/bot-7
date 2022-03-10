const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.yellow(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const biocolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const ZakLog = (text, color) => {
	return !color ? chalk.blue('[ ZAK-BOTZ ] ') + chalk.yellow(text) : chalk.blue('[ ZAK-BOTZ ] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	biocolor,
	ZakLog
}
