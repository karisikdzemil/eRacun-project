const logout = document.getElementById("logOut");
const homeBtn = document.getElementById("home-btn");
const modalUl = document.getElementById("ul-resources");
const showMoreModal = document.querySelector(".show-more-modal");
const showMoreImg = showMoreModal.querySelector("img");
const showMoreTitle = showMoreModal.querySelector("h1");
const showMorePar = showMoreModal.querySelector("p");
const blackDrop = document.querySelector(".black-drop");
const removeModalButton = showMoreModal.querySelector("button");


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


removeModalButton.addEventListener("click", removeModalHandler);
modalUl.addEventListener("click", showModalHandler);
logout.addEventListener("click", () => (location.href = "index.html"));
homeBtn.addEventListener(
  "click",
  () => (location.href = "welcome.html#contactUs")
);
