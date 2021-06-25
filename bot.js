const _ = require("lodash");
const config = require("./config");
const Discord = require('discord.js');
const audios = require("./audioFiles.js");
const client = new Discord.Client();

client.login(config.discord.botToken);

console.log("SOY EL NENE")

client.on('message', async message => {

  if (!message.guild) return;

  if (message.content === '/veniNene') {

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
      message.reply('Mete en un canal de voz, mogolico');
    }
  }
});

client.on('error', (err) => console.log("EL NENE MURIO", err))