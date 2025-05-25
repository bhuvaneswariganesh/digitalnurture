const eventName = "Local Music Fest";
const eventDate = "2025-06-10";
let availableSeats = 50;

const eventInfo = `${eventName} is scheduled on ${eventDate}. Seats left: ${availableSeats}`;
console.log(eventInfo);

// Simulate a registration
availableSeats--;
console.log(`Updated seats after registration: ${availableSeats}`);
