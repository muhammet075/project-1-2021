document.querySelector("#sluiten").addEventListener("click", sluitFunctie);

export function sluitFunctie() {
    document.querySelector(".form").classList.remove("displayBlock");
    document.querySelector("#reset").style.display = "none";
    document.querySelector(".resultaten").innerHTML = '';
    document.querySelector("header").scrollIntoView({
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

