import React from 'react';


let initialState = {
    curentYear: 1950,
    years: {
        1900 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1910 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1920 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1930 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1940 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1950 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1960 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1970 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1980 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        1990 : {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        },
        2000: {
            slides: [
                {
                    id: 1, image: `1950-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                    text: [
                        <div>
                            <p>
                                The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                and Ernie Beckman—formed in the late 1940s, and by the early 1950s were dominating on
                                both dirt and road courses. Among their signature wins were three straight Springfield
                                Mile victories. Hill won the Springfield Mile in 1951 and 1952 and Tuman won it in 1953.
                                The three also won season points titles and major events from coast to coast.
                        </p>
                            <p>
                                Unfortunately, Indian Motorcycle Manufacturing Company ceased operations and discontinued
                                production of all models in 1953. In 1955, Brockhouse Engineering purchased the rights to
                                the Indian Motorcycle name and sold imported Royal Enfield models branded as Indian
                                Motorcycle models until 1960.
                        </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1950-2.png", title: `A soldier who never existed`, comment: ``,
                    text: [
                        <div>
                            <p>
                                Class: military Engine: 45 cu. in. (737 cc) 90° air-cooled side-valve V-twin Bore /
                                stroke: 2.87 in × 3.50 in (73 mm × 89 mm) Top speed: 70 mph (113 km/h) Power:25 bhp
                                Transmission: Four speed, foot shift; shaft drive Weight: 528 lbs. (240 kg) (wet) Fuel:
                                capacity 5 gal.
                        </p>
                            <p>
                                The Indian 841 was a motorcycle designed for desert warfare.
                                It pioneered the drivetrain configuration later popularized by Moto Guzzi,
                                having a longitudinally mounted air-cooled 90-degree V-twin with shaft drive
                                to the rear wheel.
                        </p>
                        </div>
                    ]
                }
            ]
        }
    }
}

const NEXT_YAER = 'NEXT_YAER'
const PREVIOUS_YEAR = 'PREVIOUS_YEAR'
const YEAR = 'YEAR'

const historyReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_YAER: {
            return state;
        }
        case PREVIOUS_YEAR: {
            return state;
        }
        case YEAR:{
            return state;
        }
        default:
            return state;
    }
}

export default historyReducer;