import productsArray from "../components/product_data.js"

import navbar from "../components/navbar.js";

import footer from "../components/footer.js";

document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer").innerHTML = footer();




function eGRaph() {
    console.log("ok")
    let div = document.getElementsByClassName("e2-graph");
    div.innerHTML = ""
    let img = document.createElement("img");
    img.src = "./images/1M.png";
    div.append(img);
}



const fun = (optionsId, contentId) => {
    let list = document.getElementById(optionsId).children,
        l = list.length;
    let content = document.getElementById(contentId).children;
    for (let item of list) {
        item.addEventListener("click", () => {

            for (let i = 0; i < l; i++) {
                content[i].classList.add("hide");
                // list[i].classList.remove("bbtm");
            }
            content[item.id].classList.remove("hide");

            // item.classList.add("bbtm");
        });
    }
    // console.log(list,content);
}

fun("e2-monthly-sip-nav-one", "e2-monthly-sip-nav-content");


//   getting data from  product data file


// console.log(getElementData())





let data = productsArray();
// console.log(data)

showCompDetails(data);


// localStorage.setItem('product_data',JSON.stringify(data));

function showCompDetails(data) {

    let product = localStorage.getItem("groww-product");
    let title = document.getElementById("title");
    let img = document.getElementById("image");
    let graph = document.getElementById("graph");
    let roi = document.getElementById("roi");
    let onedayroi = document.getElementById("onedayroi");
    let nav = document.getElementById("nav");
    let rating = document.getElementById("rating");
    let sip = document.getElementById("sip");
    let aum = document.getElementById("aum");

    data.forEach(el => {
        if (el.id == product) {
            title.innerText = el.name;
            img.src = el.url;
            graph.src = el.graph;
            roi.innerText = el.roi;
            onedayroi.innerText = el.onedayroi;
            nav.innerText = el.nav;
            rating.innerText = el.rating;
            sip.innerText = el.sip;
            aum.innerText = el.aum;
        }
    })



}
function addToCart() {
    let btn = document.getElementById("add-to-cart");
    
    btn.addEventListener("click", () => {
        let all_users = JSON.parse(localStorage.getItem("users"));
        console.log(all_users);
        all_users.forEach(user => {
            if (user.loggedIn) {
                if (!user.pan) {
                    window.location.href = "/details.html";
                } else {
                    let cart = JSON.parse(localStorage.getItem("groww-cart"));
                    let title = document.getElementById("title").value;
                    let amount = document.getElementById("amount").value;
                    let date = document.getElementById("date").value;
                    if (!cart)
                        cart = [];
                    cart.push({title, amount, date});
                    localStorage.setItem("groww-cart", JSON.stringify(cart));
                    alert("Added to cart!");
                }
            }
        })
    })
}
addToCart();