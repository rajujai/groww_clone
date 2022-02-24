import footer from "../components/footer.js";

import changeContent from "./contentChanger.js";
changeContent("p2-options-list", "p2-options-content");

console.log(footer);
document.getElementById("footer").innerHTML = footer();