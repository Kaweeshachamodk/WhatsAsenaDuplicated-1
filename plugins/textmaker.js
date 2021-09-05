/* Codded by Phaticusthiccy

Unlimited API for Photooxy, Textpro and Instagram scraper.

Material: https://www.npmjs.com/package/textmaker-thiccy
Github: https://github.com/phaticusthiccy/TextMaker-Unlimited

This code works with unlimited and completely free an API scraper.
Don't use it for illegal purposes.
*/

const thiccysapi = require('textmaker-thiccy'); // Import NPM Package

const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const WhatsAsenaStack = require('whatsasena-npm');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')
clh.pay = ddd
var desc_msg = ''
if (Config.LANG == 'TR') desc_msg = 'Sınırsız erişime sahip textmaker araçlarını gösterir.'
if (Config.LANG == 'EN') desc_msg = 'Shows textmaker tools with unlimited access.'
if (Config.LANG == 'RU') desc_msg = 'Показывает инструменты для создания текстов с неограниченным доступом.'
if (Config.LANG == 'AZ') desc_msg = 'Sınırsız girişi olan textmaker alətləri göstərir.'
if (Config.LANG == 'PT') desc_msg = 'Mostra ferramentas textmaker com acesso ilimitado.'
if (Config.LANG == 'ID') desc_msg = 'Menampilkan alat pembuat teks dengan akses tak terbatas.'
if (Config.LANG == 'ML') desc_msg = 'പരിധിയില്ലാത്ത ആക്സസ് ഉള്ള ടെക്സ്റ്റ് മേക്കർ ഉപകരണങ്ങൾ കാണിക്കുന്നു.'
if (Config.LANG == 'HI') desc_msg = 'असीमित एक्सेस के साथ टेक्स्टमेकर टूल दिखाता है।'
if (Config.LANG == 'ES') desc_msg = 'Muestra herramientas de creación de textos con acceso ilimitado.'
if (os.userInfo().homedir !== clh.pay) return;
let wk = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'textmaker$', fromMe: wk, desc: desc_msg}, (async (message, match) => {
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var t5 = ''
    var t6 = ''
    var t7 = ''
    var t8 = ''
    var t9 = ''
    var t10 = ''
    var t11 = ''
    var t12 = ''
    var t13 = ''
    var t14 = ''
    var t15 = ''
    var t16 = ''
    var t17 = ''
    var t18 = ''
    var t19 = ''
    var t20 = ''
    var t21 = ''
    var t22 = ''
    var t23 = ''
    var t24 = ''
    var t25 = ''
    var t26 = ''
    var t27 = ''
    var t28 = ''
    var t29 = ''
    var t30 = ''
    var t31 = ''
    var t32 = ''
    var t33 = ''
    var t34 = ''
    var t35 = ''
    var t36 = ''
    var t37 = ''
    var t38 = ''
    var t39 = ''
    var t40 = ''
    var t41 = ''
    var t42 = ''
    var t43 = ''
    var t44 = ''
    var t45 = ''
    var t46 = ''
    var t47 = ''
    var t48 = ''
    var t49 = ''
    var t50 = ''
    var t51 = ''
    var t52 = ''
    var t53 = ''
    var t54 = ''
    var t55 = ''
    var t56 = ''
    var t57 = ''
    var t58 = ''
    var t59 = ''
    var t60 = ''
    var t61 = ''
    var t62 = ''
    var t63 = ''
    var t64 = ''
    var t65 = ''
    var t66 = ''
    var t67 = ''
    var t68 = ''
    var t69 = ''
    var t70 = ''
    var t71 = ''
    var t72 = ''
    var t73 = ''
    var t74 = ''
    var t75 = ''
    var t76 = ''
    var t77 = ''
    var t78 = ''
    var t79 = ''
    var t80 = ''
    
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        t1 = 'Şeytan Temalı Logo Yapar.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Ayı İkonu İçeren Logo Yapar.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Neon Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = '2. Bir Neon Efekti İçeren Logo Yapar.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Yıldırım Temalı Logo Yapar.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Joker Temalı Logo Yapar.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Ninja Temalı Logo Yapar.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Parıltı Temalı Logo Yapar.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Bokeh Efekti İçeren Logo Yapar.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Kurt İkonu İçeren Logo Yapar.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Siyah Beyaz Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Renkli Marvel Logosu Yapar.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Avengers Logosu Yapar.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Graffiti Temalı Logo Yapar.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = '2. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Aslan Temalı Logo Yapar.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = '3. Bir Neon Temalı Logo Yapar.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Buz Temalı Logo Yapar.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Uzay Temalı Logo Yapar.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Duman Efekti İçeren Logo Yapar.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Naruto Temalı Logo Yapar.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Glow Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html
        t25 = 'Alev Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Harry Potter Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = '4. Bir Neon Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Mezarlık Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Kupa Temalı Logo Yapar.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Taş ve Çekiç Temalı Logo Yapar.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = '2. Bir Glitch Efekti İçeren Logo Yapar.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html
        t32 = '2. Bir Harry Potter Temalı Logo Yapar.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Renk Gradyan Temalı Logo Yapar.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = '5. Bir Neon Temalı Logo Yapar.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html
        t35 = 'Magme Temalı Logo Yapar.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html 
        t36 = 'Kırık Cam Temalı Logo Yapar.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Kağıt Temalı Logo Yapar.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Metal Temalı Logo Yapar.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Suluboya Temalı Logo Yapar.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Çizim Efekti ile Renkli Logo Yapar.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html 
        t41 = '3 Boyutlu Baskı Temalı Logo Yapar.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = '2. Bir Yıldırım Temalı Logo Yapar.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Transformers Temalı Logo Yapar.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html 
        t44 = 'Kan Temalı Logo Yapar.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = '2. Bir Kan Temalı Logo Yapar.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = '2. Bir Alev Temalı Logo Yapar.' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Siyah ve Pembe Temalı Logo Yapar.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Kum Temalı Logo Yapar.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = '2. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = '3. Bir Kum Temalı Logo Yapar.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = '4. Bir Kum Temalı Logo Yapar.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Dut Temalı Logo Yapar.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = '3. Bir Graffiti Temalı Logo Yapar.' // https://textpro.me/break-wall-text-effect-871.html 
        t54 = 'PHub Temalı Logo Yapar.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = '2. Bir Şeytan Temalı Logo Yapar.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Retro Temalı Logo Yapar.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Bilim Kurgu Temalı Logo Yapar.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = '2. Bir Siyah ve Pembe Temalı Logo Yapar.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Yol Temalı Logo Yapar.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Üzgün Temalı Logo Yapar.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Animasyonlu Ayı Logosu Yapar.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Animasyonlu Yavru Köpek Logosu Yapar.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = '2. Bir PUBG Temalı Video Logo Yapar.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = '3. Bir PUBG Temalı Logo Yapar.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.
        t66 = 'Kalp Animasyonlu Logo Yapar.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = '4. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = '2. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Melek Temalı Logo Yapar.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Yaprak Temalı Logo Yapar.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Altın Temalı Logo Yapar.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = '3. Bir Uzay Temalı Logo Yapar.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = '3. Bir Alev Temalı Logo Yapar.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html
        t74 = '5. Bir Graffiti Temalı Logo Yapar.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Kar Temalı Logo Yapar.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = '2. Bir Renk Gradyan Temalı Logo Yapar.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = '6. Bir Neon Temalı Logo Yapar.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Sıcak Hava Balonu Temalı Logo Yapar.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = '2. Bir Altın Temalı Logo Yapar.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Matrix Temalı Logo Yapar.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    else {
        t1 = 'Crea un logotipo con temática del diablo.' // https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html
        t2 = 'Crea logotipo con icono de oso.' // https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html
        t3 = 'Crea logotipo con efecto neón.' // https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html
        t4 = 'Crea logotipo con segundo efecto de neón.' // https://textpro.me/neon-text-effect-online-879.html
        t5 = 'Crea un logotipo con temática de relámpagos.' // https://textpro.me/thunder-text-effect-online-881.html
        t6 = 'Crea un logotipo con temática de Joker.' // https://textpro.me/create-logo-joker-online-934.html
        t7 = 'Crea logotipos con temática ninja.' // https://textpro.me/create-ninja-logo-online-935.html
        t8 = 'Crea logotipo con temática de purpurina.' // https://textpro.me/advanced-glow-text-effect-873.html
        t9 = 'Crea logotipo con efecto bokeh.' // https://textpro.me/bokeh-text-effect-876.html
        t10 = 'Crea logotipo con el icono de lobo.' // https://textpro.me/create-wolf-logo-galaxy-online-936.html
        t11 = 'Crea un logotipo de Marvel en blanco y negro.' // https://textpro.me/create-logo-style-marvel-studios-online-971.html
        t12 = 'Crea un colorido logotipo de Marvel.' // https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html
        t13 = 'Crea un logotipo de Los Vengadores.' // https://textpro.me/create-3d-avengers-logo-online-974.html
        t14 = 'Crea un logotipo con efecto de falla/glitch.' // https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html
        t15 = 'Crea un logotipo con temática de Graffiti.' // https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html
        t16 = 'Crea un segundo logotipo con temática de Graffiti.' // https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html
        t17 = 'Crea un logotipo con temática de león.' // https://textpro.me/create-lion-logo-mascot-online-938.html
        t18 = 'Crea un tercer logotipo con temática de neón.' // https://textpro.me/neon-text-effect-online-963.html
        t19 = 'Crea un logotipo con temática de hielo.' // https://textpro.me/ice-cold-text-effect-862.html
        t20 = 'Crea un logotipo con temática espacial.' // https://textpro.me/create-space-3d-text-effect-online-985.html
        t21 = 'Crea un logotipo con efecto de humo.' // https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html
        t22 = 'Crea un logotipo con temática de Naruto.' // https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html
        t23 = 'Crea un logotipo con temática resplandeciente.' // https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html        
        t25 = 'Crea un logotipo con temática de llama.' // https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html
        t26 = 'Crea un logotipo con temática de Harry Potter.' // https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html
        t27 = 'Crea un cuarto logotipo con temática de neón.' // https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html
        t28 = 'Crea un logotipo con temática de cementerio.' // https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html
        t29 = 'Crea un logotipo con temática de taza.' // https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html
        t30 = 'Crea un logotipo con temática de piedra y martillo.' // https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html
        t31 = 'Crea un segundo con efecto de falla/glitch.' // https://textpro.me/create-a-glitch-text-effect-online-free-1026.html 
        t32 = 'Crea un segundo logotipo con temática de Harry Potter.' // https://textpro.me/create-harry-potter-text-effect-online-1025.html 
        t33 = 'Crea un logotipo con temática de degradado de color.' // https://textpro.me/online-3d-gradient-text-effect-generator-1020.html
        t34 = 'Crea un quinto logotipo con temática de neón.' // https://textpro.me/create-3d-neon-light-text-effect-online-1028.html 
        t35 = 'Crea un logotipo con temática de Magma.' // https://textpro.me/create-a-magma-hot-text-effect-online-1030.html
        t36 = 'Crea un logotipo con temática de vidrio roto.' // https://textpro.me/broken-glass-text-effect-free-online-1023.html
        t37 = 'Crea un logotipo con temática de papel.' // https://textpro.me/create-art-paper-cut-text-effect-online-1022.html
        t38 = 'Crea un logotipo con temática de metal.' // https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html
        t39 = 'Crea un logotipo con temática de acuarela.' // https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html
        t40 = 'Crea un logotipo colorido con efecto artístico.' // https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html
        t41 = 'Crea un logotipo con temática de impresión 3D.' // https://textpro.me/create-layered-text-effects-online-free-1032.html
        t42 = 'Crea un segundo logotipo con temática de relámpagos.' // https://textpro.me/online-thunder-text-effect-generator-1031.html
        t43 = 'Crea un logotipo con temática de Transformers.' // https://textpro.me/create-a-transformer-text-effect-online-1035.html
        t44 = 'Crea un logotipo con temática de sangre.' // https://textpro.me/horror-blood-text-effect-online-883.html
        t45 = 'Crea un segundo logotipo con temática de sangre.' // https://textpro.me/blood-text-on-the-frosted-glass-941.html
        t46 = 'Crea un segundo logotipo con temática de llama.' // https://textpro.me/halloween-fire-text-effect-940.html
        t47 = 'Crea un logotipo con temática negro y rosa.' // https://textpro.me/create-blackpink-logo-style-online-1001.html
        t48 = 'Crea un logotipo con temática de arena.' // https://textpro.me/write-in-sand-summer-beach-free-online-991.html
        t49 = 'Crea un segundo logotipo con temática de arena.' // https://textpro.me/sand-writing-text-effect-online-990.html
        t50 = 'Crea un tercer logotipo con temática de arena.' // https://textpro.me/sand-engraved-3d-text-effect-989.html 
        t51 = 'Crea un cuarto logotipo con temática de arena.' // https://textpro.me/create-a-summery-sand-writing-text-effect-988.html
        t52 = 'Crea un logotipo con temática de Moras.' // https://textpro.me/create-berry-text-effect-online-free-1033.html
        t53 = 'Crea un tercer logotipo con temática de Graffiti.' // https://textpro.me/break-wall-text-effect-871.html
        t54 = 'Crea un logotipo con temática de PHub.' // https://textpro.me/pornhub-style-logo-online-generator-free-977.html
        t55 = 'Crea un segundo logotipo con temática del diablo.' // https://textpro.me/create-green-horror-style-text-effect-online-1036.html
        t56 = 'Crea un logotipo de temática retro.' // https://textpro.me/video-game-classic-8-bit-text-effect-1037.html
        t57 = 'Crea un logotipo con temática de ciencia ficción.' // https://textpro.me/create-science-fiction-text-effect-online-free-1038.html
        t58 = 'Crea un segundo logotipo con temática negro y rosa.' // https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html
        t59 = 'Crea un logotipo de video con temática de PUBG.' // https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html
        t60 = 'Crea un logotipo con temática de la carretera.' // https://en.ephoto360.com/create-glowing-text-effects-online-706.html
        t61 = 'Crea un logotipo con temática triste.' // https://en.ephoto360.com/write-text-on-wet-glass-online-589.html
        t62 = 'Crea un logotipo de oso animado.' // https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html
        t63 = 'Crea un logotipo de cachorro animado.' // https://en.ephoto360.com/create-puppy-cute-animated-online-478.html
        t64 = 'Crea un segundo logotipo de video con temática de PUBG.' // https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html
        t65 = 'Crea un tercer logotipo con temática de PUBG.' // https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html
        t66 = 'Crea un logotipo animado de corazón.' // https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html
        t67 = 'Crea un cuarto logotipo con temática de Graffiti.' // https://en.ephoto360.com/text-graffiti-3d-208.html
        t68 = 'Crea un segundo logotipo con temática espacial.' // https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html
        t69 = 'Crea un logotipo con temática de ángel.' // https://en.ephoto360.com/wings-galaxy-206.html
        t70 = 'Crea un logotipo con temática de hoja.' // https://en.ephoto360.com/dark-green-typography-online-359.html
        t71 = 'Crea un logotipo de temática dorada.' // https://en.ephoto360.com/modern-gold-3-212.html
        t72 = 'Crea un tercer logotipo con temática espacial.' // https://en.ephoto360.com/galaxy-text-effect-116.html
        t73 = 'Crea un tercer logotipo con temática de llama.' // https://en.ephoto360.com/dragon-fire-text-effect-111.html 
        t74 = 'Crea un quinto logotipo con temática de Graffiti.' // https://en.ephoto360.com/graffiti-color-199.html
        t75 = 'Crea un logotipo con temática de nieve.' // https://en.ephoto360.com/snow-on-text-online-107.html
        t76 = 'Crea un segundo logotipo con temática de degradado de color.' // https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html
        t77 = 'Crea un sexto logotipo con temática de neón.' // https://en.ephoto360.com/create-light-effects-green-neon-online-429.html
        t78 = 'Crea un logotipo con temática de globo aerostático.' // https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html
        t79 = 'Crea un segundo logotipo con temática dorada.' // https://en.ephoto360.com/gold-text-effect-pro-271.html
        t80 = 'Crea un logotipos con temática de Matrix.' // https://en.ephoto360.com/matrix-text-effect-154.html
    }
    var usage_cmd = ''
    var command_cmd = ''
    var desc_cmd = ''
    if (Config.LANG == 'TR' || Config.LANG == 'AZ') {
        usage_cmd = '⌨️ *Örnek:* _'
        command_cmd = '💻 *Komut:* '
        desc_cmd = 'ℹ️ *Açıklama:* _'
    } else { 
        usage_cmd = '*⌨️ Ejemplo:* _'
        command_cmd = '💻 *Comando:* '
        desc_cmd = 'ℹ️ *Descripción:* _'
    }
    const msg = command_cmd + '```/textdevil``` \n' + desc_cmd + t1 + '_\n' + usage_cmd + '/textdevil Skueletor\n\n' +
        command_cmd + '```/text2devil``` \n' + desc_cmd + t55 + '_\n' + usage_cmd + '/text2devil Skueletor\n\n' +
        command_cmd + '```/textbear``` \n' + desc_cmd + t2 + '_\n' + usage_cmd + '/textbear Skueletor\n\n' +
        command_cmd + '```/textwolf``` \n' + desc_cmd + t10 + '_\n' + usage_cmd + '/textwolf Developer;Skueletor\n\n' +
        command_cmd + '```/textneon```\n' + desc_cmd + t3 + '_\n' + usage_cmd + '/textneon Skueletor\n\n' +
        command_cmd + '```/text2neon``` \n' + desc_cmd + t4 + '_\n' + usage_cmd + '/text2neon Skueletor\n\n' +
        command_cmd + '```/text3neon``` \n' + desc_cmd + t18 + '_\n' + usage_cmd + '/text3neon Skueletor\n\n' +
        command_cmd + '```/text4neon``` \n' + desc_cmd + t27 + '_\n' + usage_cmd + '/text4neon Skueletor\n\n' +
        command_cmd + '```/text5neon``` \n' + desc_cmd + t34 + '_\n' + usage_cmd + '/text5neon Skueletor\n\n' +
        command_cmd + '```/text6neon``` \n' + desc_cmd + t77 + '_\n' + usage_cmd + '/text6neon Skueletor\n\n' +
        command_cmd + '```/textlight``` \n' + desc_cmd + t5 + '_\n' + usage_cmd + '/textlight Skueletor\n\n' +
        command_cmd + '```/textjoker``` \n' + desc_cmd + t6 + '_\n' + usage_cmd + '/textjoker Skueletor\n\n' +
        command_cmd + '```/textninja``` \n' + desc_cmd + t7 + '_\n' + usage_cmd + '/textninja Developer;Skueletor\n\n' +
        command_cmd + '```/textglitter``` \n' + desc_cmd + t8 + '_\n' + usage_cmd + '/textglitter Skueletor\n\n' +
        command_cmd + '```/textbokeh``` \n' + desc_cmd + t9 + '_\n' + usage_cmd + '/textbokeh Skueletor\n\n' +
        command_cmd + '```/textmarvel``` \n' + desc_cmd + t11 + '_\n' + usage_cmd + '/textmarvel Developer;Skueletor\n\n' +
        command_cmd + '```/text2marvel``` \n' + desc_cmd + t12 + '_\n' + usage_cmd + '/text2marvel Developer;Skueletor\n\n' +
        command_cmd + '```/textavengers``` \n' + desc_cmd + t13 + '_\n' + usage_cmd + '/textavengers Developer;Skueletor\n\n' +
        command_cmd + '```/textgraf``` \n' + desc_cmd + t15 + '_\n' + usage_cmd + '/textgraf Developer;Skueletor\n\n' +
        command_cmd + '```/text2graf``` \n' + desc_cmd + t16 + '_\n' + usage_cmd + '/text2graf Developer;Skueletor\n\n' +  
        command_cmd + '```/text3graf``` \n' + desc_cmd + t53 + '_\n' + usage_cmd + '/text3graf Skueletor\n\n' +
        command_cmd + '```/text4graf``` \n' + desc_cmd + t67 + '_\n' + usage_cmd + '/text4graf Skueletor\n\n' +
        command_cmd + '```/text5graf``` \n' + desc_cmd + t74 + '_\n' + usage_cmd + '/text5graf Skueletor\n\n' +
        command_cmd + '```/textlion``` \n' + desc_cmd + t17 + '_\n' + usage_cmd + '/textlion Developer;Skueletor\n\n' +
        command_cmd + '```/textice``` \n' + desc_cmd + t19 + '_\n' + usage_cmd + '/textice Skueletor\n\n' +
        command_cmd + '```/textspace``` \n' + desc_cmd + t20 + '_\n' + usage_cmd + '/textspace Developer;Skueletor\n\n' +
        command_cmd + '```/text2space``` \n' + desc_cmd + t68 + '_\n' + usage_cmd + '/text2space Skueletor\n\n' +
        command_cmd + '```/text3space``` \n' + desc_cmd + t72 + '_\n' + usage_cmd + '/text3space Skueletor\n\n' +
        command_cmd + '```/textsmoke``` \n' + desc_cmd + t21 + '_\n' + usage_cmd + '/textsmoke Skueletor\n\n' +
        command_cmd + '```/textglow``` \n' + desc_cmd + t23 + '_\n' + usage_cmd + '/textglow Skueletor\n\n' +
        command_cmd + '```/textfire``` \n' + desc_cmd + t25 + '_\n' + usage_cmd + '/textfire Skueletor\n\n' +
        command_cmd + '```/text2fire``` \n' + desc_cmd + t46 + '_\n' + usage_cmd + '/text2fire Skueletor\n\n' +
        command_cmd + '```/text3fire``` \n' + desc_cmd + t73 + '_\n' + usage_cmd + '/text3fire Skueletor\n\n' +
        command_cmd + '```/textharry``` \n' + desc_cmd + t26 + '_\n' + usage_cmd + '/textharry Skueletor\n\n' +
        command_cmd + '```/text2harry``` \n' + desc_cmd + t32 + '_\n' + usage_cmd + '/text2harry Skueletor\n\n' +
        command_cmd + '```/textcup``` \n' + desc_cmd + t29 + '_\n' + usage_cmd + '/textcup Skueletor\n\n' +
        command_cmd + '```/textcemetery``` \n' + desc_cmd + t28 + '_\n' + usage_cmd + '/textcemetery Skueletor\n\n' +
        command_cmd + '```/textstone``` \n' + desc_cmd + t30 + '_\n' + usage_cmd + '/textstone Skueletor\n\n' +
        command_cmd + '```/textgradient``` \n' + desc_cmd + t33 + '_\n' + usage_cmd + '/textgradient Skueletor\n\n' +
        command_cmd + '```/text2gradient``` \n' + desc_cmd + t76 + '_\n' + usage_cmd + '/text2gradient Skueletor\n\n' +
        command_cmd + '```/textmagma``` \n' + desc_cmd + t35 + '_\n' + usage_cmd + '/textmagma Skueletor\n\n' +
        command_cmd + '```/textbglass``` \n' + desc_cmd + t36 + '_\n' + usage_cmd + '/textbglass Skueletor\n\n' +
        command_cmd + '```/textpaper``` \n' + desc_cmd + t37 + '_\n' + usage_cmd + '/textpaper Skueletor\n\n' +
        command_cmd + '```/textmetal``` \n' + desc_cmd + t38 + '_\n' + usage_cmd + '/textmetal Skueletor\n\n' +
        command_cmd + '```/textwcolor``` \n' + desc_cmd + t39 + '_\n' + usage_cmd + '/textwcolor Skueletor\n\n' +
        command_cmd + '```/textart``` \n' + desc_cmd + t40 + '_\n' + usage_cmd + '/textart Skueletor\n\n' +
        command_cmd + '```/text3d``` \n' + desc_cmd + t41 + '_\n' + usage_cmd + '/text3d Developer;Skueletor\n\n' +
        command_cmd + '```/text2light``` \n' + desc_cmd + t42 + '_\n' + usage_cmd + '/text2light Skueletor\n\n' +
        command_cmd + '```/textrobo``` \n' + desc_cmd + t43 + '_\n' + usage_cmd + '/textrobo Skueletor\n\n' +
        command_cmd + '```/textblood``` \n' + desc_cmd + t44 + '_\n' + usage_cmd + '/textblood Skueletor\n\n' +
        command_cmd + '```/text2blood``` \n' + desc_cmd + t45 + '_\n' + usage_cmd + '/text2blood Skueletor\n\n' +
        command_cmd + '```/textpink``` \n' + desc_cmd + t47 + '_\n' + usage_cmd + '/textpink Skueletor\n\n' +
        command_cmd + '```/text2pink``` \n' + desc_cmd + t58 + '_\n' + usage_cmd + '/text2pink Skueletor\n\n' +
        command_cmd + '```/textsand``` \n' + desc_cmd + t48 + '_\n' + usage_cmd + '/textsand Skueletor\n\n' +
        command_cmd + '```/text2sand``` \n' + desc_cmd + t49 + '_\n' + usage_cmd + '/text2sans Skueletor\n\n' +
        command_cmd + '```/text3sand``` \n' + desc_cmd + t50 + '_\n' + usage_cmd + '/text3sand Skueletor\n\n' +
        command_cmd + '```/text4sand``` \n' + desc_cmd + t51 + '_\n' + usage_cmd + '/text4sand Skueletor\n\n' +
        command_cmd + '```/textberry``` \n' + desc_cmd + t52 + '_\n' + usage_cmd + '/textberry Skueletor\n\n' +
        command_cmd + '```/texthub``` \n' + desc_cmd + t54 + '_\n' + usage_cmd + '/texthub Skuel;Hub_\n\n' +
        command_cmd + '```/textretro``` \n' + desc_cmd + t56 + '_\n' + usage_cmd + '/textretro Developer;Skueletor\n\n' +
        command_cmd + '```/textsci``` \n' + desc_cmd + t57 + '_\n' + usage_cmd + '/textsci Skueletor\n\n' +
        command_cmd + '```/textpubg``` \n' + desc_cmd + t59 + '_\n' + usage_cmd + '/textpubg Skueletor\n\n' +
        command_cmd + '```/textroad``` \n' + desc_cmd + t60 + '_\n' + usage_cmd + '/textroad Skueletor\n\n' +
        command_cmd + '```/textsad``` \n' + desc_cmd + t61 + '_\n' + usage_cmd + '/textsad Skueletor\n\n' +
        command_cmd + '```/textabear``` \n' + desc_cmd + t62 + '_\n' + usage_cmd + '/textabear Skueletor\n\n' +
        command_cmd + '```/textpuppy``` \n' + desc_cmd + t63 + '_\n' + usage_cmd + '/textpuppy Skueletor\n\n' +
        command_cmd + '```/text2pubg``` \n' + desc_cmd + t64 + '_\n' + usage_cmd + '/text2pubg Skueletor\n\n' +
        command_cmd + '```/text3pubg``` \n' + desc_cmd + t65 + '_\n' + usage_cmd + '/text3pubg Skueletor\n\n' +
        command_cmd + '```/textheart``` \n' + desc_cmd + t66 + '_\n' + usage_cmd + '/textheart Skueletor\n\n' +
        command_cmd + '```/textangel``` \n' + desc_cmd + t69 + '_\n' + usage_cmd + '/textangel Skueletor\n\n' +
        command_cmd + '```/textleaf``` \n' + desc_cmd + t70 + '_\n' + usage_cmd + '/textleaf Skueletor\n\n' +
        command_cmd + '```/textgold``` \n' + desc_cmd + t71 + '_\n' + usage_cmd + '/textgold Skueletor\n\n' +
        command_cmd + '```/text2gold``` \n' + desc_cmd + t79 + '_\n' + usage_cmd + '/text2gold Skueletor\n\n' +
        command_cmd + '```/textsnow``` \n' + desc_cmd + t75 + '_\n' + usage_cmd + '/textsnow Skueletor\n\n' +
        command_cmd + '```/textballoon``` \n' + desc_cmd + t78 + '_\n' + usage_cmd + '/textballoon Skueletor\n\n' +
        command_cmd + '```/textmatrix``` \n' + desc_cmd + t80 + '_\n' + usage_cmd + '/textmatrix Skueletor\n\n' +
        command_cmd + '```/textglitch``` \n' + desc_cmd + t14 + '_\n' + usage_cmd + '/textglitch Developer;Skueletor\n\n' +
        command_cmd + '```/text2glitch``` \n' + desc_cmd + t31 + '_\n' + usage_cmd + '/text2glitch Developer;Skueletor'
    await message.client.sendMessage(message.jid,msg, MessageType.text, { quoted: message.data })
}));
Asena.addCommand({pattern: 'textdevil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsci ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/sci.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/sci.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textleaf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/dark-green-typography-online-359.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textmatrix ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/matrix-text-effect-154.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'text2gradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'textballoon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/writing-your-name-on-hot-air-balloon-506.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'textsnow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/snow-on-text-online-107.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'text2gold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/gold-text-effect-pro-271.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'text5graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
  var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/graffiti-color-199.html')
  var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
  await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'text3fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/dragon-fire-text-effect-111.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'text2space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*'})
}));
Asena.addCommand({pattern: 'text3space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textgold ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/modern-gold-3-212.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'text3space ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/galaxy-text-effect-116.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textangel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/wings-galaxy-206.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'text2pink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textabear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-funny-animations-of-a-traveling-bear-701.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: 'Hecho por *Skueletor*', mimetype: Mimetype.gif })
}));
Asena.addCommand({pattern: 'text6neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image)
}));
Asena.addCommand({pattern: 'textheart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/write-name-on-heart-with-wings-gifs-430.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: 'Hecho por *Skueletor*', mimetype: Mimetype.gif })
}));
Asena.addCommand({pattern: 'text4graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/text-graffiti-3d-208.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textpuppy ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-puppy-cute-animated-online-478.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: 'Hecho por *Skueletor*', mimetype: Mimetype.gif })
}));
Asena.addCommand({pattern: 'textroad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textsad ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'text3pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var img = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-the-cover-game-playerunknown-s-battlegrounds-401.html')
    var buffer_data = await axios.get(img.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.image, { caption: 'Hecho por *Skueletor*' })
}));
Asena.addCommand({pattern: 'textpubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var vid = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/create-pubg-style-glitch-video-avatar-554.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: 'Hecho por *Skueletor*', mimetype: Mimetype.mp4 })
}));
Asena.addCommand({pattern: 'text2pubg ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var vid = await WhatsAsenaStack.ephoto(match[1], 'https://en.ephoto360.com/lightning-pubg-video-logo-maker-online-615.html')
    var buffer_data = await axios.get(vid.image, { responseType: 'arraybuffer'})
    await message.sendMessage(Buffer.from(buffer_data.data), MessageType.video, { caption: 'Hecho por *Skueletor*', mimetype: Mimetype.mp4 })
}));
Asena.addCommand({pattern: 'text2devil ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/devil2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/devil2.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'texthub ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hub.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hub.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textretro ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/retr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/retr.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/break-wall-text-effect-871.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t3gr.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t3gr.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textberry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bry.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bry.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text4sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-summery-sand-writing-text-effect-988.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4snd.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t3snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t3snd.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2sand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/sand-writing-text-effect-online-990.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2snd.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsand ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/snd.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/snd.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2fire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/halloween-fire-text-effect-940.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/fh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/fh.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textpink ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tpink.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tpink.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2blood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cbld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cbld.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textblood ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/horror-blood-text-effect-online-883.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bld.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bld.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2light ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2lgh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2lgh.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textrobo ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/robo.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/robo.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3d ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-layered-text-effects-online-free-1032.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/3dl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/3dl.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textart ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tart.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tart.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textwcolor ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wcolor.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wcolor.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmagma ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/magma.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/magma.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmetal ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/metal.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/metal.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textpaper ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/papert.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/papert.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbglass ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/broken-glass-text-effect-free-online-1023.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/glass.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glass.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text5neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t5neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t5neon.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgradient ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-3d-gradient-text-effect-generator-1020.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tgrone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tgrone.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2harry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp2n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp2n.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textstone ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/stone.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/stone.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbear ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bear.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bear.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textwolf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/wolf.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/wolf.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textneon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-879.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon2.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlight ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/thunder-text-effect-online-881.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/li.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/li.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textjoker ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/create-logo-joker-online-934.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/joker.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/joker.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textninja ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = '';
    }
    thiccysapi.textpro("https://textpro.me/create-ninja-logo-online-935.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ninja.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ninja.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitter ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/advanced-glow-text-effect-873.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textbokeh ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/bokeh-text-effect-876.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/bkh.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/bkh.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textmarvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/marvel.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/marvel.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2marvel ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/mar2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/mar2.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textavengers ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/aven.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/aven.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2glitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };
              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gl.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gl.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglitch ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tt2.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tt2.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textgraf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ttgra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ttgra.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text2graf ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t2gra.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t2gra.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textlion ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/lion.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/lion.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text3neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/neon-text-effect-online-963.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/neon3.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/neon3.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textice ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.textpro("https://textpro.me/ice-cold-text-effect-862.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/ice.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/ice.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textspace ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var topText, bottomText; 
    if (match[1].includes(';')) {
        var split = match[1].split(';');
        topText = split[0];
        bottomText = split[1];
    } else {
        topText = match[1];
        bottomText = 'ㅤ';
    }
    thiccysapi.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html",
        [`${topText}`, `${bottomText}`]
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/space.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/space.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textsmoke ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/smoke.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/smoke.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textglow ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    var download = async(uri, filename, callback) => {
        await request.head(uri, async(err, res, body) => {    
            await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
        });
    };
    var uri = encodeURI(match[1])
    await download(`https://api.xteam.xyz/photooxy/neonlight?text=${uri}&APIKEY=da5fb2b73ae3e451`, '/root/WhatsAsenaDuplicated/glowttp.jpg', async() => {                          
        await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/glowttp.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
    })
}));
Asena.addCommand({pattern: 'textfire ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/tfire.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/tfire.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textharry ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/hp.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/hp.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'text4neon ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/t4n.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/t4n.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcemetery ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cmth.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cmth.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
Asena.addCommand({pattern: 'textcup ?(.*)', fromMe: wk, dontAddCommandList: true}, (async (message, match) => {
    thiccysapi.photooxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html",
        `${match[1]}`
        ).then(async (data) => { 
          try { 
              var download = async(uri, filename, callback) => {
                  await request.head(uri, async(err, res, body) => {    
                      await request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                  });
              };

              await download(`${data}`, '/root/WhatsAsenaDuplicated/cup.jpg', async() => {                          
                  await message.client.sendMessage(message.jid,fs.readFileSync('/root/WhatsAsenaDuplicated/cup.jpg'), MessageType.image, { caption: 'Hecho por *Skueletor*' })
              })
          } catch(err) { 
              console.log(err)
          } 
    });
}));
