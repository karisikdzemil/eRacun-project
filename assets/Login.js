const email = document.getElementById("email");
const password = document.getElementById("pass");
const formBtn = document.getElementById("form-btn");
const wrongEnterPass = document.getElementById("wrong-enter-pass");
const wrongEnterEmail = document.getElementById("wrong-enter-email");


const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


class Login{
    constructor(email, password){
        this.email = email;
        this.pass = password;
        this.login = false;
        this.check()
    }
    validateEmail(){
        if(!emailReg.test(this.email)){
            wrongEnterEmail.textContent = 'Enter a valid email address';
            return false;
        }else{
            wrongEnterEmail.textContent = '';
            return true;
        }
    }
    validatePassword(){
        wrongEnterPass.textContent = '';
        if(!/^.{8,}$/.test(this.pass)){
            wrongEnterPass.textContent = "You must enter keyword with min 8 letter";
            return false;
        }else if(!this.pass.match(/\d+/)){
            wrongEnterPass.textContent = "You need to enter least one number";
            return false;
        }else if(!this.pass.match(/[A-Z]/)){
            wrongEnterPass.textContent = "You need to enter least one upper case";
            return false;
        }else{
            wrongEnterPass.textContent = '';
            return true;
        }
    }
    check(){
      this.validateEmail();
      this.validatePassword();
      this.loginSucces();
    }

    loginSucces(){
        const isEmailValid = this.validateEmail();
        const isPasswordValid = this.validatePassword();

        this.login = isEmailValid && isPasswordValid;
    }
}

class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
}


formBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const tryLogin = new Login(email.value, password.value);
    if(tryLogin.login){
        const user = new User(tryLogin.email, tryLogin.pass);
        const hash = CryptoJS.SHA256(user.password).toString();
        console.log(hash);
        email.value = '';
        password.value = '';
        console.log(user);
        // location.href = '/Users/dzemilkarisik/Desktop/eRacun/index.html';
    }
});


// Proba123
// Dzemil2004
// Ljuljaska?5