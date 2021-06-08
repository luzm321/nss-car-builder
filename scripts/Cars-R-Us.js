import { PaintColors } from "./PaintColors.js";
import { InteriorSeats } from "./InteriorSeats.js";
import { TechnologyPackages } from "./TechnologyPackages.js";
import { WheelTypes } from "./WheelTypes.js";
// import { Designs } from "./Designs.js";




export const CarBuilder = () => {
    return `
    <h1>Cars-R-Us</h1>
    <article class="choices">
        <section class="choices__colors options">
            <h2>Paint Colors</h2>
            ${PaintColors()}
        </section>
        <section class="choices__interiors options">
            <h2>Interior Seat Type</h2>
            ${InteriorSeats()}
        </section>
        <section class="choices__technologies options">
            <h2>Technology Packages</h2>
            ${TechnologyPackages()}
        </section>
        <section class="choices__wheels options">
            <h2>Wheel Types</h2>
            ${WheelTypes()}
        </section>
    </article>
    <article>
        <button id="designButton">Create Car Design</button>
    </article>
    <article class="customDesigns">
        <h2>Custom Car Designs</h2>
    </article>
`
};