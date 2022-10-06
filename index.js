const Discord = require('discord.js')
const client = new Discord.Client()

const botToken = process.env.BOT_TOKEN

client.login(botToken)
