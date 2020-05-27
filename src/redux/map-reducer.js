let initialState = {
    countries: {
        australia: [
            {
                title: "Outback Indian Motorcycles",
                street: "1/53 Hickman Street Winnellie Australia",
                phone: "08 8947 0042"
            },
            {
                title: "Brisan Motorcycles",
                street: "250 Maitland Road Islington Australia",
                phone: "02 4940 8777"
            },
            {
                title: "Eagle Powersports",
                street: "32 Bridge Street Tamworth Australia",
                phone: "02 6762 7458"
            },
            {
                title: "Indian and Victory Motorcycles",
                street: "554 Parramatta Road Ashfield Australia",
                phone: "02 9275 2000"
            },
            {
                title: "Steel City Motorcycles",
                street: "38 Princes Highway Fairy Meadow Australia",
                phone: "02 4284 0800"
            },
            {
                title: "Team Moto Canberra",
                street: "30 Ipswich Street Fyshwick Australia",
                phone: "02 6280 4491"
            },
            {
                title: "MCA Motorcycles",
                street: "121 Frankston – Dandenong Road Dandenong VIC Australia",
                phone: "03 9792 9788 "
            },
            {
                title: "Antique Motorcycles",
                street: "1-3 Grange Road Cheltenham Australia",
                phone: "0418 340 055"
            },
            {
                title: "Indian and Victory Motorcycles",
                street: "632 Wickham Street Fortitude Valley Australia",
                phone: "07 3363 5400"
            },
            {
                title: "Rising Sun Motorsports",
                street: "35 Bowen Road Townsville Australia",
                phone: "07 4759 3200"
            },
            {
                title: "Adelaide Motorcycle Centre",
                street: "29-31 Magill Road Stepney Australia",
                phone: "08 8130 0777"
            },
            {
                title: "West Coast Automotive Group",
                street: "291 Pinjarra Road Mandurah Australia",
                phone: "08 9535 8777"
            },
            {
                title: "Indian Motorcycle Tasmania",
                street: "76 Charles Street Hobart Australia",
                phone: "08 9535 8777"
            },
            {
                title: "Ultimate Indian Motorcycle",
                street: "60 Lawrence Drive Nerang Australia",
                phone: "07 5655 1591"
            },
            {
                title: "Central Bike Centre",
                street: "3 Scant St Emerald Australia",
                phone: "07 4982 4441"
            }
        ],
        usa: [
            {
                title: "ROCKET CITY INDIAN MOTORCYCL",
                street: "12401 Memorial PKWY S Huntsville, Alabama,USA",
                phone: "256-650-1177"
            },
            {
                title: "WEST TEXAS INDIAN MOTORCYCLE",
                street: "4202 W LOOP 289 Lubbock, Texas, USA",
                phone: "806-793-2551"
            },
            {
                title: "INDIAN MOTORCYCLE GULF FREEWAY",
                street: "11415 GULF FREEWAY Houston, Texas, USA",
                phone: "281-486-4604"
            },
            {
                title: "MAD MAX INDIAN MOTORCYCLE",
                street: "116 CLARA BARTON ST  New York, USA",
                phone: "585-335-7100"
            },
            {
                title: "WAITE INDIAN MOTORCYCLE",
                street: "18014 Goodhough st New York, USA",
                phone: "315-583-5680"
            },
            {
                title: "INDIAN MOTORCYCLE OF MINEOLA",
                street: "30 Ipswich Street Fyshwick Australia",
                phone: "02 6280 4491"
            },
            {
                title: "JOHNNY K'S INDIAN MOTORCYCLE",
                street: "3000 MIDWAY BLVD Eluria, Ohio, USA",
                phone: "330-544-9696"
            },
            {
                title: "INDIAN MOTORCYCLE OF LAKEVILLE",
                street: "16640 KENRICK AVE Lakeville, minnesota, USA",
                phone: "952-465-0500"
            },
            {
                title: "SIN CITY INDIAN MOTORCYCLE",
                street: "6550 Drive suite 170 Las Vegas, Nevada,USA",
                phone: "702-998-2993"
            },
            {
                title: "INDIAN MOTORCYCLE OF CLARKSVILLE",
                street: "700 KOPP LN KlarksVille, Indiana, USA",
                phone: "812-948-1621"
            },
            {
                title: "FLAT OUT INDIAN MOTORCYCLE",
                street: "7525 E 88TH PLACE Indianapolis, USA",
                phone: "317-890-9110"
            },
            {
                title: "C&E AUBURN INDIAN MOTORCYCLE",
                street: "12015 SHALE RIDGE LN Auburn, Callifornia, USA",
                phone: "530-885-5556"
            },
            {
                title: "INDIAN MOTORCYCLE OF FRESNO",
                street: "5615 E WESTOVER AVE Fresno, Callifornia, USA",
                phone: "559-292-2269"
            },
            {
                title: "INDIAN MOTORCYCLE OF SAN DIEGO",
                street: "9240 Clairemont mesa blvd San Diego, Callifornia, USA ",
                phone: "858-277-0422"
            },
            {
                title: "HOLLISTER INDIAN MOTORCYCLE OF HOLLISTER",
                street: "411 San Felep road STE 101 Hillister, Callifornia, USA ",
                phone: "831-630-5200"
            }
        ],
        russia: [
            {
                title: "Center \"Brandt Saint Petersburg\"",
                street: "Voskresenskaya embankment, d. 6-8 SaintPeterburg, Russia",
                phone: "+7 (812) 579-12-43"
            },
            {
                title: "Super Marine Motorcycle Dealership",
                street: "Enthusiasts highway, vl1a lit 2B Moscow, Balashikha, Russia",
                phone: "+ 7 495 126 32 26"
            },
            {
                title: "Motorcycle dealership \"PRO Moto\"",
                street: "11415 GULF FREEWAY Houston, Texas, USA",
                phone: "+7 (962) 961-79-69"
            },
            {
                title: "Motorcycle Dealership \"Element\"",
                street: "12-A southern highway, liter 3 Samara, Russia",
                phone: "8 (846) 993-40-00"
            }
        ]
    }
}
const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}
export default mapReducer;