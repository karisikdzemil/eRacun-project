const logoutHeader = document.querySelector(".logOut");
const logoutHamb = document.querySelector("#logOutHamb");

const homeBtn = document.getElementById("home-btn");
const modalUl = document.getElementById("ul-resources");
const showMoreModal = document.querySelector(".show-more-modal");
const showMoreImg = showMoreModal.querySelector("img");
const showMoreTitle = showMoreModal.querySelector("h1");
const showMorePar = showMoreModal.querySelector("p");
const blackDrop = document.querySelector(".black-drop");
const removeModalButton = showMoreModal.querySelector("button");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.querySelector("textarea");
const contactButton = document.getElementById("contact-us-btn");
const wrongName = document.getElementById("wrong-name");
const wrongEmail = document.getElementById("wrong-email");
const wrongMessage = document.getElementById("wrong-message");
const submitFormModal = document.getElementById("form-submit-modal");
const submitFormModalBtn = document.getElementById("form-submit-modal-btn");
const hambMenu = document.querySelector(".hamburgerMenu");
const hambModal = document.querySelector(".hamburgerModal");
const hambUl = document.querySelector("#hamb-ul")




hambMenu.addEventListener("click", () => {
    hambModal.classList.toggle("hambVisible");
})


const showModalHandler = (event) => {
  if (event.target.tagName === "BUTTON") {
    const title = event.target.closest("li").querySelector("h3").textContent;
    const imgUrl = event.target.closest("li").querySelector("img").src;
    fetch("/assets/moreText.JSON")
      .then((response) => response.json())
      .then(text => {
        const par = text.find(el => el.title ===title)

        showMoreImg.src = imgUrl;
        showMoreTitle.textContent = par.title;
        showMorePar.textContent = par.paragraph;
        showMoreModal.classList.toggle("visible");
        blackDrop.classList.toggle("visible");
      });
  }
};

const removeModalHandler = () => {
    showMoreModal.classList.toggle("visible");
    blackDrop.classList.toggle("visible");
}

const validateContactHandler = () => {
    let name = false;
    let email = false;
    let message = false;
    if(!/^[A-Z][a-z]+(\s[A-Z][a-z]?){0,}/.test(contactName.value)){
        wrongName.textContent = "You must enter valid name!"
    }else{
        wrongName.textContent = '';
        name = true;
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(contactEmail.value)){
        wrongEmail.textContent = "You must enter valid email address!"
    }else{
        wrongEmail.textContent = '';
        email = true;
    }

    if(contactMessage.value === ''){
        wrongMessage.textContent = "You must enter any message!"
    }else{
        wrongMessage.textContent = '';
        message = true;
    }
        if(name && email && message){
            contactName.value = '';
            contactEmail.value = ''; 
            contactMessage.value = ''; 
            submitFormModal.style.display = "flex";
            blackDrop.classList.toggle("visible");
        }
}

submitFormModalBtn.addEventListener("click", () => {
    blackDrop.classList.toggle("visible");
    submitFormModal.style.display = "none"
});

contactButton.addEventListener("click", validateContactHandler);

removeModalButton.addEventListener("click", removeModalHandler);
// modalUl.addEventListener("", showModalHandler);
logoutHeader.addEventListener("click", () => (location.href = "index.html"));
logoutHamb.addEventListener("click", () => (location.href = "index.html"));
hambUl.addEventListener("click", (event) => {
    if(event.target.tagName === "LI" || event.target.tagName === "A"){
        hambModal.classList.toggle("hambVisible");
    }
})
homeBtn.addEventListener(
  "click",
  () => (location.href = "welcome.html#contactUs")
);
