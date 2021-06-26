const  _  = require("lodash");
const config = require("./config");
const Discord = require('discord.js');
const client = new Discord.Client();
const ElNene = require("./domain/elNene");
const commands = require("./domain/commands");

if(!config.discord.botToken)
  throw new Error("Pone el token discapacitado de mierda, la re concha bien de tu puta madre")

client.login(config.discord.botToken);

console.log("SOY EL NENE")

const nene = new ElNene(client, commands);

client.on('message', message => nene.processMessage(message));

client.on('error', (err) => console.log("EL NENE MURIO", err))