const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');
const con = require('../config');

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

if (con.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'music ?(.*)', fromMe: true}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_SONG);
	const url = `https://tobz-api.herokuapp.com/api/joox?q=${match[1]}&apikey=Tobzzz17`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🎼 ' + Lang.SONG +':* ```' + match[1] + '```\n\n' +
		'*🎧 ' + Lang.ALBUM +':* ```' + json.result.album + '```\n' + 
		'*🔊 ' + Lang.TITLE +':* ```' + json.result.judul + '```\n' +
		'*🎚️ ' + Lang.PUBLICATION +':* ```' + json.result.dipublikasi + '```\n' + 
		'*🎙️ ' + Lang.SONGL +':* ```' + json.result.mp3 + '```\n' , MessageType.text);
		
		return await message.sendMessage(from,await getBuffer(`json.result.mp3`, {method: 'get'})  , MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4audio, ptt: true});
    
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDS, MessageType.text);
	}
});


Asena.addCommand({ pattern: 'twitter ?(.*)', fromMe: true, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("¡Por favor, ingresa un enlace!"))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Hecho por *Skueletor*') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'Hecho por *Skueletor*') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error." )),
      )
  },
)
	
Asena.addCommand({ pattern: 'mp3yt ?(.*)', fromMe: true, desc: "Try this if .song is not giving results.\n Works for youtube links only"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Ingresa un enlace de YouTube"))

    await message.sendMessage(infoMessage("Descargando..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp3?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          filesize,
	  quality,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Calidad"}*: ${quality}\n*${"Tamaño del archivo"}*: ${filesize}\n*${"Enlace"}*: ${url}`
	    
        await message.sendMessage(msg)
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.audio, {
         quoted : message.data
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("¡Canción no encontrada!" )),
      )
  },
)

Asena.addCommand({ pattern: 'mp4yt ?(.*)', fromMe: true , desc: "Use this if .videos is not working. Provide the youtube link \n Use mp4yt2,mp4yt3 for more quality"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Ingresa un enlace de YouTube"))

    await message.sendMessage(infoMessage("Descargando..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Calidad"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Tamaño de archivo excedido o enlace no válido." )),
      )
  },
)
}

else if (con.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'music ?(.*)', fromMe: false}, async (message, match) => {
	if (match[1] === '') return await message.reply(Lang.NEED_SONG);
	const url = `https://tobz-api.herokuapp.com/api/joox?q=${match[1]}&apikey=Tobzzz17`;
	try {
		const response = await got(url);
		const json = JSON.parse(response.body);
		if (response.statusCode === 200) return await message.client.sendMessage(message.jid, '*🎼 ' + Lang.SONG +':* ```' + match[1] + '```\n\n' +
		'*🎧 ' + Lang.ALBUM +':* ```' + json.result.album + '```\n' + 
		'*🔊 ' + Lang.TITLE +':* ```' + json.result.judul + '```\n' +
		'*🎚️ ' + Lang.PUBLICATION +':* ```' + json.result.dipublikasi + '```\n' + 
		'*🎙️ ' + Lang.SONGL +':* ```' + json.result.mp3 + '```\n' , MessageType.text);
		
		return await message.sendMessage(from,await getBuffer(`json.result.mp3`, {method: 'get'})  , MessageType.audio, {quoted: mek, mimetype: Mimetype.mp4audio, ptt: true});
    
	} catch {
		return await message.client.sendMessage(message.jid, Lang.NOT_FOUNDS, MessageType.text);
	}
});


Asena.addCommand({ pattern: 'twitter ?(.*)', fromMe: false, desc: "download from twitter links" }, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("¡Por favor, ingresa un enlace!"))

    await message.sendMessage(infoMessage(Lang.LOADINGTV))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/twdown?url=${userName}`)
      .then(async (response) => {
        const {
          format,
          result,
        } = response.data

        const profileBuffer = await axios.get(result, {responseType: 'arraybuffer'})

        const msg = `${format}`


      if (msg === 'Hecho por *Skueletor*') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.image, {
          caption: msg,
        })}
		 	 
	if (msg === 'Hecho por *Skueletor*') { await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })}

      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error." )),
      )
  },
)
	
Asena.addCommand({ pattern: 'mp3yt ?(.*)', fromMe: false, desc: "Try this if .song is not giving results.\n Works for youtube links only"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Ingresa un enlace de YouTube"))

    await message.sendMessage(infoMessage("Descargando..."))

    await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp3?url=${userName}`)
      .then(async (response) => {
        const {
          url,
          filesize,
	  quality,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Calidad"}*: ${quality}\n*${"Tamaño del archivo"}*: ${filesize}\n*${"Enlace"}*: ${url}`
	    
        await message.sendMessage(msg)
        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.audio, {
         quoted : message.data
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("¡Canción no encontrada!" )),
      )
  },
)

Asena.addCommand({ pattern: 'mp4yt ?(.*)', fromMe: false , desc: "Use this if .videos is not working. Provide the youtube link \n Use mp4yt2,mp4yt3 for more quality"}, async (message, match) => {

    const userName = match[1]

    if (!userName) return await message.sendMessage(errorMessage("Ingresa un enlace de YouTube"))

    await message.sendMessage(infoMessage("Descargando..."))

  await axios
      .get(`https://api-anoncybfakeplayer.herokuapp.com/ytmp4?url=${userName}`)
      .then(async (response) => {
        const {
          quality,
          url,	
        } = response.data.result[0]

        const profileBuffer = await axios.get(url, {responseType: 'arraybuffer'})

        const msg = `*${"Calidad"}*: ${quality}`
	    

        await message.sendMessage(Buffer.from(profileBuffer.data), MessageType.video, {
          caption: msg,
        })
      })
      .catch(
        async (err) => await message.sendMessage(errorMessage("Error.\n Tamaño de archivo excedido o enlace no válido." )),
      )
  },
)
}
