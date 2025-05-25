let events = [];

function addEvent(name, category) {
  events.push({ name, category });
}

function registerUser(eventName) {
  console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(category) {
  return events.filter(e => e.category === category);
}

// Closure to track registrations by category
function createCategoryCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const musicCounter = createCategoryCounter();
console.log(musicCounter());
console.log(musicCounter());

// Callback-based filter
function searchEvents(callback) {
  return events.filter(callback);
}

addEvent("Guitar Workshop", "Music");
addEvent("Coding Bootcamp", "Tech");
console.log(searchEvents(e => e.name.includes("Workshop")));
