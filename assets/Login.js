const email = document.getElementById("email");
const password = document.getElementById("pass");
const formBtn = document.getElementById("form-btn");

class Login{
    constructor(email, password){
        this.email = email;
        this.pass = password;
        this.render()
    }
    render(){
        console.log(this.email.value, this.pass.value)
    }
}

formBtn.addEventListener("click", (event)=>{
    event.preventDefault()
    new Login(email, pass);
})