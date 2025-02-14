import { Pole } from "./pole/pole.js";

let pole = new Pole(document.querySelector(".pole"));
pole.setNextKrot();
setInterval(() => {
    pole.setNextKrot();
}, 700)
