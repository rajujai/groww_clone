import footer from "../components/footer.js";
import { preLogin, postLogin } from "../components/index.js";
import navbar from "../components/navbar.js";
import { preloginNavbar } from "../components/navbar.js";
import contentChanger from "./contentChanger.js";
import {videoPlayer, faq} from "./contentChanger.js";
document.getElementById("footer").innerHTML = footer();

localStorage.setItem("groww-login", true);
// for changing page content on the basis of login status
let main = document.getElementById("main");
let nav = document.getElementById("navbar");
if(localStorage.getItem("groww-login")){
    nav.innerHTML = navbar();
    // main.innerHTML = postLogin();
    contentChanger("a1-options-list", "a1-options-content");
}
else{
    nav.innerHTML = preloginNavbar();
    main.innerHTML = preLogin();
    //this function changes the content of page by clicking on options
    contentChanger("p2-options-list", "p2-options-content");
}
videoPlayer();
faq();