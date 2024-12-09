document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.addEventListener("click", () => {
      const answer = item.querySelector(".answer");
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        document.querySelectorAll(".answer").forEach((ans) => (ans.style.display = "none"));
        answer.style.display = "block";
      }
    });
  });
});