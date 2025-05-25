const event = { name: "Bake-Off", date: "2025-07-20", seats: 25 };

function showEvent({ name = "Unnamed", date }) {
  console.log(`${name} happens on ${date}`);
}

showEvent(event);

// Spread operator
const allEvents = [{ ...event }, { name: "Dance Fest", date: "2025-08-01" }];
const filtered = [...allEvents].filter(e => e.name.includes("Dance"));
console.log(filtered);
