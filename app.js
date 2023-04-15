const fleche=document.querySelector(".fa-solid");
const nav=document.querySelector('nav');
const header=document.querySelector('header');
// const body=document.querySelector('body');
const p=document.querySelector(".paragrapheMain");
const mainPrincipal=document.querySelector(".mainPrincipal");
const quiSuisJeLi=document.getElementById("quiSuisJe");
const mainPremier=document.querySelector(".mainPremier");
const classQuiSuisJe=document.querySelector(".quiSuisJe");
const accueil=document.getElementById("accueil");
const mainContact=document.querySelector(".mainContact");
const a=document.querySelector("a:before");
const contact=document.getElementById("contact");
const mesCompetencesMesQualites=document.querySelector(".mesCompetencesMesQualites");
const competencesQualites=document.getElementById("competencesQualites");
const menuHamberger=document.querySelector(".menuHamberger");
const liste=document.querySelector(".liste")


fleche.addEventListener("click",() =>{
    nav.classList.add("navActive");
    header.classList.add('headerActive');
    // body.classList.add('bodyActive');
    p.classList.add("pActive");
    mainPrincipal.classList.add("mainPrincipalActive");
    a.classList.add("activeLien");

})

quiSuisJeLi.addEventListener("click",() =>{
    mainPrincipal.classList.remove("mainPrincipalActive");
    mainContact.classList.remove("mainContactActive")
    mesCompetencesMesQualites.classList.remove("mesCompetencesMesQualitesActive");
    classQuiSuisJe.classList.add("mainPrincipalActiveQuiSuisJe")
})

accueil.addEventListener("click", () => {
    classQuiSuisJe.classList.remove("mainPrincipalActiveQuiSuisJe")
    mainContact.classList.remove("mainContactActive")
    mesCompetencesMesQualites.classList.remove("mesCompetencesMesQualitesActive");
    mainPrincipal.classList.add("mainPrincipalActive")
})

contact.addEventListener("click",() => {
    classQuiSuisJe.classList.remove("mainPrincipalActiveQuiSuisJe");
    mainPrincipal.classList.remove("mainPrincipalActive");
    mesCompetencesMesQualites.classList.remove("mesCompetencesMesQualitesActive");
    mainContact.classList.add("mainContactActive")

})

competencesQualites.addEventListener("click",() => {
    classQuiSuisJe.classList.remove("mainPrincipalActiveQuiSuisJe")
    mainPrincipal.classList.remove("mainPrincipalActive")
    mainContact.classList.remove("mainContactActive")
    mesCompetencesMesQualites.classList.add("mesCompetencesMesQualitesActive");
})

menuHamberger.addEventListener('click', () =>{
    
    menuHamberger.classList.toggle("menuHambergerActive");
    liste.classList.toggle("listActive");
})




