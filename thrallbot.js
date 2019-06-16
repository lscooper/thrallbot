const Discord = require('discord.js');
//const client = new Discord.Client();
var auth = require('./auth.json');

var client = new Discord.Client({
   // token: auth.token,
    token: process.env.TOKEN,
    autorun: true
 });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content === '!ping') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Pong.');
    }
    if (message.content === ("!bpt") ) {
        console.log("Nice.");
      message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png');
   message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png'); 
   message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png'); 
    }
  if (message.content.match("bad post thrall") ) {
      console.log("Nice2.");
    message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png');
 message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png'); 
 message.channel.send('https://cdn.discordapp.com/attachments/244960108239388682/310537986884370432/Wow-64_2017-04-27_20-36-22-27.png'); 
  }
});

client.login(process.env.TOKEN);