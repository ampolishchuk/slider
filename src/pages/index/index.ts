require("./index.sass");

const pugTemplate = require("./index.pug");
const html = pugTemplate();
const mainContainer = document.createElement("main");
mainContainer.classList.add("index");

mainContainer.innerHTML = html;

document.body.appendChild(mainContainer);

const contaner1 = document.querySelector(".index-container_1");
const contaner2 = document.querySelector(".index-container_2");
const contaner3 = document.querySelector(".index-container_3");
