export default (optionsId, contentId)=>{
    let list = document.getElementById(optionsId).children,
    l = list.length;
    let content = document.getElementById(contentId).children;
    for(let item of list){
        item.addEventListener("click", ()=>{
            for(let i=0;i<l;i++){
                content[i].classList.add("hide");
                list[i].classList.remove("bbtm");
            }
            content[item.id].classList.remove("hide");
            item.classList.add("bbtm");
        });
    }
}