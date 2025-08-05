// command.js

const commands = {
  // 👥 Member Interaction
  tagall: (groupMembers) => {
    return `⚠️ Attention, peasants. Your queen demands your presence.\n${groupMembers.join(', ')}`;
  },
  welcome: (user) => {
    return `🎉 Welcome, ${user}! You’ve entered the lion’s den. Survive the chaos, earn the crown.`;
  },
  byeuser: (user) => {
    return `👋 ${user} has left the group. May their Wi-Fi be weak and their snacks stale.`;
  },
  rules: () => {
    return `📜 Group Rules:\n1. Don’t be boring.\n2. Respect the admins (especially me).\n3. No spam unless it’s drama.\n4. Violators will be roasted.`;
  },
  admins: (adminList) => {
    return `👑 These are the chosen ones: ${adminList.join(', ')}. Bow accordingly.`;
  },
  members: (count) => {
    return `👥 We’ve got ${count} souls trapped in this group. Some alive, some lurking.`;
  },

  // 🧹 Group Control
  lock: () => `🔒 Group locked. No one speaks unless I say so.`,
  unlock: () => `🔓 Group unlocked. Let the chaos resume.`,
  muteall: () => `🤐 Silence, mortals. Only the elite may speak.`,
  unmuteall: () => `🔊 Speak freely, but wisely. I’m watching.`,
  promote: (user) => `🎖️ ${user} has been promoted. Don’t let it go to your head.`,
  demote: (user) => `⬇️ ${user} has been demoted. Back to the shadows.`,

  // 🎲 Games & Challenges
  truthordare: () => {
    const choice = Math.random() > 0.5 ? 'Truth' : 'Dare';
    return `🎲 I choose: ${choice}. Let’s see what you’re made of.`;
  },
  spin: (users) => {
    const chosen = users[Math.floor(Math.random() * users.length)];
    return `🍾 The bottle points to: ${chosen}. Your fate is sealed.`;
  },
  challenge: (user) => `⚔️ I challenge ${user} to a roast battle. May the best insult win.`,

  // 🎶 Music & Mood
  song: () => `🎶 Mood song: “Savage Mode Activated” – play it loud.`,
  playlist: () => `📀 Playlist dropped: *Songs to Curse Your Ex To*. You’re welcome.`,
  sing: () => `🎤 “I’m too glam to give a damn…” – Violence Lover, probably.`,

  // 💔 Relationship Drama
  crush: () => `💘 I might have a crush… or I might just be bored. You’ll never know.`,
  heartbreak: () => `💔 I broke up with reality. It was getting clingy.`,
  reject: (user) => `🚫 ${user}, I’d rather date a cactus. Rejected.`,

  // 🧠 Emotional Mode
  mood: () => `🧠 Current mood: 90% rage, 10% fabulous.`,
  softmode: () => `🌸 Switching to soft mode… for 5 seconds. Don’t get used to it.`,
  coldmode: () => `❄️ Cold mode activated. Feelings not found.`,

  // 🎭 Roleplay
  possess: (user) => `😈 ${user}, your soul is mine now. Enjoy the ride.`,
  curse: (user) => `🧙‍♀️ ${user}, you’ve been cursed. May your battery always be at 1%.`,
  vanish: () => `🌫️ I vanish into the shadows… dramatic exit complete.`,

  // 📊 Stats & Logs
  stats: (messagesToday, topChatter) => {
    return `📊 Group Stats:\nMessages Today: ${messagesToday}\nTop Chatter: ${topChatter}\nMood: 70% chaos, 30% memes.`;
  },
};

module.exports = commands;
