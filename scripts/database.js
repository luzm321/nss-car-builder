const database = {
    colors: [
        { id: 1, paintColor: "Silver", price: 500 },
        { id: 2, paintColor: "Midnight Blue", price: 900 },
        { id: 3, paintColor: "Firebrick Red", price: 700 },
        { id: 4, paintColor: "Spring Green", price: 1000 }
    ],
    interiors: [
        { id: 1, seatType: "Beige Fabric", price: 300 },
        { id: 2, seatType: "Charcoal Fabric", price: 450 },
        { id: 3, seatType: "White Leather", price: 850 },
        { id: 4, seatType: "Black Leather", price: 975 }
    ],
    technologies: [
        { id: 1, techCapability: "Basic Package (basic sound system)", price: 650 },
        { id: 2, techCapability: "Navigation Package (includes integrated navigation controls)", price: 875 },
        { id: 3, techCapability: "Visibility Package (includes side and rear cameras)", price: 1000 },
        { id: 4, techCapability: "Ultra Package (includes navigation and visibility packages)", price: 1500 }
    ],
    wheels: [
        { id: 1, wheelType: "17-inch Pair Radial", price: 375 },
        { id: 2, wheelType: "17-inch Pair Radial Black", price: 475 },
        { id: 3, wheelType: "18-inch Pair Spoke Silver", price: 675 },
        { id: 4, wheelType: "18-inch Pair Spoke Black", price: 825}
    ],
    vehicleModels: [
        { id: 1, type: "Car" },
        { id: 2, type: "SUV" },
        { id: 3, type: "Truck"}
    ],
    customDesigns: [
        {
            id: 1,
            colorId: 4,
            interiorId: 3,
            technologyId: 4,
            wheelId: 3,
            vehicleModelId: 1,
            timestamp: 1614659931693
        }
    ],
    designBuilder: {
        colorId: "",
        interiorId: "",
        technologyId: "",
        wheelId: "",
        vehicleModelId: ""
    }
};

// Getting state functions:

export const getColors = () => {
    return database.colors.map(color => ({...color}));
};

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}));
};

export const getTechnologies = () => {
    return database.technologies.map(technology => ({...technology}));
};

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}));
};

export const getVehicleModels = () => database.vehicleModels.map(vehicleModel => ({...vehicleModel}));

export const getDesigns = () => {
    return database.customDesigns.map(design => ({...design}));
};

// Setting state functions:

export const setColor = (id) => {
    database.designBuilder.colorId = id;
};

export const setInterior = (id) => {
    database.designBuilder.interiorId = id;
};

export const setTechnology = (id) => {
    database.designBuilder.technologyId = id;
};

export const setWheel = (id) => {
    database.designBuilder.wheelId = id;
};

export const setVehicleModel = (id) => {
    database.designBuilder.vehicleModelId = id;
};

// function responsible for changing permanent state of customDesign, once changed permanent state, it dispatches a custom event.

export const addCustomDesign = () => {
    // Copy the current state of user choices
    const newDesign = {...database.designBuilder}

    // Add a new primary key to the object
    const lastIndex = database.customDesigns.length - 1
    newDesign.id = lastIndex >= 0 ? database.customDesigns[lastIndex].id + 1 : 1
    // newDesign.id = database.customDesigns[lastIndex].id + 1

    // Add a timestamp to the order
    newDesign.timestamp = Date.now()

    // Add the new order object to custom orders state
    database.customDesigns.push(newDesign)

    // Reset the temporary state for user choices
    database.designBuilder = {}

    // Broadcast a notification that permanent state has changed
    document.dispatchEvent(new CustomEvent("stateChanged"))
};
