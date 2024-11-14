/*

WEEK ONE - TO DOS

For each case, write an appropriately labeled function that:

(a) Takes in the length of one side of a square and when executed logs to the console the area and perimeter of the square
(b) Takes in the perpendicular height of a trapezium and the lengths of the two parallel sides such that when executed, the function logs to the console the area of the trapezium
(c) Takes in the the length of one side of a cube and when executed logs to the console the surface area and volume of the cube
(d) Takes in a principal amount, per annum interest rate, number of years, number of times the interest is compounded per year and when executed logs to the console the value of the investment after the given number of years
(e) Takes in values of m and b that relate to a function of the form y = mx + b and when executed logs to the console the coordinates of the line's x-intercept for cases where m is not equal to zero
(f) Takes in values a, b and c and then when executed logs to the console the solutions to the relevant quadratic equation for cases where the discriminant has a value of more than zero

*/





/*
console.log('hello 10I nightmare');
function areaOfSquare(sideLength) {

    let area = sideLength * sideLength;

    console.log(`the area of the square is ${area}.`);
}

areaOfSquare(5);

*/

/*
function quadraticEquationSolver(a,b,c) {

let discriminant = b**2 - 4*a*c;

let solution1 = (-1 * b - Math.sqrt(discriminant)) / (2*a);

let solution2 = (-1 * b + Math.sqrt(discriminant)) / (2*a);

if (discriminant < 0) {
    console.log(`as the discriminant < 0, there is no solution`);
} else if (discriminant === 0) {
    console.log (`as the discriminant = 0, the quadratic has a single solution of x = ${solution1}.`);
} else {
    console.log (`the solutions to the quadratic equation are x = ${solution1} and x = ${solution2}.`)
}

console.log(`the solutions to the quadratic equation are x = ${solution1} and x = ${solution2}.`);
console.log(`NIGHTMARE`)
}
quadraticEquationSolver(1,0,0);
quadraticEquationSolver(1,0,1);
quadraticEquationSolver(1,0,-1);
*/

/*
console.log(Math.random()); 
 
function rockpapersiccorschoise() {
let randomnumber = math.random();
let action = null;

if (randomnumber < (1/3)) {
    action = `rock`;
} else if (randomnumber < (2/3)) { 
    action = `paper`;
} else {
    action = `siccors`;
}
console.log(`the computer has chosen ${action}`);

}


function weatherInVilniusOnNovemberDay() {
    let randomNumber = Math.random();
    let weatherResult = null;

    // Probability of rain (20%), overcast (75%), sun (5%)
    if (randomNumber < 0.2) {
        weatherResult = `rain`;
    } else if (randomNumber < 0.95) {
        weatherResult = `overcast`;
    } else {
        weatherResult = `sun`;
    }

    return weatherResult;
}

function recommendation(weather) {
    if (weather === `rain`) {
        console.log(`It's rainy today.`);
    } else if (weather === `overcast`) {
        console.log(`It be cloudy.`);
    } else {
        console.log(`UUUURAAAAAA! It's sunny!`);
    }
}

recommendation(weatherInVilniusOnNovemberDay());



function mealfortoday() {
    // Generate a random number between 0 and 1
    let randomNumber = Math.random();
    let meal;
    
    if (randomNumber < 0.1) {
        meal = `breakfast`;
    } else if (randomNumber < 0.5) {
        meal = `lunch`;
    } else {
        meal = `dinner`;
    }

    return meal;
}

function recommendation() {
    const meal = mealfortoday();

    if (meal === `breakfast`) {
        console.log(`WAAAAKE UUUUUUPPP IIIITTT IIISSSS TIIIIME FOOOOR BREEEAAAKFAAST`);
    } else if (meal === `lunch`) {
        console.log(`EEEAAAT LUUUUNCH NOOOOOW`);
    } else {
        console.log(`DINNER WITH THE NORSE GODS`);
    }
}

// Call recommendation function only once
recommendation();

*/
/*
function leagueOfLegendsChampionsIWantWheel() {
    let randomNumber = Math.random();
    let champion;

    if (randomNumber < 0.2) {
        champion = `urgot`;
    } else if (randomNumber < 0.4) {
        champion = `mordekaiser`;
    } else if (randomNumber < 0.6) {
        champion = `talon`;
    } else if (randomNumber < 0.8) {
        champion = `fizz`;
    } else {
        champion = `pyke`;
    }

    return champion;
}



function whatLaneShouldIPlay() { 
    let randomNumber = Math.random();
    let lane = null;
    let champion = leagueOfLegendsChampionsIWantWheel(); // Ensure champion is defined here

    if (champion === `urgot`) {
        lane = randomNumber < 0.5 ? `top` : `middle`;
    } else if (champion === `mordekaiser`) {
        lane = randomNumber < 0.5 ? `top` : `middle`;
    } else if (champion === `talon`) {
        lane = randomNumber < 0.5 ? `jungle` : `middle`;
    } else if (champion === `fizz`) {
        lane = `middle`;
    } else {
        lane = `support`;
    }
    console.log(`Play ${champion.toUpperCase()} in ${lane} lane`);
}

whatLaneShouldIPlay();
*/

function championWheelFull() {
    const champions = [
        "Aatrox", "Ahri", "Akali", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios",
        "Ashe", "Aurelion Sol", "Azir", "Bard", "Bel'Veth", "Blitzcrank", "Brand", "Braum",
        "Caitlyn", "Camille", "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo",
        "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz",
        "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim",
        "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "Jax", "Jayce",
        "Jhin", "Jinx", "Kai'Sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina",
        "Kayle", "Kayn", "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc",
        "Lee Sin", "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite",
        "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami",
        "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf",
        "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan",
        "Rammus", "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble",
        "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen",
        "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain",
        "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh",
        "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot",
        "Varus", "Vayne", "Veigar", "Vel'Koz", "Vex", "Vi", "Viego", "Viktor",
        "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo",
        "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean",
        "Zoe", "Zyra"
    ];

    // Generate a random number within the range of the champions array
    let randomNumber = Math.floor(Math.random() * champions.length);
    return champions[randomNumber];
}

function theRole() {
    const roles = ["top", "middle", "jungle", "ADC", "support"];
    let randomNumber = Math.floor(Math.random() * roles.length);
    return roles[randomNumber];
}

function generateChampionAndRole() {
    let champion = championWheelFull();
    let role = theRole();
    console.log(`Your champion is: ${champion}`);
    console.log(`Your role is: ${role}`);
}

// Call the function
generateChampionAndRole();
