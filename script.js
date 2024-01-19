const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
  pwShowHide = document.querySelectorAll(".pw_hide");
  const signUpNowBtn = document.querySelector("#sign-up-btn");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  typeText("english-text", "Welcome to a journey of knowledge and discovery. Test your knowledge of the Quran, Hadith, and Islamic history. Join our community to enrich your mind and strengthen your faith. Sign up now and let the light of knowledge illuminate your path!");
});

function typeText(elementId, text) {
  const element = document.getElementById(elementId);
  let index = 0;

  function type() {
    element.textContent += text[index];
    index++;

    if (index < text.length) {
      setTimeout(type, 50); 
    }
  }

  type();
}

// JavaScript



