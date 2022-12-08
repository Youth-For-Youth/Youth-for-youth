 // Function to check if the password and confirmation match
 function checkPassword() {
    const password = document.getElementById("Password").value;
    const confirmPassword = document.getElementById("Confirm Password").value;
    if (password !== confirmPassword) {
      alert("The password and confirmation do not match!");
      return false;
    }
    alert("Registration Succesful!")
    return true;
  }