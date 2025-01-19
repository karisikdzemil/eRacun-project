const consBtn = document.getElementById("cons-btn");
const closeBillBtn = document.getElementById('close-bill');
const modal = document.querySelector(".bill-modal");
// const blackDrop = document.querySelector(".black-drop")
async function process(){
    try{
        modal.classList.toggle("visible");
        blackDrop.classList.toggle("visible");
        const standard = Number(document.getElementById("standardCons").value);
        const cheap = Number(document.getElementById("cheapCons").value);
        const title = document.getElementById("bill-data-h3");
        const response = await fetch(`https://vebdizajn-4.onrender.com/api/vebdizajn/racun-za-struju?skupaStruja=${cheap}&jeftinaStruja=${standard}`);
        const data = await response.json();
        console.log(data);
        console.log(cheap, standard);
        title.innerHTML = `<h4>Standard consuption for this period: <b>${standard}KW</b> </h4> <h4> Cheap consuption for this period: <b>${cheap}KW</b></h4><h4> Bill:  <b>${data.racun}EUR</h4>`
        document.getElementById("standardCons").value = '';
        document.getElementById("cheapCons").value = '';

    }catch{
        throw new Error("Something went wrong!!!");
    }
}

consBtn.addEventListener("click", process);
closeBillBtn.addEventListener("click", () => {
    modal.classList.toggle("visible");
    blackDrop.classList.toggle("visible");
})