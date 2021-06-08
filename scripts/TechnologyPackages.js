import { getTechnologies } from "./database.js";

const technologies = getTechnologies();




export const TechnologyPackages = () => {
    let html = "<ul>";

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.techCapability};
        </li>`
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
    
};