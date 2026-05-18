/*

    One unique image, with appropriate and matching content in the alt tag.  
    A paragraph or two of content that describes the daily item (paragraph must include the name of the highlighted weekday)
    A unique color that supports the image and paragraph of content


    pic - image src
    alt - the alt tag for the image
    desc - a description of the coffee
    day - the day of the week for the coffee
    color - color associated with coffee
    name - the name of the coffee

*/


let myDate = new Date();
let myDay = myDate.getDay();
let today = "";
let coffee = {};

// Query String Support
let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

//override day if ?day= is present
if(urlParams.has("days")){
    myDay = urlParams.get("day");
}

//convert to number
myDay = parseInt(myDay);

//switch for all 7 days
switch(myDay){

 	case 0:
    	today =  "Sunday";
        coffee = {
            name:"Caramel Latte",
            pic:"caramel-latte.jpg",
            alt:"A warm caramel latte.",
            color:"goldenrod",
            day:"Sunday",
            desc:`A sweet start to your Sunday!`,
        };
 	break;

    case 1:
   	    today = "Monday";
        coffee = {
            name:"Pumpkin Spice Latte",
            pic:"pumpking-spice-latte.jpg",
            alt:"A pumpkin spice latte on a fall morning.",
            color:"orange",
            day:"Monday",
            desc:`A cozy classic to kick off your week.`,
        };
 	break;

 	case 2:
   	    today = "Tuesday";
        coffee = {
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A refreshing cup of bubble tea.",
            color:"pink",
            day:"Tuesday",
            desc:`A fun and sweet treat for your Tuesday!`,
        };
 	break;

    case 3:
   	    today = "Wednesday";
        coffee = {
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A smooth cold brew coffee.",
            color:"steelblue",
            day:"Wednesday",
            desc:`Bold, smooth, and perfect for mid-week energy.`,
        };
 	break;

    case 4:
   	    today = "Thursday";
        coffee = {
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A rich chocolate mocha.",
            color:"chocolate",
            day:"Thursday",
            desc:`Chocolate and espresso to power your through Thursday.`,
        };
 	break;

    case 5:
   	    today = "Friday";
        coffee = {
            name:"Drip Coffee",
            pic:"drip.jpg",
            alt:"A classic drip coffee.",
            color:"saddlebrown",
            day:"Friday",
            desc:`Simple, reliable, and perfect for Friday.`,
        };
 	break;

    case 6:
   	    today = "Saturday";
        coffee = {
            name:"Frappaccino",
            pic:"frappaccino.jpg",
            alt:"A sweet frappaccino treat.",
            color:"plum",
            day:"Saturday",
            desc:`A fun weekend drink to celebrate Saturday!.`,
        };
 	break;


 	default:
    	today = "Something went wrong!";

}

console.log(coffee)

alert(coffeeTemplate(coffee));

//adds coffee to page?
document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);
document.querySelector("html").style.backgroundColor = coffee.color;

function coffeeTemplate(coffee){
    let myReturn = "";

    myReturn += `
   <p>
	<img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee">
	<strong>${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong>${coffee.name}</strong> ${coffee.desc}
    </p>
    `;

    return myReturn;
}


