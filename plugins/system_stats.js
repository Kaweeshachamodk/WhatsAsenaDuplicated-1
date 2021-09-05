/* Copyright (C) 2020 Yusuf Usta.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
WhatsAsena - Yusuf Usta
Developer & Co-Founder - Phaticusthiccy
*/

const Asena = require('../events');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const fs = require('fs');

const Language = require('../language');
const Lang = Language.getString('system_stats');

if (Config.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
    if (Config.ALIVEMSG == 'default') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/LogoSkuel.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: '╔────────────────────╗\n```El bot Skueletor está funcionando correctamente 🐺```\n\n*Versión:* ```'+Config.VERSION+'```\n*Creador:* https://telegram.dog/DKzippO\n*Grupo de Soporte:* https://chat.whatsapp.com/Fc1FbIaYlvxLRkJq1q1WQP\n*Canal de Telegram:* https://t.me/SkueletorSupport\n\nPara obtener la lista de los comandos escribe /commands\nSkueletor❤️‍🔥\n╚────────────────────╝' }
        )
    }
        
    else if (Config.ALIVEMSG == 'SKUE') {
            
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/LogoSkuel.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "====*🐺 *Skueletor* 🐺*====\n\n*Versión:* ```'+Config.VERSION+'```\n*Grado:* Fundador ❤" }
        )
    }
    }));

Asena.addCommand({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
     );
    }));
}

else if (Config.WORKTYPE == 'public') {
    
Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

    if (Config.ALIVEMSG == 'default') {
            
            await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/LogoSkuel.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: '╔────────────────────╗\n```El bot Skueletor está funcionando correctamente 🐺```\n\n*Versión:* ```'+Config.VERSION+'```\n*Creador:* https://telegram.dog/DKzippO\n*Grupo de Soporte:* https://chat.whatsapp.com/Fc1FbIaYlvxLRkJq1q1WQP\n*Canal de Telegram:* https://t.me/SkueletorSupport\n\nPara obtener la lista de los comandos escribe /commands\nSkueletor❤️‍🔥\n╚────────────────────╝'}
        )
    }
        
    else if (Config.ALIVEMSG == 'SKUE') {
            
        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("media/gif/LogoSkuel.mp4"),
            MessageType.video, 
            { mimetype: Mimetype.mpeg, caption: "====*🐺 *Skueletor* 🐺*====\n\n*Versión:* 1.0.1\n*Grado:* Fundador ❤" }
        )
    }
    }));

Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
    const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
    await message.sendMessage(
        '```' + child + '```', MessageType.text
     );
    }));
}
