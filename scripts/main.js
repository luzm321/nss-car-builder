import { CarBuilder } from "./Cars-R-Us.js"; 

const mainContainer = document.querySelector("#container");

const renderAllHTML = () => {
    mainContainer.innerHTML = CarBuilder();
};

renderAllHTML();

// add event listener for the custom stateChanged event, invokes the renderAllHTML() function to regenerate the HTML so that new state is displayed to the user.

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
});