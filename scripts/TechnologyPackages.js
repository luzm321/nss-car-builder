import { getTechnologies, setTechnology } from "./database.js";

const technologies = getTechnologies();

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "technology") {
            setTechnology(parseInt(event.target.value));
            // window.alert(`User chose technology ${event.target.value}`);
        };
    }
);


export const TechnologyPackages = () => {
    let html = "<ul>";

    const listItems = technologies.map(technology => {
        return `<li>
            <input type="radio" name="technology" value="${technology.id}" /> ${technology.techCapability}
        </li>`
    });

    html += listItems.join("");
    html += "</ul>";

    return html;
    
};