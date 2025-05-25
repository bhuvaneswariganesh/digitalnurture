// Mock API URL
const apiUrl = "https://mockapi.io/events";

function fetchEvents() {
  fetch(apiUrl)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
}

async function fetchEventsAsync() {
  try {
    console.log("Loading...");
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Fetch failed", err);
  }
}
