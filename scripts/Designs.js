// import { getDesigns } from "./database.js";



// const buildOrderListItem = (design) => {
//     return `<li>
//         Design #${design.id} costs ${costString}, which was created and customized on ${new Date(design.timestamp).toLocaleDateString()}.
//     </li>`;
// };

// export const Designs = () => {
  
//     const designs = getDesigns();

//     let html = "<ul>"

//     const listItems = designs.map(buildOrderListItem);
   
//     html += listItems.join("")
//     html += "</ul>"

//     return html;
// };