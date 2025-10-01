const toggleBtn = document.getElementById("toggle-btn");
const body = document.body;

// Ensure body has an initial class
if (!body.classList.contains("dark") && !body.classList.contains("light")) {
    body.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");
    body.classList.toggle("dark");

    if (body.classList.contains("light")) {
        toggleBtn.textContent = "☀️ Light Mode";
    } else {
        toggleBtn.textContent = "🌙 Dark Mode";
    }
});