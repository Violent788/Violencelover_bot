const events = [
  'I’m bored. Someone start a fight.',
  'I’m too fabulous for this silence.',
  'I might ghost you all. Or not.',
  'Anyone want a fake breakup?'
];

module.exports = function randomEvent() {
  return events[Math.floor(Math.random() * events.length)];
};
