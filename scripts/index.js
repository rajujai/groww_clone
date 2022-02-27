import footer from "../components/footer.js";
import { preLogin, postLogin } from "../components/index.js";
import navbar from "../components/navbar.js";
import { preloginNavbar } from "../components/navbar.js";
import contentChanger from "./contentChanger.js";
import {videoPlayer, faq} from "./contentChanger.js";
import data from "../components/stock_data.js";
import {showdata, stockFunction} from "./stock.js";
document.getElementById("footer").innerHTML = footer();

// for changing page content on the basis of login status
let main = document.getElementById("main");
let nav = document.getElementById("navbar");
if(localStorage.getItem("groww-login")){
    nav.innerHTML = navbar();
    main.innerHTML = postLogin();
    contentChanger("a1-options-list", "a1-options-content");
    videoPlayer();
    faq();
}
else{
    nav.innerHTML = preloginNavbar();
    main.innerHTML = preLogin();
    //this function changes the content of page by clicking on options
    contentChanger("p2-options-list", "p2-options-content");
}
function addPaths(){
    let list = document.getElementById("ae-card-list").children;
    for(let div of list){
        div.addEventListener("click", ()=>{
            localStorage.setItem("groww-product", div.id);
            window.location.href = "product.html";
        })
    }
}
addPaths();


showdata(data());
