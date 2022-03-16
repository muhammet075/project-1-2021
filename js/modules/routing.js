import { Routie } from "./vendor/routie.js";
import { toonZoekbalk } from "./zoeken.js";

export function routieRoutes() {
    
    routie({
        
        "/": () => {
        },   
        
        "zoeken": () => {
            toonZoekbalk();
        },       
    })
};