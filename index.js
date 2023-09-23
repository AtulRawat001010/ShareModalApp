let smp = document.querySelector("#first");
let fm = document.querySelector("#second");
let mc = document.querySelector(".modalCard");
let cmc = document.querySelector(".modalImg");
let docBody = document.querySelector("body");
let personC = document.querySelector(".personCard");

// smp.addEventListener('click', showModal);
// cmc.addEventListener('click', hideModal);

function showModal() {
    mc.className = "visibleModalCard";
    mc.classList.remove("modalCard");
    docBody.className = "wrapperactive";
    personC.className="personCardactive";
}

function hideModal(){
    mc.className = "modalCard";
    mc.classList.remove("visibleModalCard");
    docBody.classList.remove("wrapperactive");
    personC.classList.remove("personCardactive");
    personC.className="personCard";
}