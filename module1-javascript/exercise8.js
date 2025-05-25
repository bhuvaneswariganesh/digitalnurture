document.getElementById("registerBtn").onclick = () => {
  alert("Registered successfully!");
};

document.getElementById("categoryFilter").onchange = function () {
  console.log(`Filtering by ${this.value}`);
};

document.getElementById("searchInput").addEventListener("keydown", function (e) {
  console.log(`Searching for ${this.value}`);
});
