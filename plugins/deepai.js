/* Codded by @phaticusthiccy
Telegram: t.me/phaticusthiccy
Instagram: www.instagram.com/kyrie.baran
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg'); // For Creating File
const {execFile} = require('child_process');
const cwebp = require('cwebp-bin');
const axios = require('axios'); // Resp Checker
const Config = require('../config'); // GAN STYLE Support
const WhatsAsenaStack = require('whatsasena-npm');
const request = require('request');
const got = require("got"); // Responses Catcher
const deepai = require('deepai'); // Localde ise deepmain.js oluşturarak özelleştirilebilir şekilde kullanabilirsiniz. Web Sunucularında Çalışmaz!!
deepai.setApiKey(Config.DEEPAI); // Users API Key

const Language = require('../language'); 
const Lang = Language.getString('deepai'); // Language Support
var noAPI = ''
if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
  noAPI = '*DeepAI API Key Bulunamadı!* \n*Lütfen Aşağıdaki Adresten Gerekli Adımları Takip Edin!*' + '\n\n*URL:* https://github.com/phaticusthiccy/WhatsAsenaDuplicated/wiki/DeepAI-API-Key#-deepai-api-key-al%C4%B1c%C4%B1'
} else {
  noAPI = '*DeepAI API Key Not Found!*'
}

if (Config.WORKTYPE == 'private') {
    Asena.addCommand({pattern: 'deepai$', fromMe: true, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.sendMessage('💻 Uso: */colorai*\nℹ️ Descripción: Colorea la foto que esté en blanco y negro.\n\n💻 Uso: */dreamai*\nℹ️ Descripción: Aplica efecto de ensueño a la foto.\n\n💻 Uso: */toonai*\nℹ️ Descripción: Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n💻 Uso: */nudityai*\nℹ️ Descripción: Muestra el valor NSFW entre 1 y 0 en la foto.\n\n💻 Uso: */ganstyle*\nℹ️ Descripción: Coloca un filtro a la foto respondida.\n\n💻 Uso: */neuraltalkai*\nℹ️ Descripción: Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n💻 Uso: */textai <texto>*\nℹ️ Descripción: Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n Ejemplo: /textai water\n\nSi quieres traducirlo puedes hacerlo con el comando /trt en es respondiendo al texto.\n\n⚠️ *Todas las herramientas aquí funcionan con aprendizaje profundo. Cuanto más lo use, funcionará mejor ya que más información almacenará. (Inteligencia Artificial)* ```de preferencia utiliza solo caracteres en inglés.```\n\n*Gracias por usar el bot Skueletor ❤*');
        } else {
            await message.sendMessage('💻 Uso: */colorai*\nℹ️ Descripción: Colorea la foto que esté en blanco y negro.\n\n💻 Uso: */dreamai*\nℹ️ Descripción: Aplica efecto de ensueño a la foto.\n\n💻 Uso: */toonai*\nℹ️ Descripción: Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n💻 Uso: */nudityai*\nℹ️ Descripción: Muestra el valor NSFW entre 1 y 0 en la foto.\n\n💻 Uso: */ganstyle*\nℹ️ Descripción: Coloca un filtro a la foto respondida.\n\n💻 Uso: */neuraltalkai*\nℹ️ Descripción: Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n💻 Uso: */textai <texto>*\nℹ️ Descripción: Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n Ejemplo: /textai water\n\nSi quieres traducirlo puedes hacerlo con el comando /trt en es respondiendo al texto.\n\n⚠️ *Todas las herramientas aquí funcionan con aprendizaje profundo. Cuanto más lo use, funcionará mejor ya que más información almacenará. (Inteligencia Artificial)* ```de preferencia utiliza solo caracteres en inglés.```\n\n*Gracias por usar el bot Skueletor ❤*');
        }
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var image_an = await WhatsAsenaStack.face()
        var webimage = await axios.get(image_an, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: true, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var anim_img = await WhatsAsenaStack.anime()
        var IMGWADATA = await axios.get(anim_img, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizando... 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Mezclando... 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Mejorando... 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msgdata = await WhatsAsenaStack.mood(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: msgdata,
        });
        await message.reply(`*Mood:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI); 
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Una noche estrellada... 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Leyendo... 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Producción:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msg_tt = await WhatsAsenaStack.tti(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text2img", {
            text: msg_tt,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Cariturizando... 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Buscando NSFW... 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Producción:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var text_ai = await WhatsAsenaStack.text(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text-generator", {
            text: text_ai
        });
        await message.client.sendMessage(message.jid, `*Artículo:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: true, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI); 
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Creando... ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {
    Asena.addCommand({pattern: 'deepai$', fromMe: false, deleteCommand: false, desc: Lang.DEEPAI_DESC}, (async (message, match) => {
        if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
            await message.sendMessage('💻 Uso: */colorai*\nℹ️ Descripción: Colorea la foto que esté en blanco y negro.\n\n💻 Uso: */dreamai*\nℹ️ Descripción: Aplica efecto de ensueño a la foto.\n\n💻 Uso: */toonai*\nℹ️ Descripción: Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n💻 Uso: */nudityai*\nℹ️ Descripción: Muestra el valor NSFW entre 1 y 0 en la foto.\n\n💻 Uso: */ganstyle*\nℹ️ Descripción: Coloca un filtro a la foto respondida.\n\n💻 Uso: */neuraltalkai*\nℹ️ Descripción: Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n💻 Uso: */textai <texto>*\nℹ️ Descripción: Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n Ejemplo: /textai water\n\nSi quieres traducirlo puedes hacerlo con el comando /trt en es respondiendo al texto.\n\n⚠️ *Todas las herramientas aquí funcionan con aprendizaje profundo. Cuanto más lo use, funcionará mejor ya que más información almacenará. (Inteligencia Artificial)* ```de preferencia utiliza solo caracteres en inglés.```\n\n*Gracias por usar el bot Skueletor ❤*');
        } else {
            await message.sendMessage('💻 Uso: */colorai*\nℹ️ Descripción: Colorea la foto que esté en blanco y negro.\n\n💻 Uso: */dreamai*\nℹ️ Descripción: Aplica efecto de ensueño a la foto.\n\n💻 Uso: */toonai*\nℹ️ Descripción: Convierte la cara de la foto en un personaje de dibujos animados con Inteligencia Artificial.\n\n💻 Uso: */nudityai*\nℹ️ Descripción: Muestra el valor NSFW entre 1 y 0 en la foto.\n\n💻 Uso: */ganstyle*\nℹ️ Descripción: Coloca un filtro a la foto respondida.\n\n💻 Uso: */neuraltalkai*\nℹ️ Descripción: Trata de explica lo que está pasando en la foto con Inteligencia Artificial (Modo BETA).\n\n💻 Uso: */textai <texto>*\nℹ️ Descripción: Crea una historia artificial para ti a partir de tu oración, por ahora solo en inglés.\n Ejemplo: /textai water\n\nSi quieres traducirlo puedes hacerlo con el comando /trt en es respondiendo al texto.\n\n⚠️ *Todas las herramientas aquí funcionan con aprendizaje profundo. Cuanto más lo use, funcionará mejor ya que más información almacenará. (Inteligencia Artificial)* ```de preferencia utiliza solo caracteres en inglés.```\n\n*Gracias por usar el bot Skueletor ❤*');
        }
    }));
    Asena.addCommand({pattern: 'faceai$', fromMe: false, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var image_an = await WhatsAsenaStack.face()
        var webimage = await axios.get(image_an, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(webimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
    }));
    Asena.addCommand({pattern: 'animai', fromMe: false, deleteCommand: false, dontAddCommandList: true }, (async (message, match) => {
        var anim_img = await WhatsAsenaStack.anime()
        var IMGWADATA = await axios.get(anim_img, {responseType: 'arraybuffer'})
        await message.sendMessage(
            Buffer.from(IMGWADATA.data),
            MessageType.image, 
            { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'}
        )
    }));
    Asena.addCommand({pattern: 'colorai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => { 
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);   
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Colorizando... 🎨',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("colorizer", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'waifuai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Mezclando... 🧩',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("waifu2x", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'superai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);  
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Mejorando... 🖌️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("torch-srgan", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'moodai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msgdata = await WhatsAsenaStack.mood(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("sentiment-analysis", {
            text: msgdata,
        });
        await message.reply(`*Estado de ánimo:* ${resp.output}`);
    }));
    Asena.addCommand({pattern: 'dreamai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {    
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Una noche estrellada... 🌃',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("deepdream", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'neuraltalkai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Leyendo... 🙇🏻',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("neuraltalk", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.reply(`*Output:* ${resp.output}`);
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'ttiai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var msg_tt = await WhatsAsenaStack.tti(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text2img", {
            text: msg_tt,
        });
        var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
    }));
    Asena.addCommand({pattern: 'toonai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Cariturizando... 🌟',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("toonify", {
                    image: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, { mimetype: Mimetype.jpg})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'nudityai$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {  
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Buscando NSFW... 🔥',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("content-moderation", {
                    image: fs.createReadStream("./output.jpg"),
                });
                await message.client.sendMessage(message.jid, `*Producción:* ${resp.output.nsfw_score}`, MessageType.text, { quoted: message.data });
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    Asena.addCommand({pattern: 'textai ?(.*)', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (match[1] === '') return await message.sendMessage(Lang.TEXT);
        var text_ai = await WhatsAsenaStack.text(match[1], Config.DEEPAI)
        var resp = await deepai.callStandardApi("text-generator", {
            text: text_ai
        });
        await message.client.sendMessage(message.jid, `*Artículo:*\n ${resp.output}`, MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'ganstyle$', fromMe: false, deleteCommand: false, dontAddCommandList: true}, (async (message, match) => {   
        if (!Config.DEEPAI) return await message.sendMessage(noAPI);
        if (message.reply_message === false) return await message.sendMessage('```¡Necesito que respondas a una foto!```');
        var downloading = await message.client.sendMessage(message.jid,'Creando... ♻️',MessageType.text);
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });
        ffmpeg(location)
            .save('output.jpg')
            .on('end', async () => {
                var resp = await deepai.callStandardApi("fast-style-transfer", {
                    style: Config.GANSTYLE,
                    content: fs.createReadStream("./output.jpg"),
                });
                var respoimage = await axios.get(`${resp.output_url}`, { responseType: 'arraybuffer' })
                await message.sendMessage(Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'Hecho por *Skueletor*'})
            });
            return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
