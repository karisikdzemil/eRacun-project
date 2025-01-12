const email = document.getElementById("email");
const password = document.getElementById("pass");
const formBtn = document.getElementById("form-btn");
const wrongEnterPass = document.getElementById("wrong-enter-pass");
const wrongEnterEmail = document.getElementById("wrong-enter-email");
const hambMenu = document.querySelector(".hamburgerMenu");
const hambModal = document.querySelector(".hamburgerModal");
const hambUl = document.querySelector("#hamb-ul")

const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

console.log(hambMenu, hambModal, hambUl)

hambMenu.addEventListener("click", () => {
  hambModal.classList.toggle("hambVisible");
})

hambUl.addEventListener("click", (event) => {
  if(event.target.tagName === "LI" || event.target.tagName === "A"){
      alert("You need first to log in");
      hambModal.classList.toggle("hambVisible");
  }
})



class Login {
  constructor(email, password) {
    this.email = email;
    this.pass = password;
    this.login = false;
    this.check();
  }
  validateEmail() {
    if (!emailReg.test(this.email)) {
      wrongEnterEmail.textContent = "Enter a valid email address";
      return false;
    } else {
      wrongEnterEmail.textContent = "";
      return true;
    }
  }
  validatePassword() {
    wrongEnterPass.textContent = "";
    if (!/^.{8,}$/.test(this.pass)) {
      wrongEnterPass.textContent = "You must enter keyword with min 8 letter";
      return false;
    } else if (!this.pass.match(/\d+/)) {
      wrongEnterPass.textContent = "You need to enter least one number";
      return false;
    } else if (!this.pass.match(/[A-Z]/)) {
      wrongEnterPass.textContent = "You need to enter least one upper case";
      return false;
    } else {
      wrongEnterPass.textContent = "";
      return true;
    }
  }
  check() {
    const isEmailValid =  this.validateEmail();
    const isPasswordValid = this.validatePassword();
    this.login = isEmailValid && isPasswordValid;
  }

}

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  matchProfile() {
    const hash = CryptoJS.SHA256(this.password).toString()
    fetch("./assets/users.JSON")
      .then((response) => response.json())
      .then(data => {
        const loggedUser = data.find(user =>  user.email === this.email && user.password === hash);
        if(loggedUser){
            alert(`Email: ${loggedUser.email}`);
            email.value = '';
            password.value = '';
            location.href = 'welcome.html';
        }else{
            wrongEnterPass.textContent = "Invalid email or password!";
        }
      }).catch(error => {
        console.error(error);
        wrongEnterPass.textContent = "An error occurred. Please try again later.";
    });
  }
}

formBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const tryLogin = new Login(email.value, password.value);
  if (tryLogin.login) {
    const user = new User(tryLogin.email, tryLogin.pass);
    user.matchProfile();
  }
});

// Proba123
// Dzemil2004
// Ljuljaska?5
