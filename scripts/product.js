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

 showCompdetails(data) ;


// localStorage.setItem('product_data',JSON.stringify(data));

function showCompdetails(data) {


    data.forEach(ele => {

        console.log(ele)

        //    console.log(ele.name);




        // let title=document.createElement("p");

        // title.innerText = ele.name;
        // console.log(title.innerHTML)

        // contaner.append(title);
    })



}
//  showCompdetails(data) ;

//  let res= JSON.parse(localStorage.getItem(product_data.id));
//  console.log(res)

