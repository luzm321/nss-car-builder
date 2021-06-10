import { getVehicleModels, setVehicleModel } from "./database.js";

const vehicleModels = getVehicleModels();

document.addEventListener("change", (event) => {
    if (event.target.name === "vehicleModel") {
        setVehicleModel(parseInt(event.target.value));
    };
});

export const VehicleModels = () => {
    let html = "<ul>";

    const listItems = vehicleModels.map(vehicleModel => {
        return `<li class="modelType">
            <input type="radio" name="vehicleModel" value="${vehicleModel.id}"> ${vehicleModel.type}
        </li>`;
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
};

