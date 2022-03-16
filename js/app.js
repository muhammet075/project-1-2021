import { routieRoutes } from "./modules/routing.js";
import { handleApi } from "./modules/data.js"
import { toonZoekbalk, filterOnClass, resetGegevens } from "./modules/zoeken.js"
import { scrollFunctie } from "./modules/scroll.js"
import { sluitFunctie, removeBooks, displayMenuItems, hamburgerMenu } from "./modules/toggle.js"

routieRoutes();
handleApi()