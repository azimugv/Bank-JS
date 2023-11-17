document.getElementById("btn-submit").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "azim@gmail.com" && password === "azim") {
    console.log("Valid User");
  } else {
    console.log("Invalid User");
  }
});
