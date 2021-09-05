const Asena = require('../events');
const { MessageType, Mimetype, GroupSettingChange, MessageOptions } = require('@adiwajshing/baileys');
const Axios = require('axios');
const fs = require('fs');
const ffmpeg = require('fluent-ffmpeg');
const {execFile} = require('child_process');
const CON = require('../config');
const Language = require('../language'); 
const Lang = Language.getString('whois'); // Language Support
var ADMİN_USER = ''
var USER_USER = ''
var TR_USER = ''
var Hİ_USER = ''
var AZ_USER = ''
var SRİ_USER = ''
var RU_USER = ''
var USA_USER = ''
var OTHER = ''
if (CON.LANG == 'TR') ADMİN_USER = '*Admin Sayısı:*', USER_USER = '*Üye Sayısı:*', TR_USER = '*Türk Üye Sayısı:*', Hİ_USER = '*Hint Üye Sayısı:*', AZ_USER = '*Azeri Üye Sayısı:*', SRİ_USER = '*Sri Lanka Üye Sayısı:*', RU_USER = '*Rus Üye Sayısı:*', USA_USER = '*ABD Üye Sayısı:*', OTHER = '*Diğer Üye Sayısı:*'
if (CON.LANG == 'EN') ADMİN_USER = '*Admin Count:*', USER_USER = '*Member Count:*', TR_USER = '*Turkish Member Count:*', Hİ_USER = '*Indian Member Count:*', AZ_USER = '*Azerbayjan Member Count:*', SRİ_USER = '*Sri Lanka Member Count:*', RU_USER = '*Russian Member Count:*', USA_USER = '*USA Member Count:*', OTHER = '*Other Member Count:*'
if (CON.LANG == 'AZ') ADMİN_USER = '*Admin sayı:*', USER_USER = '*Üzv sayı:*', TR_USER = '*Türk Üzv Sayısı:*', Hİ_USER = '*Hindistan üzv sayı:*', AZ_USER = '*Azərbaycan Üzv Sayısı:*', SRİ_USER = '*Şri Lanka üzv sayı:*', RU_USER = '*Rusiya Üzv Sayısı:*', USA_USER = '*ABD Üzv sayı:*', OTHER = '*Digər üzv sayı:*'
if (CON.LANG == 'ES') ADMİN_USER = '*Administradores:*', USER_USER = '*Miembros:*', ES_USER = '*Miembros Españoles 🇪🇸:*', BO_USER = '*Miembros Bolivianos 🇧🇴:*', AR_USER = '*Miembros Argentinos 🇦🇷:*', CO_USER = '*Miembros Colombianos 🇨🇴:*', PE_USER = '*Miembros Peruanos 🇵🇪:*', MX_USER = '*Miembros Mexicanos 🇲🇽:*'
if (CON.LANG == 'PT') ADMİN_USER = '*Contagem de Admin:*', USER_USER = '*Contagem de membro:*', TR_USER = '*Contagem de membros turcos:*', Hİ_USER = '*Contagem de membros indianos:*', AZ_USER = '*Contagem de membros do Azerbaijão:*', SRİ_USER = '*Contagem de membros do Sri Lanka:*', RU_USER = '*Contagem de membros russos:*', USA_USER = '*Contagem de membros dos USA:*', OTHER = '*Contagem de outros membros:*'
if (CON.LANG == 'RU') ADMİN_USER = '*Количество администраторов:*', USER_USER = '*Количество участников:*', TR_USER = '*Количество членов в Турции:*', Hİ_USER = '*Количество членов в Индии:*', AZ_USER = '*Количество участников из Азербайджана:*', SRİ_USER = '*Количество членов из Шри-Ланки:*', RU_USER = '*Количество участников в России:*', USA_USER = '*Количество участников в США:*', OTHER = '*Количество других участников:*'
if (CON.LANG == 'HI') ADMİN_USER = '*व्यवस्थापक गणना:*', USER_USER = '*सदस्य गणना:*', TR_USER = '*तुर्की सदस्य संख्या:*', Hİ_USER = '*भारतीय सदस्य संख्या:*', AZ_USER = '*अज़रबैजान सदस्य संख्या:*', SRİ_USER = '*श्रीलंका सदस्य संख्या:*', RU_USER = '*रूसी सदस्य संख्या:*', USA_USER = '*यूएसए सदस्य संख्या:*', OTHER = '*अन्य सदस्य संख्या:*'
if (CON.LANG == 'ID') ADMİN_USER = '*Jumlah Admin:*', USER_USER = '*Jumlah anggota:*', TR_USER = '*Jumlah Anggota Turki:*', Hİ_USER = '*Jumlah Anggota India:*', AZ_USER = '*Jumlah Anggota Azerbaijan:*', SRİ_USER = '*Jumlah Anggota Sri Lanka:*', RU_USER = '*Jumlah Anggota Rusia:*', USA_USER = '*Jumlah Anggota USA:*', OTHER = '*Jumlah Anggota Lainnya:*'
if (CON.LANG == 'ML') ADMİN_USER = '*അഡ്‌മിൻ എണ്ണം:*', USER_USER = '*അംഗങ്ങളുടെ എണ്ണം:*', TR_USER = '*ടർക്കിഷ് അംഗങ്ങളുടെ എണ്ണം:*', Hİ_USER = '*ഇന്ത്യൻ അംഗങ്ങളുടെ എണ്ണം:*', AZ_USER = '*അസർബൈജാൻ അംഗങ്ങളുടെ എണ്ണം:*', SRİ_USER = '*ശ്രീലങ്ക അംഗങ്ങളുടെ എണ്ണം:*', RU_USER = '*റഷ്യൻ അംഗങ്ങളുടെ എണ്ണം:*', USA_USER = '*യു‌എസ്‌എ അംഗങ്ങളുടെ എണ്ണം:*', OTHER = '*മറ്റ് അംഗങ്ങളുടെ എണ്ണം:*'

if (CON.WORKTYPE == 'private') {
    Asena.addCommand({ pattern: 'infogroup$', fromMe: true, OnlyGroup: true, desc: Lang.PL_DESC }, async (message, match) => { 
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = ' ' + jids.length + '\n'
            var user_count = ' ' +  users1.length + '\n'
            var es_user = [];
            var bo_user = [];
            var ar_user = [];
            var co_user = [];
            var pe_user = [];
            var mx_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('34')) { es_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('591')) { bo_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('54')) { ar_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('57')) { co_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('51')) { pe_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('52')) { mx_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } 
            });
            var trus = ' ' + es_user.length + '\n'
            var hius = ' ' + bo_user.length + '\n'
            var azus = ' ' + ar_user.length + '\n'
            var srius = ' ' + co_user.length + '\n'
            var ruus = ' ' + pe_user.length + '\n'
            var usaus = ' ' + mx_user.length + '\n'
            var oth = user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + ES_USER + trus + BO_USER + hius + AR_USER + azus + CO_USER + srius + PE_USER + ruus + MX_USER + usaus + OTHER + ' ' + oth + '\n'
            const msg = `*ID del Grupo:* ${json.id} \n` + Lang.SUB + `${nwjson.subject} \n` + Lang.OWN + `${json.owner} \n` + Lang.COD + `${code} \n` + user_count_msg + Lang.DES + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            if (ppUrl === undefined || ppUrl === null || ppUrl == '') {
                await message.client.sendMessage(
                    message.jid, 
                    msg, 
                    MessageType.text
                );
            } else {
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    {caption: msg }
                );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            if (usppUrl === undefined || usppUrl === null || usppUrl == '') {
                await message.client.sendMessage(
                    message.jid, 
                    nwmsg, 
                    MessageType.text
                );
            } else {
                const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resimnw.data), 
                    MessageType.image, 
                    { caption: nwmsg }
                );
        }
    });
}
else if (CON.WORKTYPE == 'public') {
    Asena.addCommand({ pattern: 'infogroup$', fromMe: false, OnlyGroup: true, desc: Lang.PL_DESC }, async (message, match) => { 
        if (message.jid.includes('-')) {
            var json = await message.client.groupMetadataMinimal(message.jid) 
            var code = await message.client.groupInviteCode(message.jid)
            var nwjson = await message.client.groupMetadata(message.jid) 
            let region = await message.client.groupMetadata(message.jid);
            let grup = await message.client.groupMetadata(message.jid);
            var jids = [];
            mesaj = '';
            var users1 = [];
            grup['participants'].map(async (uye) => {
                if (uye.isAdmin) {
                    mesaj += '@' + uye.id.split('@')[0] + ' ';
                    jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
                }
                users1.push(uye.id.replace('c.us', 's.whatsapp.net'));
            });
            var admin_count = ' ' +  jids.length + '\n'
            var user_count = ' ' +  users1.length + '\n'
            var es_user = [];
            var bo_user = [];
            var ar_user = [];
            var co_user = [];
            var pe_user = [];
            var mx_user = [];
            var other_user = [];
            region['participants'].map(async (reg) => {
                if (reg.jid.startsWith('34')) { es_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('591')) { bo_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('54')) { ar_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('57')) { co_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('51')) { pe_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } if (reg.jid.startsWith('52')) { mx_user.push(reg.id.replace('c.us', 's.whatsapp.net'));
                } 
            });
            var trus = ' ' + es_user.length + '\n'
            var hius = ' ' + bo_user.length + '\n'
            var azus = ' ' + ar_user.length + '\n'
            var srius = ' ' + co_user.length + '\n'
            var ruus = ' ' + pe_user.length + '\n'
            var usaus = ' ' + mx_user.length + '\n'
            var oth = user_count - trus - hius - azus - srius - ruus - usaus
            const user_count_msg = ADMİN_USER + admin_count + USER_USER + user_count + ES_USER + trus + BO_USER + hius + AR_USER + azus + CO_USER + srius + PE_USER + ruus + MX_USER + usaus + OTHER + ' ' + oth + '\n'
            const msg = `*ID del Grupo:* ${json.id} \n` + Lang.SUB + `${nwjson.subject} \n` + Lang.OWN + `${json.owner} \n` + Lang.COD + `${code} \n` + user_count_msg + Lang.DES + `\n\n${nwjson.desc}`
            var ppUrl = await message.client.getProfilePicture(message.jid) 
            if (ppUrl === undefined || ppUrl === null || ppUrl == '') {
                await message.client.sendMessage(
                    message.jid, 
                    msg, 
                    MessageType.text
                );
            } else {
                const resim = await Axios.get(ppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resim.data), 
                    MessageType.image, 
                    {caption: msg }
                );
        }
        else {
            var status = await message.client.getStatus(message.jid) 
            var usppUrl = await message.client.getProfilePicture(message.jid) 
            var usexists = await message.client.isOnWhatsApp(message.jid)
            const nwmsg = Lang.JİD + `${usexists.jid} \n` + Lang.ST + `${status.status}`
            if (usppUrl === undefined || usppUrl === null || usppUrl == '') {
                await message.client.sendMessage(
                    message.jid, 
                    nwmsg, 
                    MessageType.text
                );
            } else {
                const resimnw = await Axios.get(usppUrl, {responseType: 'arraybuffer'})
                await message.sendMessage(
                    Buffer.from(resimnw.data), 
                    MessageType.image, 
                    { caption: nwmsg }
                );
        }
    });
}
