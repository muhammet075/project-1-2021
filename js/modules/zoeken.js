document.querySelector("#zoeken").addEventListener("click", toonZoekbalk);

export function toonZoekbalk() {
    document.querySelector("#zoekInput").classList.toggle("toonZoek");
    document.querySelector("#reset").style.display = "block";
}

document.querySelector("#zoekInput").addEventListener("keyup", function () {
    console.log("onkeyup ", this.value);
    filterOnClass('boekGegevens', this.value)
});

export function filterOnClass(baseClass, s) {
    console.log(s);

    let re = new RegExp(s.trim(), 'i');
    document.querySelectorAll('.' + "boekContainer").forEach(node => {
        let cNames = Array.from(node.classList);
        if (s.trim() == '') {
            node.style.display = "block"
        } else if (cNames.some(cName => re.test(cName))) {
            node.style.display = "block"
        } else {
            node.style.display = "none"
        }
    });
}

document.querySelector("#reset").addEventListener("click", resetGegevens);

export function resetGegevens() {
    document.querySelector("#zoekInput").value = '';
    document.querySelector("#zoekInput").classList.remove("toonZoek");



    let boeken = document.querySelectorAll(".boekContainer");

    for (let i = 0; i < boeken.length; i++) {
        boeken[i].style.display = "block"
    }

};