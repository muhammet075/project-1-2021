import { buttonValue } from "./buttonValue.js";

export async function handleApi(btnValue) {

    buttonValue()

    const main = document.querySelector('.resultaten');
    const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
    const key = 'cdb8415c172ec6178b63451e222891a6';
    const detail = 'Default';
    const urlBoek = `${endpoint}${btnValue}&authorization=${key}&refine=true&facet=type(book)&output=json`;
    const urlMovie = `${endpoint}${btnValue}&authorization=${key}&refine=true&facet=type(movie)&output=json`;

    fetch(urlBoek)
        .then(response => {
            return response.json();
        })
        .then(data => {
            render(data);
        })
        .catch(err => {
            console.log(err);
        });

    
        fetch(urlMovie)
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