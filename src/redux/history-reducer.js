import React from 'react';


let initialState = {
    curentYear: 1900,
    years: {
        1900: {
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
        },
        1910: {
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
        },
        1920: {
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
        },
        1930: {
            slides: [
                {
                    id: 1, image: `1930-1.png`, title: `The Depression Years`, comment: `Continued Growth in a Poor Economy`,
                    text: [
                        <div>
                            <p>
                                In 1930, E. Paul Du Pont sold his share of DuPont Automobile to Indian Motorcycle and bought
                                a large share of Indian Motorcycle stock. E. Paul forced out the company’s existing management
                                team and put Loring F. “Joe” Hosley in charge of day-to-day operations. Under Hosley’s leadership,
                                Indian Motorcycle resumed introducing annual model lineups, starting with the Model 203 Scout and
                                Scout Pony in 1932, and the Sport Scout in 1934.
                                </p>
                            <p>
                                In the early 1930s the nation’s poor economy depressed motorcycle sales, including those
                                of Indian Motorcycle. Still, the company continued its pursuit of perfection and introduced
                                the 1936 “upside-down” four, which had an exhaust over intake (EOI) design, as well as
                                models featuring instrument panels atop their fuel tanks.
                            </p>
                            <p>
                                Ed Kretz won the first Daytona 200 on a race-prepped Indian Sport Scout in 1937.
                                In 1938 a Sturgis based Indian Motorcycle club known as the Jackpine Gypsies held
                                a race called the Black Hills Classic. This race evolved into the
                                Sturgis Motorcycle Rally.
                            </p>
                        </div>
                    ]
                },
                {
                    id: 2, image: "1930-2.png", title: `The best motorcycle Indian ever made`, comment: ``,
                    text: [
                        <div>
                            <p>
                                The 101 Scout has been called the best motorcycle Indian ever made.
                                Enthusiasts have differing views on the replacement of the 101 Scout.
                                Fans of Indian's technical achievements acclaim the 101 Scout as the pinnacle
                                of Indian technology, while fans of classic Indian styling hail its
                                replacement for bringing classic Chief styling to the Scout line.
                                The 101 is still used in wall of death stunt exhibitions.
                            </p>
                            <p>
                                Engine:	37 cu in (610 cc) or 45 cu in (740 cc) 42° V-twin
                                Bore / stroke:	37 cu in: 2 3⁄4 in × 3 1⁄16 in (70 mm × 78 mm)
                                45 cu in: 2 7⁄8 in × 3 1⁄2 in (73 mm × 89 mm)
                                Power:37 cu in: n/a45 cu in: 18 bhp (13 kW)
                                Transmission:Three-speed
                                Suspension Front: Trailing arm, leaf spring
                                Brakes	Front: Internal expanding shoes
                                Rear: 1928-30 External contracting bands, 1931 internal expanding shoes
                                Tires: 18" on clincher rims 1928,
                                drop center rims 1929-31
                                Wheelbase: 57 1⁄8 in (1,450 mm)
                            </p>
                        </div>
                    ]
                }
            ]
        },
        1940: {
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
        },
        1950: {
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
        },
        1960: {
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
        },
        1970: {
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
        },
        1980: {
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
        },
        1990: {
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
        },
        2000: {
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
        case YEAR: {
            return state;
        }
        default:
            return state;
    }
}

export default historyReducer;