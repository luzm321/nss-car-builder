import { CarBuilder } from "./Cars-R-Us.js"; 

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = CarBuilder();
};

renderAllHTML();