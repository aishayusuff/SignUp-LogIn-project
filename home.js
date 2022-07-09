const signup_btn = document.querySelector("#signup-btn");
const login_btn = document.querySelector("#login-btn");
const mobile_signup_btn = document.querySelector("#mobile-signup");
const mobile_login_btn = document.querySelector("#mobile-login");
const container = document.querySelector(".container");

signup_btn.addEventListener("click", (e) => {
  container.classList.add("signup-mode");
});

login_btn.addEventListener("click", (e) => {
  container.classList.remove("signup-mode");
});
mobile_signup_btn.addEventListener("click", (e)=>{
  container.classList.add("mobile-signup-mode");
});

mobile_login_btn.addEventListener("click", (e)=>{
  container.classList.remove("mobile-signup-mode");
});