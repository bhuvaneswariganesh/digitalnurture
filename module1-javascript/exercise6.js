let events = [
  { name: "Yoga Workshop", category: "Health" },
  { name: "Jazz Night", category: "Music" },
  { name: "Coding Bootcamp", category: "Tech" }
];

// Add new event
events.push({ name: "Guitar Workshop", category: "Music" });

// Filter only music events
const musicEvents = events.filter(e => e.category === "Music");

// Format display cards
const cards = events.map(e => `Event: ${e.name}`);
console.log(cards);
