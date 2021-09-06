const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const con = require('../config');

const ZAR = "Tira los dados al azar."
const SEN = "🍀 ```¡Los dados están girando!``` 🎲"
const SON = "```Resultado:``` "

if (con.WORKTYPE === 'private') {

        Asena.addCommand({pattern: 'dado', fromMe: true, desc: ZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "⚀ *1* ⚀";
            r_text[1] = "⚁ *2* ⚁";
            r_text[2] = "⚂ *3* ⚂";
            r_text[3] = "⚃ *4* ⚃";
            r_text[4] = "⚄ *5* ⚄";
            r_text[5] = "⚅ *6* ⚅";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SON + `${r_text[i]}`, MessageType.text);

        }));
    }
    else if (con.WORKTYPE === 'public') {

        Asena.addCommand({pattern: 'dado', fromMe: false, desc: ZAR}, (async (message, match) => {

            await message.client.sendMessage(message.jid, SEN, MessageType.text);
            await new Promise(r => setTimeout(r, 4000));

            // Numbers
            var r_text = new Array ();
            r_text[0] = "⚀ *1* ⚀";
            r_text[1] = "⚁ *2* ⚁";
            r_text[2] = "⚂ *3* ⚂";
            r_text[3] = "⚃ *4* ⚃";
            r_text[4] = "⚄ *5* ⚄";
            r_text[5] = "⚅ *6* ⚅";

            var i = Math.floor(6*Math.random())

            await message.client.sendMessage(message.jid, SON + `${r_text[i]}`, MessageType.text);

        }));
    }
