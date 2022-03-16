import { handleApi } from "./data.js"
import { removeBooks, displayMenuItems } from "./toggle.js"
import { scrollFunctie } from "./scroll.js"

const buttonValue = () => {

    const buttons = document.querySelectorAll("#menu button");

    buttons.forEach(el => {
        removeBooks();
        el.addEventListener('click', function () {
            scrollFunctie();
            const btnValue = el.value;
            console.log(btnValue)
            document.querySelector(".resultaten").style.display = 'grid';

            handleApi(btnValue)
            displayMenuItems();

            let schermGrootte = window.matchMedia("(max-width: 600px)")

            function displayHamburger(schermGrootte) {
                if (schermGrootte.matches) {
                    document.querySelector("#hamburger").style.display = "block";
                    document.querySelector(".form").classList.remove("displayBlock");

                } else {
                    document.querySelector("#hamburger").style.display = "none";
                }
            }
            displayHamburger(schermGrootte)
        });
    });
}

export {
    buttonValue
}