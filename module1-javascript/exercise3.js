const events = [
  { name: "Yoga Session", date: "2025-05-30", seats: 10 },
  { name: "Past Event", date: "2024-12-01", seats: 5 },
  { name: "Tech Talk", date: "2025-07-15", seats: 0 }
];

events.forEach(event => {
  const eventDate = new Date(event.date);
  const today = new Date();
  if (eventDate > today && event.seats > 0) {
    console.log(`Upcoming Event: ${event.name}`);
  } else {
    console.log(`Event not shown: ${event.name}`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw new Error("No seats available");
    event.seats--;
    console.log(`Registered for ${event.name}. Seats left: ${event.seats}`);
  } catch (e) {
    console.error(`Registration failed: ${e.message}`);
  }
}

register(events[2]); // Example
