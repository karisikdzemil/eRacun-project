document.addEventListener("DOMContentLoaded", () => {
    // Tekstovi za prevod
    const translations = {
        en: {
            welcome: "eRacun",
            homeTitle: "Welcome to eRacun",
            homeButton: "Contact Us",
            homeDescription: "Discover how to optimize your electricity usage and save on energy costs effectively.",
            services: "Services",
            standardConsumption: "Standard consumption:",
            cheapConsumption: "Cheap consumption:",
            process: "Process",
            resources: "Energy Saving Guides",
            resourceDescription: "Your go-to resource for practical energy-saving strategies.",
            aboutUs: "About eRacun",
            contactUs: "Contact Us Anytime",
            contactUsDescription: "We're here to help with your queries",
            submit: "Submit",
            success: "Congratulations, your form was successfully submitted, we will reach out soon!",
            energyCard1Title: "Home Energy Efficiency",
            energyCard1p: "Discover effective methods to enhance the energy efficiency of your home.",
            energyCardB: "Read More",
            energyCard2Title: "Office Energy Managment",
            energyCard2p: "Implementing energy-saving practices in your office can lead to remarkable cost reductions.",
             energyCard3Title: "Renewable Energy Options",
            energyCard3p: "Implementing energy-saving practices in your office can lead to remarkable cost reductions.",
            about1t: "Promoting Energy Awareness",
            about1p: "We aim to educate our users about the importance of energy conservation and its impact on both the environment and their finances. Through informative resources.",
            about2t: "Innovative Solutions",
            about2p: "Our team is committed to providing innovative solutions that help users monitor and manage their energy usage effectively.",
            about3t: "Building a Sustalnable Future",
            about3p: "We believe that every effort counts in building a sustainable future.By promoting energy-saving practices.",
            abouth: "About eRacun",
            logout: "Log Out",
            home: "Home",
            services: "Services",
            resources: "Resources",
            about: "About Us",
            contact: "Contact"
        },
        sr: {
            welcome: "eRacun",
            homeTitle: "Dobrodosli u eRacun",
            homeButton: "Kontaktirajte nas",
            homeDescription: "Saznajte kako optimizovati potrošnju električne energije i uštedeti na troškovima.",
            services: "Usluge",
            standardConsumption: "Standardna potrošnja:",
            cheapConsumption: "Jeftina potrošnja:",
            process: "Obradi",
            resources: "Vodiči za uštedu energije",
            resourceDescription: "Vaš izvor praktičnih strategija za uštedu energije.",
            aboutUs: "O eRacunu",
            contactUs: "Kontaktirajte nas",
            contactUsDescription: "Tu smo da vam pomognemo sa vašim pitanjima",
            submit: "Pošalji",
            success: "Čestitamo, vaša poruka je uspešno poslata, uskoro ćemo vam se javiti!",
            energyCard1Title: "Kućna energetska efikasnost",
            energyCard1p: "Otkrijte efikasne metode za poboljšanje energetske efikasnosti vašeg doma.",
            energyCardB:"Pročitajte više",
             energyCard2Title: "Uredsko upravljanje energijom",
            energyCard2p: "Primjena praksi uštede energije u vašoj kancelariji može dovesti do značajnog smanjenja troškova.",
             energyCard3Title: "Opcije obnovljive energije",
            energyCard3p: "Primjena praksi uštede energije u vašoj kancelariji može dovesti do značajnog smanjenja troškova.",
            about1t: "Promoviranje energetske svijesti",
            about1p: "Cilj nam je educirati naše korisnike o važnosti očuvanja energije i njenom utjecaju na okoliš i njihove financije. Putem informativnih izvora.",
            about2t: "Inovativna Resenja",
            about2p: "Naš tim je posvećen pružanju inovativnih rješenja koja pomažu korisnicima da efikasno prate i upravljaju potrošnjom energije.",
            about3t: "Izgradnja održive budućnosti",
            about3p: "Vjerujemo da se svaki trud računa u izgradnji održive budućnosti. Promoviranjem praksi uštede energije.",
            abouth: "O eRacunu",
            logout: "Odjavite se",
            home: "Pocetna",
            services: "Usluge",
            resources: "Resursi",
            about: "O Nama",
            contact: "Kontakt"
        },
    };

    // Funkcija za promenu jezika
    const changeLanguage = (language) => {
        document.querySelector("#card1 button").textContent = translations[language].energyCardB;
        document.querySelector("#card2 button").textContent = translations[language].energyCardB;
        document.querySelector("#card3 button").textContent = translations[language].energyCardB;
        document.querySelector(".home-nav").textContent = translations[language].home;
        document.querySelector(".services-nav").textContent = translations[language].services;
        document.querySelector(".resources-nav").textContent = translations[language].resources;
        document.querySelector(".about-nav").textContent = translations[language].about;
        document.querySelector(".contact-nav").textContent = translations[language].contact;
        document.querySelector(".logOut").textContent = translations[language].logout
        document.querySelector("#unresponsive-title").textContent = translations[language].abouth;
        document.querySelector("#responsive-title").textContent = translations[language].abouth;
        document.querySelector("#about1 h3").textContent = translations[language].about1t;
        document.querySelector("#about1 p").textContent = translations[language].about1p;
        document.querySelector("#about2 h3").textContent = translations[language].about2t;
        document.querySelector("#about2 p").textContent = translations[language].about2p;
        document.querySelector("#about3 h3").textContent = translations[language].about3t;
        document.querySelector("#about3 p").textContent = translations[language].about3p;
        document.querySelector("#card1 h3").textContent = translations[language].energyCard1Title;
        document.querySelector("#card1 p").textContent = translations[language].energyCard1p;
        document.querySelector("#card2 h3").textContent = translations[language].energyCard2Title;
        document.querySelector("#card2 p").textContent = translations[language].energyCard2p;
        document.querySelector("#card3 h3").textContent = translations[language].energyCard3Title;
        document.querySelector("#card3 p").textContent = translations[language].energyCard3p;
        document.querySelector("h1").textContent = translations[language].welcome;
        document.querySelector("#home h1").textContent = translations[language].homeTitle;
        document.querySelector("#home button").textContent = translations[language].homeButton;
        document.querySelector("#home p").textContent = translations[language].homeDescription;
        document.querySelector("#services h1").textContent = translations[language].services;
        document.querySelectorAll(".services-div label")[0].textContent = translations[language].standardConsumption;
        document.querySelectorAll(".services-div label")[1].textContent = translations[language].cheapConsumption;
        document.querySelector(".style-btn").textContent = translations[language].process;
        document.querySelector("#resources h1").textContent = translations[language].resources;
        document.querySelector("#res-p").textContent = translations[language].resourceDescription;
        document.querySelector("#aboutUs h1").textContent = translations[language].aboutUs;
        document.querySelector("#contact-us-title h1").textContent = translations[language].contactUs;
        document.querySelector("#contactUs-p").textContent = translations[language].contactUsDescription;
        document.querySelector("#contact-us-btn").textContent = translations[language].submit;
        document.querySelector("#form-submit-modal p").textContent = translations[language].success;
    };

    const languageSelector = document.createElement("select");
    languageSelector.id = "language-selector";
    languageSelector.innerHTML = `
        <option value="en">English</option>
        <option value="sr">Srpski</option>
    `;
    document.querySelector(".hamburger-menu-head").prepend(languageSelector);

    languageSelector.addEventListener("change", (e) => {
        changeLanguage(e.target.value);
    });

    changeLanguage("en");
});
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js" defer></script> */}
