// Test the function by importing the JS file in HTML with next command:
//             <script src="./task_2_b.js"></script>
// Output should be: "Password is Weak!", "Password is Medium", "Password is strong!"

let password = ["weak", "8*uYhY", "StrongPass123("];

let strong = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let medium = new RegExp(
  "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))"
);

function checkPasswordStrength(p) {
  if (strong.test(p)) {
    console.log("Password is Strong!");
  } else if (medium.test(p)) {
    console.log("Password is Medium");
  } else {
    console.log("Password is Weak!");
  }
}

password.forEach((pass) => {
  checkPasswordStrength(pass);
});
