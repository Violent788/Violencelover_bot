require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const handleCommand = require('./handler');

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith('!')) return;

  const response = await handleCommand(message);
  if (response) {
    message.channel.send(response);
  }
});

client.login(process.env.DISCORD_TOKEN);
