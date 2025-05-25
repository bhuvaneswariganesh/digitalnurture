document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Form submitted");

  const payload = {
    name: e.target.name.value,
    event: e.target.eventSelect.value
  };

  console.log("Payload:", payload);

  fetch("https://mockapi.io/register", {
    method: "POST",
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(data => console.log("Success", data))
    .catch(err => console.error("Fetch failed", err));
});
