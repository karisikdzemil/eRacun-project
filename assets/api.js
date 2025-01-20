const consBtn = document.getElementById("cons-btn");
const closeBillBtn = document.getElementById("close-bill");
const modal = document.querySelector(".bill-modal");
const convertRsd = document.getElementById("convert-rsd");
// const blackDrop = document.querySelector(".black-drop")
async function process() {

  try {
    const standard = Number(document.getElementById("standardCons").value);
    const cheap = Number(document.getElementById("cheapCons").value);
    if(standard === 0 || cheap === 0){
        alert("You need to enter some value!");
        return
    }else{
        modal.classList.toggle("visible");
        blackDrop.classList.toggle("visible");
    const title = document.getElementById("bill-data-h3");
    const response = await fetch(
      `https://vebdizajn-4.onrender.com/api/vebdizajn/racun-za-struju?skupaStruja=${standard}&jeftinaStruja=${cheap}`
    );
    const data = await response.json();
    console.log(data);
    console.log(cheap, standard);
    title.innerHTML = `<h4>Standard consuption for this period: <b>${standard} kW</b> </h4> 
                            <h4> Cheap consuption for this period: <b>${cheap} kW</b></h4>
                                                    <h4 id="bill-convert"> Bill: <span id="rsd"> ${data.racun}</span> EUR</h4>
                         `;
                         convertRsd.addEventListener("click", ()=>{
                            let price = document.getElementById("rsd").textContent;
                            price = Number(price) * 117;
                             const billConvert = document.getElementById("bill-convert");
                             billConvert.innerHTML = ` Bill: <span id="rsd"> ${price}</span> RSD`
                     }, {once: true});
    document.getElementById("standardCons").value = "";
    document.getElementById("cheapCons").value = "";
}
  } catch {
    throw new Error("Something went wrong!!!");
  }
}

consBtn.addEventListener("click", process);
closeBillBtn.addEventListener("click", () => {
  modal.classList.toggle("visible");
  blackDrop.classList.toggle("visible");
});

