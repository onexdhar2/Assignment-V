document.getElementById("sign-button").addEventListener("click", () => {
  // get the username
  const nameInput = document.getElementById("input-name");
  const getName = nameInput.value;
  console.log(getName);
  // get the password
  const passInput = document.getElementById("input-password");
  const getPass = passInput.value;
  console.log(getPass);
  // match pin and mobile number
  if (getName == "admin" && getPass == "admin123") {
    // true :alert >homepage
    window.location.assign("/home.html");
  }
  // false:alert >goback
  else {
    alert("login failed");
    return;
  }
});
