/* Copyright (C) 2020 Yusuf Usta.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

WhatsAsena - Yusuf Usta
*/

const Asena = require('../events');
const {MessageType,Mimetype} = require('@adiwajshing/baileys');
const translatte = require('translatte');
const config = require('../config');
const LanguageDetect = require('languagedetect');
const WhatsAsenaStack = require('whatsasena-npm');
const lngDetector = new LanguageDetect();
const Heroku = require('heroku-client');
const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;
//============================== LYRICS =============================================
const axios = require('axios');
const { requestLyricsFor, requestAuthorFor, requestTitleFor, requestIconFor } = require("solenolyrics");
const solenolyrics= require("solenolyrics"); 
//============================== CURRENCY =============================================
const { exchangeRates } = require('exchange-rates-api');
const ExchangeRatesError = require('exchange-rates-api/src/exchange-rates-error.js')
//============================== TTS ==================================================
const fs = require('fs');
const https = require('https');
const googleTTS = require('google-translate-tts');
//=====================================================================================
//============================== YOUTUBE ==============================================
const ytdl = require('ytdl-core');
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search' )
const got = require("got");
const ID3Writer = require('browser-id3-writer');
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
    clientId: 'acc6302297e040aeb6e4ac1fbdfd62c3',
    clientSecret: '0e8439a1280a43aba9a5bc0a16f3f009'
});
//=====================================================================================
const Language = require('../language');
const Lang = Language.getString('scrapers');
const Glang = Language.getString('github');
const Slang = Language.getString('lyrics');
const Clang = Language.getString('covid');

const wiki = require('wikijs').default;
var gis = require('g-i-s');

var dlang_dsc = ''
var closer_res = ''
var dlang_lang = ''
var dlang_similarity = ''
var dlang_other = ''
var dlang_input = ''

if (config.LANG == 'TR') {
    dlang_dsc = 'Yanıtlanan mesajın dilini tahmin eder.'
    closer_res = 'En Yakın Sonuç:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Benzerlik:'
    dlang_other = 'Diğer Diller'
    dlang_input = 'İşlenen Metin:'
}
if (config.LANG == 'EN') {
    dlang_dsc = 'Guess the language of the replied message.'
    closer_res = 'Closest Result:'
    dlang_lang = 'Language:'
    dlang_similarity = 'Similarity:'
    dlang_other = 'Other Languages'
    dlang_input = 'Processed Text:'
}
if (config.LANG == 'AZ') {
    dlang_dsc = 'Cavablanan mesajın dilini təxmin edin.'
    closer_res = 'Ən yaxın nəticə:'
    dlang_lang = 'Dil:'
    dlang_similarity = 'Bənzərlik:'
    dlang_other = 'Başqa Dillər'
    dlang_input = 'İşlənmiş Mətn:'
}
if (config.LANG == 'ML') {
    dlang_dsc = 'മറുപടി നൽകിയ സന്ദേശത്തിന്റെ ഭാഷ ess ഹിക്കുക.'
    closer_res = 'ഏറ്റവും അടുത്ത ഫലം:'
    dlang_lang = 'നാവ്:'
    dlang_similarity = 'സമാനത:'
    dlang_other = 'മറ്റ് ഭാഷകൾ'
    dlang_input = 'പ്രോസസ്സ് ചെയ്ത വാചകം:'
}
if (config.LANG == 'HI') {
    dlang_dsc = 'उत्तर दिए गए संदेश की भाषा का अनुमान लगाएं'
    closer_res = 'निकटतम परिणाम:'
    dlang_lang = 'जुबान:'
    dlang_similarity = 'समानता:'
    dlang_other = 'अन्य भाषाएँ'
    dlang_input = 'संसाधित पाठ:'
}
if (config.LANG == 'ES') {
    dlang_dsc = 'Adivina el idioma del mensaje respondido.'
    closer_res = 'Resultado más cercano:'
    dlang_lang = 'Lenguaje:'
    dlang_similarity = 'Semejanza:'
    dlang_other = 'Otros idiomas:'
    dlang_input = 'Texto procesado:'
}
if (config.LANG == 'PT') {
    dlang_dsc = 'Adivinhe o idioma da mensagem respondida.'
    closer_res = 'Resultado mais próximo:'
    dlang_lang = 'Língua:'
    dlang_similarity = 'Similaridade:'
    dlang_other = 'Outras línguas'
    dlang_input = 'Texto Processado:'
}
if (config.LANG == 'ID') {
    dlang_dsc = 'Tebak bahasa pesan yang dibalas.'
    closer_res = 'Hasil Terdekat:'
    dlang_lang = 'Lidah:'
    dlang_similarity = 'Kesamaan:'
    dlang_other = 'Bahasa Lainnya'
    dlang_input = 'Teks yang Diproses:'
}
if (config.LANG == 'RU') {
    dlang_dsc = 'Угадай язык ответного сообщения.'
    closer_res = 'Ближайший результат:'
    dlang_lang = 'Язык:'
    dlang_similarity = 'Сходствo:'
    dlang_other = 'Другие языки'
    dlang_input = 'Обработанный текст:'
}


if (config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: true}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        succ_on = 'Antilink Başarıyla Açıldı!'
        succ_off = 'Antilink Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'Antilink alətini aktivləşdirir.'
        alr_on = 'Antilink hazırda açıqdır!'
        alr_off = 'Antilink hazırda bağlıdır!'
        succ_on = 'Antilink Uğurla Açıldı!'
        succ_off = 'Antilink Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        succ_on = 'एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = 'एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = 'ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = 'ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        succ_on = 'Антилинк успешно открыт!'
        succ_off = 'Антилинк успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '¡Antilink ya está abierto!'
        alr_off = '¡Antilink está cerrado actualmente!'
        succ_on = '¡Antilink se abrió con éxito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    Asena.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.ANTILINK == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.ANTI_LINK !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    var auto_dsc = ''
    var alr_on_bio = ''
    var alr_off_bio = ''
    var succ_on_bio = ''
    var succ_off_bio = ''
    if (config.LANG == 'TR') {
        auto_dsc = 'Biyografinize canlı saat ekleyin!'
        alr_on_bio = 'Autobio halihazırda açık!'
        alr_off_bio = 'Autobio halihazırda kapalı!'
        succ_on_bio = 'Autobio Başarıyla Açıldı!'
        succ_off_bio = 'Autobio Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        auto_dsc = 'Add live clock to your bio!'
        alr_on_bio = 'Autobio is already open!'
        alr_off_bio = 'Autobio is currently closed!'
        succ_on_bio = 'Autobio Opened Successfully!'
        succ_off_bio = 'Autobio Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        auto_dsc = 'Bio-ya canlı saat əlavə et!'
        alr_on_bio = 'Autobio hazırda açıqdır!'
        alr_off_bio = 'Autobio hazırda bağlıdır!'
        succ_on_bio = 'Autobio Uğurla Açıldı!'
        succ_off_bio = 'Autobio Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        auto_dsc = 'अपने बायो में लाइव घड़ी जोड़ें!'
        alr_on_bio = 'Autobio पहले से ही खुला है!'
        alr_off_bio = 'Autobio वर्तमान में बंद है!'
        succ_on_bio = 'Autobio सफलतापूर्वक खोला गया!'
        succ_off_bio = 'Autobio सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        auto_dsc = 'നിങ്ങളുടെ ബയോയിലേക്ക് തത്സമയ ക്ലോക്ക് ചേർക്കുക!'
        alr_on_bio = 'Autobio ഇതിനകം തുറന്നു!'
        alr_off_bio = 'Autobio നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on_bio = 'Autobio വിജയകരമായി തുറന്നു!'
        succ_off_bio = 'Autobio വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        auto_dsc = 'Adicione um relógio ao vivo à sua biografia!'
        alr_on_bio = 'O Autobio já está aberto!'
        alr_off_bio = 'Autobio está fechado no momento!'
        succ_on_bio = 'Autobio aberto com sucesso!'
        succ_off_bio = 'Autobio fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        auto_dsc = 'Добавьте живые часы в свою биографию!'
        alr_on_bio = 'Autobio уже открыт!'
        alr_off_bio = 'Autobio сейчас закрыт!'
        succ_on_bio = 'Autobio успешно открыт!'
        succ_off_bio = 'Autobio успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        auto_dsc = '¡Agrega un reloj en vivo a tu biografía!'
        alr_on_bio = '¡Autobio ya está abierto!'
        alr_off_bio = '¡Autobio está cerrado actualmente!'
        succ_on_bio = '¡Autobio se abrió con éxito!'
        succ_off_bio = 'Autobio cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        auto_dsc = 'Tambahkan jam langsung ke bio Anda!'
        alr_on_bio = 'Autobio sudah terbuka!'
        alr_off_bio = 'Autobio saat ini ditutup!'
        succ_on_bio = 'Autobio Berhasil Dibuka!'
        succ_off_bio = 'Autobio Berhasil Ditutup!'
    }
    Asena.addCommand({pattern: 'autobio ?(.*)', fromMe: true, desc: auto_dsc, usage: '.autobio on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.AUTOBIO == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BIO']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on_bio + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.AUTOBIO !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off_bio + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['AUTO_BIO']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off_bio + '*', MessageType.text)
            }
        }
    }));
    Asena.addCommand({pattern: 'detectlang$', fromMe: true, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text);
    }));
    Asena.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: true}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));

    if (config.LANG == 'TR' || config.LANG == 'AZ') {

        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = 'tr',
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    else {
        Asena.addCommand({pattern: 'tts (.*)', fromMe: true, desc: Lang.TTS_DESC}, (async (message, match) => {

            if(match[1] === undefined || match[1] == "")
                return;
    
            let 
                LANG = config.LANG.toLowerCase(),
                ttsMessage = match[1],
                SPEED = 1.0

            if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
                LANG = langMatch[1]
                ttsMessage = ttsMessage.replace(langMatch[0], "")
            } 
            if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
                SPEED = parseFloat(speedMatch[1])
                ttsMessage = ttsMessage.replace(speedMatch[0], "")
            }
    
            var buffer = await googleTTS.synthesize({
                text: ttsMessage,
                voice: LANG
            });
            await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
        }));
    }
    Asena.addCommand({pattern: 'song ?(.*)', fromMe: true, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({pattern: 'video ?(.*)', fromMe: true, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Asena.addCommand({pattern: 'yt ?(.*)', fromMe: true, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'wiki ?(.*)', fromMe: true, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'img ?(.*)', fromMe: true, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        
        var img_list = await WhatsAsenaStack.search_image(match[1])
        await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text);
        var img1 = await axios.get(img_list.link1, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img1.data), MessageType.image)
        var img2 = await axios.get(img_list.link2, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img2.data), MessageType.image)
        var img3 = await axios.get(img_list.link3, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img3.data), MessageType.image)
        var img4 = await axios.get(img_list.link4, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img4.data), MessageType.image)
        var img5 = await axios.get(img_list.link5, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img5.data), MessageType.image)
    }));

    Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: true, desc: Slang.LY_DESC }, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));

}
else if (config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'trt(?: |$)(\\S*) ?(\\S*)', desc: Lang.TRANSLATE_DESC, usage: Lang.TRANSLATE_USAGE, fromMe: false}, (async (message, match) => {

        if (!message.reply_message) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY,MessageType.text);
        }

        ceviri = await translatte(message.reply_message.message, {from: match[1] === '' ? 'auto' : match[1], to: match[2] === '' ? config.LANG : match[2]});
        if ('text' in ceviri) {
            return await message.reply('*▶️ ' + Lang.LANG + ':* ```' + (match[1] === '' ? 'auto' : match[1]) + '```\n'
            + '*◀️ ' + Lang.FROM + '*: ```' + (match[2] === '' ? config.LANG : match[2]) + '```\n'
            + '*🔎 ' + Lang.RESULT + ':* ```' + ceviri.text + '```');
        } else {
            return await message.client.sendMessage(message.jid,Lang.TRANSLATE_ERROR,MessageType.text)
        }
    }));
    Asena.addCommand({pattern: 'detectlang$', fromMe: false, desc: dlang_dsc}, (async (message, match) => {

        if (!message.reply_message) return await message.client.sendMessage(message.jid,Lang.NEED_REPLY, MessageType.text)
        const msg = message.reply_message.text
        var ldet = lngDetector.detect(msg)
        async function upperfirstLetter(letter) {
            return letter.charAt(0).toUpperCase() + letter.slice(1).toLowerCase();
        }
        var cls1 = await upperfirstLetter(ldet[0][0])
        var cls2 = ldet[0][1].toString()
        var cls3 = await upperfirstLetter(ldet[1][0])
        var cls4 = ldet[1][1].toString()
        var cls5 = await upperfirstLetter(ldet[2][0])
        var cls6 = ldet[2][1].toString()
        var cls7 = await upperfirstLetter(ldet[3][0])
        var cls8 = ldet[3][1].toString()
        const res_1 = '*' + dlang_input + '* ' + '_' + msg + '_ \n'
        const res_2 = '*' + closer_res + '* ' + '_' + cls1 + '_\n*' + dlang_similarity + '* ' + '_' + cls2 + '_ \n\n'
        const res_3 = '```[ ' + dlang_other + ' ]```\n\n'
        const res_4 = '#2 *' + dlang_lang + '* ' + '_' + cls3 + '_\n*' + dlang_similarity + '* ' + '_' + cls4 + '_ \n'
        const res_5 = '#3 *' + dlang_lang + '* ' + '_' + cls5 + '_\n*' + dlang_similarity + '* ' + '_' + cls6 + '_ \n'
        const res_6 = '#4 *' + dlang_lang + '* ' + '_' + cls7 + '_\n*' + dlang_similarity + '* ' + '_' + cls8 + '_'
        const rep_7 = res_1 + res_2 + res_3 + res_4 + res_5 + res_6
        await message.client.sendMessage(message.jid,rep_7,MessageType.text, { quoted: message.data });
    }));
    Asena.addCommand({pattern: 'currency(?: ([0-9.]+) ([a-zA-Z]+) ([a-zA-Z]+)|$|(.*))', fromMe: false}, (async (message, match) => {

        if(match[1] === undefined || match[2] == undefined || match[3] == undefined) {
            return await message.client.sendMessage(message.jid,Lang.CURRENCY_ERROR,MessageType.text);
        }
        let opts = {
            amount: parseFloat(match[1]).toFixed(2).replace(/\.0+$/,''),
            from: match[2].toUpperCase(),
            to: match[3].toUpperCase()
        }
        try {
            result = await exchangeRates().latest().symbols([opts.to]).base(opts.from).fetch()
            result = parseFloat(result).toFixed(2).replace(/\.0+$/,'')
            await message.reply(`\`\`\`${opts.amount} ${opts.from} = ${result} ${opts.to}\`\`\``)
        }
        catch(err) {
            if (err instanceof ExchangeRatesError) 
                await message.client.sendMessage(message.jid,Lang.INVALID_CURRENCY,MessageType.text)
            else {
                await message.client.sendMessage(message.jid,Lang.UNKNOWN_ERROR,MessageType.text)
                console.log(err)
            }
        }
    }));
    var l_dsc = ''
    var alr_on = ''
    var alr_off = ''
    var succ_on = ''
    var succ_off = ''
    if (config.LANG == 'TR') {
        l_dsc = 'Antilink aracını etkinleştirir.'
        alr_on = 'Antilink halihazırda açık!'
        alr_off = 'Antilink halihazırda kapalı!'
        succ_on = 'Antilink Başarıyla Açıldı!'
        succ_off = 'Antilink Başarıyla Kapatıldı!'
    }
    if (config.LANG == 'EN') {
        l_dsc = 'Activates the Antilink tool.'
        alr_on = 'Antilink is already open!'
        alr_off = 'Antilink is currently closed!'
        succ_on = 'Antilink Opened Successfully!'
        succ_off = 'Antilink Closed Successfully!'
    }
    if (config.LANG == 'AZ') {
        l_dsc = 'Antilink alətini aktivləşdirir.'
        alr_on = 'Antilink hazırda açıqdır!'
        alr_off = 'Antilink hazırda bağlıdır!'
        succ_on = 'Antilink Uğurla Açıldı!'
        succ_off = 'Antilink Uğurla Bağlandı!'
    }
    if (config.LANG == 'HI') {
        l_dsc = 'एंटीलिंक टूल को सक्रिय करता है।'
        alr_on = 'एंटीलिंक पहले से ही खुला है!'
        alr_off = 'एंटीलिंक वर्तमान में बंद है!'
        succ_on = 'एंटीलिंक सफलतापूर्वक खोला गया!'
        succ_off = 'एंटीलिंक सफलतापूर्वक बंद!'
    }
    if (config.LANG == 'ML') {
        l_dsc = 'ആന്റിലിങ്ക് ഉപകരണം സജീവമാക്കുന്നു.'
        alr_on = 'ആന്റിലിങ്ക് ഇതിനകം തുറന്നു!'
        alr_off = 'ആന്റിലിങ്ക് നിലവിൽ അടച്ചിരിക്കുന്നു!'
        succ_on = 'ആന്റിലിങ്ക് വിജയകരമായി തുറന്നു!'
        succ_off = 'ആന്റിലിങ്ക് വിജയകരമായി അടച്ചു!'
    }
    if (config.LANG == 'PT') {
        l_dsc = 'Ativa a ferramenta Antilink.'
        alr_on = 'O Antilink já está aberto!'
        alr_off = 'Antilink está fechado no momento!'
        succ_on = 'Antilink aberto com sucesso!'
        succ_off = 'Antilink fechado com sucesso!'
    }
    if (config.LANG == 'RU') {
        l_dsc = 'Активирует инструмент Antilink.'
        alr_on = 'Антилинк уже открыт!'
        alr_off = 'Антилинк сейчас закрыт!'
        succ_on = 'Антилинк успешно открыт!'
        succ_off = 'Антилинк успешно закрыт!'
    }
    if (config.LANG == 'ES') {
        l_dsc = 'Activa la herramienta Antilink.'
        alr_on = '¡Antilink ya está abierto!'
        alr_off = '¡Antilink está cerrado actualmente!'
        succ_on = '¡Antilink se abrió con éxito!'
        succ_off = 'Antilink cerrado correctamente!'
    }
    if (config.LANG == 'ID') {
        l_dsc = 'Mengaktifkan alat Antilink.'
        alr_on = 'Antilink sudah terbuka!'
        alr_off = 'Antilink saat ini ditutup!'
        succ_on = 'Antilink Berhasil Dibuka!'
        succ_off = 'Antilink Berhasil Ditutup!'
    }
    Asena.addCommand({pattern: 'antilink ?(.*)', fromMe: true, desc: l_dsc, usage: '.antilink on / off' }, (async (message, match) => {
        if (match[1] == 'on') {
            if (config.ANTILINK == 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_on + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'true'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_on + '*', MessageType.text)
            }
        }
        else if (match[1] == 'off') {
            if (config.ANTI_LINK !== 'true') {
                return await message.client.sendMessage(message.jid, '*' + alr_off + '*', MessageType.text)
            }
            else {
                await heroku.patch(baseURI + '/config-vars', { 
                    body: { 
                        ['ANTI_LINK']: 'false'
                    } 
                });
                await message.client.sendMessage(message.jid, '*' + succ_off + '*', MessageType.text)
            }
        }
    }));
    Asena.addCommand({pattern: 'tts (.*)', fromMe: false, desc: Lang.TTS_DESC}, (async (message, match) => {

        if(match[1] === undefined || match[1] == "")
            return;
    
        let 
            LANG = config.LANG.toLowerCase(),
            ttsMessage = match[1],
            SPEED = 1.0

        if(langMatch = match[1].match("\\{([a-z]{2})\\}")) {
            LANG = langMatch[1]
            ttsMessage = ttsMessage.replace(langMatch[0], "")
        } 
        if(speedMatch = match[1].match("\\{([0].[0-9]+)\\}")) {
            SPEED = parseFloat(speedMatch[1])
            ttsMessage = ttsMessage.replace(speedMatch[0], "")
        }
    
        var buffer = await googleTTS.synthesize({
            text: ttsMessage,
            voice: LANG
        });
        await message.client.sendMessage(message.jid,buffer, MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true});
    }));

    Asena.addCommand({pattern: 'song ?(.*)', fromMe: false, desc: Lang.SONG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_TEXT_SONG,MessageType.text);    
        let arama = await yts(match[1]);
        arama = arama.all;
        if(arama.length < 1) return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_SONG,MessageType.text);

        let title = arama[0].title.replace(' ', '+');
        let stream = ytdl(arama[0].videoId, {
            quality: 'highestaudio',
        });
    
        got.stream(arama[0].image).pipe(fs.createWriteStream(title + '.jpg'));
        ffmpeg(stream)
            .audioBitrate(320)
            .save('./' + title + '.mp3')
            .on('end', async () => {
                const writer = new ID3Writer(fs.readFileSync('./' + title + '.mp3'));
                writer.setFrame('TIT2', arama[0].title)
                    .setFrame('TPE1', [arama[0].author.name])
                    .setFrame('APIC', {
                        type: 3,
                        data: fs.readFileSync(title + '.jpg'),
                        description: arama[0].description
                    });
                writer.addTag();

                reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_SONG,MessageType.text);
                await message.client.sendMessage(message.jid,Buffer.from(writer.arrayBuffer), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false});
            });
    }));

    Asena.addCommand({pattern: 'video ?(.*)', fromMe: false, desc: Lang.VIDEO_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_VIDEO,MessageType.text);    
    
        var VID = '';
        try {
            if (match[1].includes('watch')) {
                var tsts = match[1].replace('watch?v=', '')
                var alal = tsts.split('/')[3]
                VID = alal
            } else {     
                VID = match[1].split('/')[3]
            }
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NO_RESULT,MessageType.text);
        }
        var reply = await message.client.sendMessage(message.jid,Lang.DOWNLOADING_VIDEO,MessageType.text);

        var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
        yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));

        yt.on('end', async () => {
            reply = await message.client.sendMessage(message.jid,Lang.UPLOADING_VIDEO,MessageType.text);
            await message.client.sendMessage(message.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {mimetype: Mimetype.mp4});
        });
    }));

    Asena.addCommand({pattern: 'yt ?(.*)', fromMe: false, desc: Lang.YT_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.GETTING_VIDEOS,MessageType.text);

        try {
            var arama = await yts(match[1]);
        } catch {
            return await message.client.sendMessage(message.jid,Lang.NOT_FOUND,MessageType.text);
        }
    
        var mesaj = '';
        arama.all.map((video) => {
            mesaj += '*' + video.title + '* - ' + video.url + '\n'
        });

        await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'wiki ?(.*)', fromMe: false, desc: Lang.WIKI_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);    
        var reply = await message.client.sendMessage(message.jid,Lang.SEARCHING,MessageType.text);

        var arama = await wiki({ apiUrl: 'https://' + config.LANG + '.wikipedia.org/w/api.php' })
            .page(match[1]);

        var info = await arama.rawContent();
        await message.client.sendMessage(message.jid, info, MessageType.text);
        await reply.delete();
    }));

    Asena.addCommand({pattern: 'img ?(.*)', fromMe: false, desc: Lang.IMG_DESC}, (async (message, match) => { 

        if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORDS,MessageType.text);
        
        var img_list = await WhatsAsenaStack.search_image(match[1])
        await message.client.sendMessage(message.jid, Lang.IMG.format(5, match[1]), MessageType.text);
        var img1 = await axios.get(img_list.link1, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img1.data), MessageType.image)
        var img2 = await axios.get(img_list.link2, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img2.data), MessageType.image)
        var img3 = await axios.get(img_list.link3, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img3.data), MessageType.image)
        var img4 = await axios.get(img_list.link4, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img4.data), MessageType.image)
        var img5 = await axios.get(img_list.link5, {responseType: 'arraybuffer'})
        await message.sendMessage(Buffer.from(img5.data), MessageType.image)
    }));
    
    Asena.addCommand({pattern: 'lyric ?(.*)', fromMe: false, desc: Slang.LY_DESC }, (async (message, match) => {

        if (match[1] === '') return await message.client.sendMessage(message.jid, Slang.NEED, MessageType.text);

        var aut = await solenolyrics.requestLyricsFor(`${match[1]}`); 
        var son = await solenolyrics.requestAuthorFor(`${match[1]}`);
        var cov = await solenolyrics.requestIconFor(`${match[1]}`);
        var tit = await solenolyrics.requestTitleFor(`${match[1]}`);

        var buffer = await axios.get(cov, {responseType: 'arraybuffer'});

        await message.client.sendMessage(message.jid, Buffer.from(buffer.data),  MessageType.image, {caption: `*${Slang.ARAT}* ` + '```' + `${match[1]}` + '```' + `\n*${Slang.BUL}* ` + '```' + tit + '```' + `\n*${Slang.AUT}* ` + '```' + son + '```' + `\n*${Slang.SLY}*\n\n` + aut });

    }));
}
