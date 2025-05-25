const eventList = document.querySelector("#eventList");

const event = {
  name: "Music Fest",
  date: "2025-06-01"
};

const card = document.createElement("div");
card.textContent = `${event.name} on ${event.date}`;
eventList.appendChild(card);

// Example UI update
function updateUIAfterRegistration() {
  card.textContent += " (Registered)";
}
