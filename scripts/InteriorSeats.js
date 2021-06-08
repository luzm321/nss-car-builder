import { getInteriors, setInterior } from "./database.js";

const interiors = getInteriors();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "interior") {
            setInterior(parseInt(event.target.value));
            window.alert(`User chose interior ${event.target.value}`);
        };
    }
);


export const InteriorSeats = () => {
    let html = "<ul>";

    const listItems = interiors.map(interior => {
        return `<li>
            <input type="radio" name="interior" value="${interior.id}" /> ${interior.seatType}
        </li>`
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
    
};