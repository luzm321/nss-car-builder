import { getDesigns, getColors, getInteriors, getTechnologies, getWheels } from "./database.js";

const colors = getColors();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();


// The function buildDesignListItem is responsible for building the custom design order list, finding the prices of each component (color, 
//interior, technology, and wheel) using find() method, calculating the total cost of the custom design order that the user chooses, then 
//returning the value of the design order with html string interpolation.

//In the buildDesignListItem function, there are two ways of calculating total cost of design order: 1st is by declaring a totalCost variable
//and initializing value to 0, then use += operator on each component prices found to add to the totalCost (lines 17, 25, 33, 41, 49 that are
//commented out). 2nd is by declaring totalCost variable on line 52 and storing in it the value of adding all 4 component prices depending on 
//the user choice.

const buildDesignListItem = (design) => {
    // let totalCost = 0;
// The function you pass to find() must return true/false
    const foundColor = colors.find(
        (color) => {
            return color.id === design.colorId;
        } 
    );

    // totalCost += foundColor.price;

    const foundInterior = interiors.find(
        (interior) => {
            return interior.id === design.interiorId;  
        }
    );

    // totalCost += foundInterior.price;

    const foundTechnology = technologies.find(
        (technology) => {
            return technology.id === design.technologyId;
        }
    );

    // totalCost += foundTechnology.price;

    const foundWheel = wheels.find(
        (wheel) => {
            return wheel.id === design.wheelId;
        }
    );

    // totalCost += foundWheel.price;

    let totalCost = foundColor.price + foundInterior.price + foundTechnology.price + foundWheel.price;

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    });

    return `<li>
        Design #${design.id} costs ${costString}, which was placed and customized on ${new Date(design.timestamp).toLocaleDateString()}.
    </li>`;
};


export const Designs = () => {
  
    const designs = getDesigns();

    let html = "<ul>"

    const listItems = designs.map(buildDesignListItem);
   
    html += listItems.join("")
    html += "</ul>"

    return html;
};