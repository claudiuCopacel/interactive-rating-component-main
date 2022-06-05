const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const front = document.querySelector("#front");
const back = document.querySelector("#back");
const ratingSpan = document.querySelector(".score");
const root = document.querySelector(":root");
let score;
let rated = false;

// EVENTS
ratingBtn.forEach((btn) => {
  btn.addEventListener("click", ratingResponse);
});

submitBtn.addEventListener("click", submit);

// FUNCTIONS
function ratingResponse(e) {
  ratingBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  score = e.target.dataset.value;
  ratingSpan.innerHTML = score;
  rated = true;
}

function submit() {
  if (rated) {
    front.classList.add("active");
    back.classList.add("active");
  }
  root.style.setProperty("--color", "hsl(0, 0%, 100%)");
  setTimeout(() => {
    root.style.setProperty("--color", " hsl(213, 19%, 18%)");
  }, 1000);
}
