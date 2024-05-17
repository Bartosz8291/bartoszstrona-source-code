const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'; // Prefix for bot commands

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  if (message.content.startsWith(prefix) && !message.author.bot) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'website') {
      // Replace 'YOUR_WEBSITE_URL' with the actual URL of your website
      message.channel.send('Here is the link to our website: [Here](https://31951d4a-cd29-4109-9b9a-13c506dc6c4f-00-p452nnaa0qnk.riker.replit.dev/)');
    }
  }
});

// Replace 'YOUR_DISCORD_BOT_TOKEN' with your actual Discord bot token
client.login('MTI0MTA2MTc2ODg4MTc3MDYyOQ.GDVHcF.abjAMKb_bjOqsMgP27XK8XlmXdTVQC-JWVuYmM');
