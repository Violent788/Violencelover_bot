const commands = require('./commands');
const randomEvent = require('./utils/randomEvent');

const cooldowns = new Map();

module.exports = async function handleCommand(message) {
  const [cmdName, ...args] = message.content.slice(1).trim().split(/\s+/);
  const now = Date.now();
  const cooldownTime = 5000; // 5s

  // Global random event (10% chance)
  if (Math.random() < 0.1) {
    return randomEvent();
  }

  // Cooldown check
  const key = `${message.author.id}-${cmdName}`;
  if (cooldowns.has(key)) {
    const last = cooldowns.get(key);
    if (now - last < cooldownTime) {
      return `⏳ Slow down, ${message.author.username}. I’m not a vending machine.`;
    }
  }
  cooldowns.set(key, now);

  // Command dispatch
  const command = commands[cmdName.toLowerCase()];
  if (!command) return null;

  try {
    return await command(message, args);
  } catch (err) {
    console.error(err);
    return `💥 Oops, something exploded.`;
  }
};
