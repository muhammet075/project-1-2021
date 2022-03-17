document.querySelector("#sluiten").addEventListener("click", sluitFunctie);

export function sluitFunctie() {
    document.querySelector(".form").classList.remove("displayBlock");
    document.querySelector(".emptyState").style.display = "block";
    document.querySelector("#reset").style.display = "none";
    document.querySelector(".resultaten").innerHTML = '';
    document.querySelector(".footerScroll").classList.remove("marginBottom");
    document.querySelector("#gras1").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });

};

export function removeBooks() {
    document.querySelector(".resultaten").innerHTML = '';
}

export function displayMenuItems() {
    document.querySelector(".form").classList.add("displayBlock");
}



document.querySelector("#hamburger").addEventListener("click", hamburgerMenu);


export function hamburgerMenu() {
    document.querySelector(".form").classList.toggle("displayBlock");
}

const jaar = document.querySelector("#huidigJaar").innerHTML = new Date().getFullYear();
