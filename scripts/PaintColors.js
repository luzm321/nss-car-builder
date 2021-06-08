import { getColors } from "./database.js";

const colors = getColors();




export const PaintColors = () => {
    let html = "<ul>";

    const listItems = colors.map(color => {
        return `<li>
            <input type="radio" name="color" value="${color.id}" /> ${color.paintColor}
        </li>`
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
    
};