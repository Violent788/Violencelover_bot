const userMemory = {};

function trackUser(userId, interaction) {
  if (!userMemory[userId]) {
    userMemory[userId] = [];
  }
  userMemory[userId].push({
    interaction,
    timestamp: Date.now()
  });
}

function getUserHistory(userId) {
  return userMemory[userId] || [];
}

module.exports = { trackUser, getUserHistory };
