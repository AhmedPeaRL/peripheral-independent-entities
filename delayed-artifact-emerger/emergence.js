// Emerges only after enough entropy accumulates

const key = "entropy-counter";
let count = Number(localStorage.getItem(key) || 0);
count++;
localStorage.setItem(key, count);

if (count > 17 && Math.random() > 0.92) {
  document.getElementById("artifact").textContent =
    "An artifact appeared without intent.";
}
