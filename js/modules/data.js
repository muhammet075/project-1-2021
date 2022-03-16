import { buttonValue } from "./buttonValue.js";

export async function handleApi(btnValue) {

    buttonValue()

    const main = document.querySelector('.resultaten');
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = '1e19898c87464e239192c8bfe422f280';
    const secret = '4289fec4e962a33118340c888699438d';
    const detail = 'Default';
    const url = `${endpoint}${btnValue}&authorization=${key}&detaillevel=${detail}&output=json`;

    const config = {
        Authorization: `Bearer ${secret}`
    };

    fetch(url, config)
        .then(response => {
            return response.json();
        })
        .then(data => {
            render(data);
        })
        .catch(err => {
            console.log(err);
        });

    function render(data) {
        const results = data.results;
        console.dir(results);
        results.forEach((item, i) => {
            const html = `
           

            <div class="boekContainer ${item.titles[0]}">
            <div class="boekGegevens ${item.titles[0]}" >

            <a href="${item.detailLink}" class="boek" target="_blank"/>
            <section class="${item.titles[0]}">
            <div>
            <img src="${item.coverimages ? item.coverimages[1] : 'Geen samenvatting'}">
            </div>

            <div>
            <h2>${item.titles[0]}</h2>
            <p>${item.summaries ? item.summaries[0] : 'Geen samenvatting'}</p>
            <p>${item.publisher[0]}</p>
            <p>${item.languages[0]}</p>
            </div>
            </section>
            </a>

            </div>
            </div>
          `;
            main.insertAdjacentHTML('beforeend', html);
        });
    }
}