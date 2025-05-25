function submitRegistration(data) {
  console.log("Sending data...");
  setTimeout(() => {
    fetch("https://mockapi.io/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(() => alert("Registration successful!"))
      .catch(() => alert("Failed to register"));
  }, 2000);
}
