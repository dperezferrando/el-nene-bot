const config = require("./config");
const Discord = require('discord.js');
const client = new Discord.Client();

client.login(config.discord.botToken);

console.log("SOY EL NENE")

client.on('message', async message => {

  if (!message.guild) return;

  if (message.content === '/veniNene') {

    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play('./ario.mp3');
      dispatcher.on("error", console.log)
      dispatcher.on("finish", () => connection.disconnect())
    } else {
      message.reply('Mete en un canal de voz, mogolico');
    }
  }
});