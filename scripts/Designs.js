import { getDesigns, getColors, getInteriors, getTechnologies, getWheels, getVehicleModels } from "./database.js";

const colors = getColors();
const interiors = getInteriors();
const technologies = getTechnologies();
const wheels = getWheels();
const vehicleModels = getVehicleModels();


// The function buildDesignListItem is responsible for building the custom design order list, finding the prices of each component (color, 
//interior, technology, and wheel) using find() method, calculating the total cost of the custom design order that the user chooses, then 
//returning the value of the design order with html string interpolation.

const buildDesignListItem = (design) => {
// The function you pass to find() must return true/false
    const colorDesign = colors.find(color => color.id === design.colorId);
    const interiorDesign = interiors.find(interior => interior.id === design.interiorId)
    const technologyDesign = technologies.find(technology => technology.id === design.technologyId)
    const wheelDesign = wheels.find(wheel => wheel.id === design.wheelId);
    const vehicleModelDesign = vehicleModels.find(vehicleModel => vehicleModel.id === design.vehicleModelId);

    let sumAmount = colorDesign.price + interiorDesign.price + technologyDesign.price + wheelDesign.price;

    const calculateCost = () => {
        if (vehicleModelDesign.id === 2) {
            sumAmount *= 1.5;
        } else if (vehicleModelDesign.id === 3) {
            sumAmount *= 2.25;
        } else {
            sumAmount = sumAmount;
        };

        return sumAmount;
    };

    const totalCost = calculateCost();

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