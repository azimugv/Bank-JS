document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "azim@gmail.com" && password === "azim") {
    location.href = "bank.html";
  } else {
    alert("Invalid User");
  }
});
