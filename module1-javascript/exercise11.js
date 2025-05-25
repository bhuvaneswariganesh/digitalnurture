document.getElementById("regForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const { name, email, eventSelect } = e.target.elements;

  if (!name.value || !email.value) {
    alert("All fields required!");
    return;
  }

  console.log(`Registered ${name.value} for ${eventSelect.value}`);
});
