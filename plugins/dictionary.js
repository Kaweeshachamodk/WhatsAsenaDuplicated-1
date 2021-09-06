const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
/*const got = require('got');
const fs = require('fs');*/
const axios = require('axios');
const Config = require('../config')

const Language = require('../language');
const Lang = Language.getString('weather');
const { errorMessage, infoMessage } = require('../helpers');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({ pattern: 'dict ?(.*)', fromMe: true, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Ingrese una palabra para buscar."))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }

    await message.sendMessage(infoMessage("Cargando..."))

	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
	    
	    
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[1]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	 })
	
	     await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
		     
	 await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[1]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })    
	})    
		 
		  await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[1].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	    

      })
      
  },
)

Asena.addCommand({ pattern: 'definition ?(.*)', fromMe: true, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Necesito una palabra para investigar..."))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }

    await message.sendMessage(infoMessage("Cargando..."))

	

   for (var i = 0; i < 5 ; i++) {
	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[i].meanings[i].definitions[i]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })

      })
      .catch(
        async (err) => await message.sendMessage(""),
      )}
  },
)
}

else if (Config.WORKTYPE == 'public') {
	
Asena.addCommand({ pattern: 'dict ?(.*)', fromMe: false, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Ingrese una palabra para buscar."))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }

    await message.sendMessage(infoMessage("Cargando..."))

	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
	    
	    
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[0].definitions[1]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	 })
	
	     await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	})    
		     
	 await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[0].meanings[1].definitions[1]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })    
	})    
		 
		  await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[1].meanings[0].definitions[0]

   
	
	const msg = `
        *${"Definición"}*: ${definition}    
        *${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })
	    

      })
      
  },
)
	
Asena.addCommand({ pattern: 'definition ?(.*)', fromMe: false, desc: "Use it as a dictionary.\nEg: .dict en_US;lead\n For supporting languages send *.lngcode*" }, async (message, match) => {

    if (!match[1]) return await message.sendMessage(errorMessage("Necesito una palabra para investigar..."))

 if (match[1].includes(';')) {
        var split = match[1].split(';');
        word = split[1];
        langcode = split[0];
         }
	else {
        word = match[1];
        langcode = 'es';
        }

    await message.sendMessage(infoMessage("Cargando..."))

	

   for (var i = 0; i < 5 ; i++) {
	  
    await axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/es/${word}`)
      .then(async (response) => {
        const {
         definition,
	example,	
        } = response.data[i].meanings[i].definitions[i]

   
	
	const msg = `
*${"Definición"}*: ${definition}
*${"Ejemplo"}*: ${example}`
	
	 await message.client.sendMessage(message.jid, msg , MessageType.text, {
          quoted: message.data,
        })

      })
      .catch(
        async (err) => await message.sendMessage(""),
      )}
  },
)
}
