function valid(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function togglePasswordVisibility() {
  const password = document.getElementById("psw");
  password.type = password.type === "password" ? "text" : "password";
}

document.getElementById("showPwd").addEventListener("click", togglePasswordVisibility);

document.getElementById("phone").addEventListener("input", function (e) {
  this.value = this.value.replace(/\D/g, ""); 
});

document.getElementById("submit").addEventListener("click", function () {
  let error = "";

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const psw = document.getElementById("psw").value;
  const psw2 = document.getElementById("psw2").value;

  if (!valid(email)) {
    error += "Invalid email address.<br>";
  }

  if (!/^\d{10}$/.test(phone)) {
    error += "Invalid phone number.<br>";
  }

  if (psw.length < 8)
    error += "Password must be at least 8 characters.<br>";
  if (!/[A-Z]/.test(psw))
    error += "Must contain an uppercase letter.<br>";
  if (!/[a-z]/.test(psw))
    error += "Must contain a lowercase letter.<br>";
  if (!/\d/.test(psw))
    error += "Must include at least one number.<br>";
  if (!/[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\/?]/.test(psw))
    error += "Must include one special character.<br>";

  if (psw !== psw2)
    error += "Passwords do not match.<br>";

  const messageDiv = document.getElementById("message");

  if (error !== "") {
    messageDiv.innerHTML = '<div class="error">' + error + "</div>";
  } else {
    messageDiv.innerHTML = '<div class="success">Form submitted successfully!</div>';
  }
});
