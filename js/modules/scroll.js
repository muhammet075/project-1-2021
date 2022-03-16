export function scrollFunctie() {
    document.querySelector("footer").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
    document.querySelector("#zoekInput").value = '';
}