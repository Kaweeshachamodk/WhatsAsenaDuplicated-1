const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('mods');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'apkmod ?(.*)', fromMe: true, desc: Lang.MODD_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://tobz-api.herokuapp.com/api/moddroid?q=${match[1]}&apikey=Tobzzz17`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🏷️ ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*🅿️ ' + Lang.PUBLISHER +':* ```' + json.result[0].publisher+ '```\n\n' +
		'*📝 ' + Lang.MODINFO +':* ```' + json.result[0].mod_info + '```\n\n' + 
		'*📦 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n' + 
		'*⬇️ ' + Lang.DOWNLOAD +':* ```' + json.result[0].download + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}

else if (Config.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'apkmod ?(.*)', fromMe: false, desc: Lang.MODD_DESC}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_APPNAME);
	const url = `https://tobz-api.herokuapp.com/api/moddroid?q=${match[1]}&apikey=Tobzzz17`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, 
		'*🏷️ ' + Lang.NAMEY +'* ```' + json.result[0].title + '```\n\n' + 
		'*🅿️ ' + Lang.PUBLISHER +':* ```' + json.result[0].publisher+ '```\n\n' +
		'*📝 ' + Lang.MODINFO +':* ```' + json.result[0].mod_info + '```\n\n' + 
		'*📦 ' + Lang.SIZE +'* ```' + json.result[0].size + '```\n\n' + 
		'*⬇️ ' + Lang.DOWNLOAD +':* ```' + json.result[0].download + '```\n', MessageType.text);
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDMD, MessageType.text);
	}
});
}
