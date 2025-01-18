const consBtn = document.getElementById("cons-btn");

async function process(){
    try{
        const standard = Number(document.getElementById("standardCons").value);
        const cheap = Number(document.getElementById("cheapCons").value);
        const response = await fetch(`https://vebdizajn-4.onrender.com/api/vebdizajn/racun-za-struju?skupaStruja=${cheap}&jeftinaStruja=${standard}`);
        const data = await response.json();
        console.log(data);
        console.log(cheap, standard);
        document.getElementById("standardCons").value = '';
        document.getElementById("cheapCons").value = '';
        
    }catch{
        throw new Error("Something went wrong!!!");
    }
}

consBtn.addEventListener("click", process);