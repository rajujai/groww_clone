function fun(){
    let pages = document.getElementsByClassName("page"),
    l = pages.length;
    let btns = document.getElementsByClassName("pro");
    let all_users = JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<l;i++){
        btns[i].addEventListener("click", ()=>{
            console.log("hlo");
            let texts = document.getElementsByClassName("text");
            all_users.forEach(user=>{
                if(user.loggedIn){
                    user[pages[i].id] = texts[i].value;
                }
            });
            localStorage.setItem("users", JSON.stringify(all_users));
            if(i==l-1){
                window.location.href = "product.html";
            }
            pages[i].classList.add("hide");
            pages[i+1].classList.remove("hide");
        })
    }
}
fun();