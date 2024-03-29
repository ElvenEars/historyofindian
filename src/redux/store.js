import React from 'react';
let store = {
    _state: {
        timeline: {
            years: {
                slides: [
                    {
                        id: 1, image: `1940-1.png`, title: `The Rise of the Wrecking Crew`, comment: `Dominating the World of Motorcycle Racing`,
                        text: [
                            <div>
                                <p>
                                    The Indian Motorcycle Wrecking Crew TM—made up of legendary racers Bobby Hill, Bill Tuman,
                                    and Ernie Beckman—formed in the late 1940s, and by the early 1940s were dominating on
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
                        id: 2, image: "1940-2.png", title: `A soldier who never existed`, comment: ``,
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
    },
    dispatch (action){

    }
}

export default store