const  _  = require("lodash");
const Discord = require('discord.js');
const morgan = require("morgan");
const config = require("./config");
const commands = require("./domain/commands");
const webhook = require("./api/webhook");
const client = require("./services/discordClient");

if(!config.discord.botToken)
  throw new Error("Pone el token discapacitado de mierda, la re concha bien de tu puta madre")

client.login(config.discord.botToken);

console.log("SOY EL NENE")

const express = require('express')
const app = express()
 
app.use(morgan("dev"));
app.use("/api/webhook", webhook)
app.use("/*", (req, res) => res.send("SOY EL NENE"))

app.listen(config.port, () => console.log("EL NENE IS LISTENING", config.port))


client.on('error', (err) => console.log("EL NENE MURIO", err))