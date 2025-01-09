const headerUl = document.getElementById("header-ul");
const logout = document.getElementById('logOut');
const homeBtn = document.getElementById("home-btn");


// const headerWorkHandler = (event) =>{
//     if(event.target.tagName !== "UL"){
//         location.pathname =
//     }
// }

// headerUl.addEventListener("click", headerWorkHandler);
logout.addEventListener("click", () => location.href = 'index.html');
homeBtn.addEventListener("click", () => location.href="welcome.html#contactUs")