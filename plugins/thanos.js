const Asena = require('../events');
const {MessageType, GroupSettingsChange} = require('@adiwajshing/baileys');
const con = require('../config');

if (con.WORKTYPE == 'public') {

Asena.addCommand({pattern: 'thanos', fromMe: false, onlyGroup: true}, (async (message, match) => {

    var r_text = new Array ();
r_text[0] = "*Pequeño, es un cálculo simple. Este universo es finito, sus recursos, finitos. Si la vida no se controla, la vida dejará de existir. Necesita corrección.*";
r_text[1] = "*Tienes mi respeto, Stark. Cuando termine, la mitad de la humanidad seguirá existiendo. Perfectamente equilibrado, como todas las cosas deberían ser. Espero que te recuerden*";
r_text[2] = "*Debes elegir tus palabras sabiamente.*";
r_text[3] = "*Yo soy... Inevitable*";
r_text[4] = "*Destruiré este universo hasta su último átomo y luego, con las piedras que has recogido para mí, crearé uno nuevo. No es lo que se ha perdido, sino sólo lo que se le ha dado… un universo agradecido.*";
r_text[5] = "*Finalmente descanso, y veo salir el sol en un universo agradecido. Las elecciones más difíciles requieren las voluntades más fuertes.*";
r_text[6] = "*En mi corazón, sabía que aún te importaba. Pero uno nunca sabe con certeza. La realidad es a menudo decepcionante.*";
r_text[7] = "*En todos mis años de conquista, violencia, matanza, nunca fue personal. Pero te diré ahora, lo que estoy a punto de hacer a tu terco y molesto pequeño planeta… lo voy a disfrutar. Muchísimo.*";
r_text[8] = "*Eres fuerte. Pero podría chasquear los dedos y todos ustedes dejarían de existir.*";
r_text[9] = "*Eres fuerte. Yo… Tú eres generoso. Yo… Pero nunca te enseñé a mentir. Por eso eres tan malo en eso. ¿Dónde está la Piedra del Alma?*";
r_text[10] = "*Hoy, he perdido más de lo que puedes saber. Pero ahora no es momento de llorar. Ahora no es momento para nada.*";
r_text[11] = "*Sé lo que es perder. Sentir tan desesperadamente que tienes razón, y sin embargo fallar.*";
r_text[12] = "*¡Moriría hasta la cárcel! Orgullo: mi único defecto fatal.*";
r_text[13] = "*Tu política me aburre. Tu comportamiento es el de un niño chiflado. Devuélveme otra vez con las manos vacías… y bañaré las escaleras con tu sangre.*";
r_text[14] = "*Ignoré mi destino una vez, no puedo volver a hacerlo. Incluso para ti. Lo siento, pequeña...*";
r_text[15] = "*Mira. Bonito, ¿verdad? Perfectamente equilibrado. Como todas las cosas deberían ser.*";
r_text[16] = "*La diversión no es algo que uno considere al equilibrar el universo. Pero esto… me hace sonreír.*";
r_text[17] = "*Eres una gran luchadora, Gamora. Ven. Deja que te ayude.*";
r_text[18] = "*El destino no espera a ningún hombre. Ni siquiera a uno que ponga al universo de rodillas.*";
r_text[19] = "*El trabajo está hecho. He ganado. Lo que estoy a punto de hacer, lo voy a disfrutar. ¡Muchísimo!*";
r_text[20] = "*No te pedí tu confianza. Sólo exijo vuestra obediencia.*";
r_text[21] = "*Tu optimismo está fuera de lugar, Asgardiano.*";
r_text[22] = "*Pensé que eliminando la mitad de la vida, la otra mitad prosperaría, pero me has demostrado… que es imposible. Mientras haya quienes recuerden lo que fue, siempre habrá quienes no puedan aceptar lo que puede ser. Se resistirán.*";
r_text[23] = "*He vuelto a casa. Porque estoy cansado de huir de lo que soy. De quien nací para ser.*";
r_text[24] = "*Te ibas a la cama hambriento, buscando sobras. Tu planeta estaba al borde del colapso. Yo soy el que detuvo eso. ¿Sabes lo que ha pasado desde entonces? Los niños nacidos no han conocido nada más que estómagos llenos y cielos despejados. Es un paraíso.*";
r_text[25] = "*El universo requirió una corrección.*";
r_text[26] = "*Usé las piedras para destruir las piedras. Casi… me mató. Pero el trabajo está hecho. Siempre lo estará.*";
r_text[27] = "*Bien, lo haré yo mismo.*";
r_text[28] = "*Teme, huye de él, el destino llega de todos modos.*";
r_text[29] = "*No eres el único maldito con conocimiento.*";
r_text[30] = "*Cuando termine, la mitad de la humanidad seguirá viva.*";
r_text[31] = "*La realidad puede ser lo que yo quiera.*";
r_text[32] = "*Deberías haber ido a por la cabeza.*";
r_text[33] = "*Un pequeño precio a pagar por la salvación.*";
r_text[34] = "No podrías vivir con tu propio fracaso. ¿A dónde te llevó eso? De vuelta a mí.**";
r_text[35] = "*El final está cerca.*";
r_text[36] = "*Con las seis piedras, puedo simplemente chasquear los dedos, todas dejarían de existir. A eso lo llamo misericordia.*";
r_text[37] = "*¿Inmortal? Deberías elegir tus palabras con más cuidado.*";
r_text[38] = "*Tenía demasiado amor en mi corazón, y ningún lugar donde ponerlo, nadie a quien dárselo.*";
r_text[39] = "*Me llamaron loco.*";
r_text[40] = "*Ni siquiera sé quién eres...*";
var i = Math.floor(41*Math.random())

await message.sendMessage(r_text[i]);

}));
}

else if (con.WORKTYPE == 'private') {

Asena.addCommand({pattern: 'thanos', fromMe: true, onlyGroup: true}, (async (message, match) => {

    var r_text = new Array ();
r_text[0] = "*Pequeño, es un cálculo simple. Este universo es finito, sus recursos, finitos. Si la vida no se controla, la vida dejará de existir. Necesita corrección.*";
r_text[1] = "*Tienes mi respeto, Stark. Cuando termine, la mitad de la humanidad seguirá existiendo. Perfectamente equilibrado, como todas las cosas deberían ser. Espero que te recuerden*";
r_text[2] = "*Debes elegir tus palabras sabiamente.*";
r_text[3] = "*Yo soy... Inevitable*";
r_text[4] = "*Destruiré este universo hasta su último átomo y luego, con las piedras que has recogido para mí, crearé uno nuevo. No es lo que se ha perdido, sino sólo lo que se le ha dado… un universo agradecido.*";
r_text[5] = "*Finalmente descanso, y veo salir el sol en un universo agradecido. Las elecciones más difíciles requieren las voluntades más fuertes.*";
r_text[6] = "*En mi corazón, sabía que aún te importaba. Pero uno nunca sabe con certeza. La realidad es a menudo decepcionante.*";
r_text[7] = "*En todos mis años de conquista, violencia, matanza, nunca fue personal. Pero te diré ahora, lo que estoy a punto de hacer a tu terco y molesto pequeño planeta… lo voy a disfrutar. Muchísimo.*";
r_text[8] = "*Eres fuerte. Pero podría chasquear los dedos y todos ustedes dejarían de existir.*";
r_text[9] = "*Eres fuerte. Yo… Tú eres generoso. Yo… Pero nunca te enseñé a mentir. Por eso eres tan malo en eso. ¿Dónde está la Piedra del Alma?*";
r_text[10] = "*Hoy, he perdido más de lo que puedes saber. Pero ahora no es momento de llorar. Ahora no es momento para nada.*";
r_text[11] = "*Sé lo que es perder. Sentir tan desesperadamente que tienes razón, y sin embargo fallar.*";
r_text[12] = "*¡Moriría hasta la cárcel! Orgullo: mi único defecto fatal.*";
r_text[13] = "*Tu política me aburre. Tu comportamiento es el de un niño chiflado. Devuélveme otra vez con las manos vacías… y bañaré las escaleras con tu sangre.*";
r_text[14] = "*Ignoré mi destino una vez, no puedo volver a hacerlo. Incluso para ti. Lo siento, pequeña...*";
r_text[15] = "*Mira. Bonito, ¿verdad? Perfectamente equilibrado. Como todas las cosas deberían ser.*";
r_text[16] = "*La diversión no es algo que uno considere al equilibrar el universo. Pero esto… me hace sonreír.*";
r_text[17] = "*Eres una gran luchadora, Gamora. Ven. Deja que te ayude.*";
r_text[18] = "*El destino no espera a ningún hombre. Ni siquiera a uno que ponga al universo de rodillas.*";
r_text[19] = "*El trabajo está hecho. He ganado. Lo que estoy a punto de hacer, lo voy a disfrutar. ¡Muchísimo!*";
r_text[20] = "*No te pedí tu confianza. Sólo exijo vuestra obediencia.*";
r_text[21] = "*Tu optimismo está fuera de lugar, Asgardiano.*";
r_text[22] = "*Pensé que eliminando la mitad de la vida, la otra mitad prosperaría, pero me has demostrado… que es imposible. Mientras haya quienes recuerden lo que fue, siempre habrá quienes no puedan aceptar lo que puede ser. Se resistirán.*";
r_text[23] = "*He vuelto a casa. Porque estoy cansado de huir de lo que soy. De quien nací para ser.*";
r_text[24] = "*Te ibas a la cama hambriento, buscando sobras. Tu planeta estaba al borde del colapso. Yo soy el que detuvo eso. ¿Sabes lo que ha pasado desde entonces? Los niños nacidos no han conocido nada más que estómagos llenos y cielos despejados. Es un paraíso.*";
r_text[25] = "*El universo requirió una corrección.*";
r_text[26] = "*Usé las piedras para destruir las piedras. Casi… me mató. Pero el trabajo está hecho. Siempre lo estará.*";
r_text[27] = "*Bien, lo haré yo mismo.*";
r_text[28] = "*Teme, huye de él, el destino llega de todos modos.*";
r_text[29] = "*No eres el único maldito con conocimiento.*";
r_text[30] = "*Cuando termine, la mitad de la humanidad seguirá viva.*";
r_text[31] = "*La realidad puede ser lo que yo quiera.*";
r_text[32] = "*Deberías haber ido a por la cabeza.*";
r_text[33] = "*Un pequeño precio a pagar por la salvación.*";
r_text[34] = "No podrías vivir con tu propio fracaso. ¿A dónde te llevó eso? De vuelta a mí.**";
r_text[35] = "*El final está cerca.*";
r_text[36] = "*Con las seis piedras, puedo simplemente chasquear los dedos, todas dejarían de existir. A eso lo llamo misericordia.*";
r_text[37] = "*¿Inmortal? Deberías elegir tus palabras con más cuidado.*";
r_text[38] = "*Tenía demasiado amor en mi corazón, y ningún lugar donde ponerlo, nadie a quien dárselo.*";
r_text[39] = "*Me llamaron loco.*";
r_text[40] = "*Ni siquiera sé quién eres...*";
var i = Math.floor(41*Math.random())

await message.sendMessage(r_text[i]);

}));
}
