const Discord = require('discord.js'):
const client = new Discord.Client();

client.on('ready', () => {
  conslose.log('Irasshaimasen!');
});

client.login(process.env.BOT_TOKEN);
