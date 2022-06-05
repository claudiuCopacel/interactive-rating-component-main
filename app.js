const btns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const score = document.querySelector(".score");
const root = document.querySelector(":root");
let rating;
let isRate = false;
// ca sa inteleg singut ce am facut aici, am trecut cu foreach prin fiecare buton si am facut un eventlistener prin care prima data vom da remove la clasa active si dupa ce aceasta ruleazaa pe butonul respectiv ii adaugam clasa active ( sau cel putin asta am inteles.)
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    // aici vom updata rating cu valoarea butonului selectat,
    rating = btn.dataset.value;
    score.innerHTML = rating;
    isRate = true;
  });
});

submitBtn.addEventListener("click", () => {
  if (isRate) {
    front.classList.add("active");
    back.classList.add("active");
  }
  root.style.setProperty("--color", "hsl(0, 0%, 100%)");
  setTimeout(() => {
    root.style.setProperty("--color", " hsl(213, 19%, 18%)");
  }, 1000);
});
