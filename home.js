const signup_btn = document.querySelector("#signup-btn");
const login_btn = document.querySelector("#login-btn");
const container = document.querySelector(".container");

signup_btn.addEventListener("click", (e) => {
  container.classList.add("signup-mode");
});

login_btn.addEventListener("click", (e) => {
  container.classList.remove("signup-mode");
});
