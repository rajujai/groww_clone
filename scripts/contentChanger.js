export default (optionsId, contentId) => {
    let list = document.getElementById(optionsId).children,
        l = list.length;
    let content = document.getElementById(contentId).children;
    for (let item of list) {
        item.addEventListener("click", () => {
            for (let i = 0; i < l; i++) {
                content[i].classList.add("hide");
                list[i].classList.remove("bbtm");
            }
            content[item.id].classList.remove("hide");
            item.classList.add("bbtm");
        });
    }
}

export function videoPlayer() {
    let list = document.getElementById("emf-videos-thumb-list").children;
    let content = document.getElementById("emf-videos-list").children;
    let closeBtns = document.getElementsByClassName("close-player-btn"),
    l = closeBtns.length;
    for (let video of list) {
        video.addEventListener("click", () => {
            content[video.id].classList.remove("hide");
        })
        content[video.id].classList.add("hide");
    }
    for(let i=0;i<l;i++){
        closeBtns[i].addEventListener("click", () => {
            content[i].classList.add("hide");
        });
    }
}

export function faq(){
    let ques = document.getElementsByClassName("faq-q"),
    l = ques.length;
    let ans = document.getElementsByClassName("faq-a");
    for(let i=0;i<l;i++){
        ques[i].addEventListener("click", ()=>{
            ans[i].classList.toggle("hide");
        })
    }
}