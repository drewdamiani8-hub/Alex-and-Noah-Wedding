// IMAGE SLIDER
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// FAQ TOGGLE
const questions = document.querySelectorAll(".faq-question");

if (questions.length > 0) {
  questions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
}
