document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const togglePasswordIcon = document.getElementById("toggleIcon");
  const form = document.getElementById("loginForm");

  const correctPassword = "12345"; // şifreyi buradan değiştirebilirsiniz.

  togglePasswordIcon.addEventListener("click", function () {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    if (type === "text") {
      togglePasswordIcon.classList.remove("bi-eye");
      togglePasswordIcon.classList.add("bi-eye-slash");
    } else {
      togglePasswordIcon.classList.remove("bi-eye-slash");
      togglePasswordIcon.classList.add("bi-eye");
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const enteredPassword = passwordInput.value;
    if (enteredPassword === correctPassword) {
      window.location.href = "site.html";
    } else {
      alert("Şifre hatalı, lütfen tekrar deneyin.");
    }
  });
});
