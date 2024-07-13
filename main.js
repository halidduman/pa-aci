function checkPassword() {
  var password = document.getElementById("password").value;
  // Burada şifre kontrolü yapabilirsiniz, örneğin:
  if (password === "paça") {
    window.location.href = "index.html"; // Doğru şifre ise diğer sayfaya yönlendir
  } else {
    alert("Yanlış şifre! Tekrar deneyin.");
  }
}
