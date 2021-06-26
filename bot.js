const  _  = require("lodash");
const config = require("./config");
const Discord = require('discord.js');
const audios = require("./audioFiles.js");
const client = new Discord.Client();
const FrasesApi = require("./services/frasesApi");
const PollyChoreada = require("./services/pollyChoreada");
const frasesApi = new FrasesApi();
const pollyChoreada = new PollyChoreada();

if(!config.discord.botToken)
  throw new Error("Pone el token discapacitado de mierda, la re concha bien de tu puta madre")

client.login(config.discord.botToken);

console.log("SOY EL NENE")

client.on('message', async message => {

  if (!message.guild) return;

  if (_.toLower(message.content) === '/veninene') {

    if (message.member.voice.channel) {
      const ids = client.voice.connections.map(it => it.channel.id)
      if(_.includes(ids, message.member.voice.channel.id))
          return;
      const connection = await message.member.voice.channel.join();
      const audio = _.sample(audios);
      console.log("PLAYING", audio)
      const dispatcher = connection.play(`http://www.punchbangstuff.com/media/botonera/${audio}`);
      dispatcher.on("error", console.log)
      dispatcher.on("finish", () => connection.disconnect())
    } else {
      message.reply('Metete en un canal de voz, mogolico');
    }
  }

  if (_.toLower(message.content) === '/frase') {

    if (message.member.voice.channel) {
      const ids = client.voice.connections.map(it => it.channel.id)
      if(_.includes(ids, message.member.voice.channel.id))
          return;
      const frase = await frasesApi.randomFrase();
      console.log("FRASE:", JSON.stringify(frase))
      const linkDeLaPuta = await pollyChoreada.hablaPuta(`${frase.frase}. ${frase.autor} (${frase.anio})`)
      console.log(linkDeLaPuta)
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(linkDeLaPuta);
      dispatcher.on("error", console.log)
      dispatcher.on("finish", () => connection.disconnect())
    } else {
      message.reply('metete en un canal de voz, mogolico');
    }
  }
});

client.on('error', (err) => console.log("EL NENE MURIO", err))