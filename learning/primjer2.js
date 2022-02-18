const mjesec = "mart"

// switch(mjesec){
//     case "Februar":
//         console.log("Februar ima 28/29 dana")
//         break
//     case "Mart":
//         console.log("Mart ima 31 dan")
//         break
//     case "April":
//         console.log("April ima 30 dana")
//         break
    
// }

switch(mjesec){
    case "januar": case "mart": case "maj": 
    case "jul": case "avgust": case "oktobar":
    case "decembar":
        console.log("Mjesec ima 31 dan")
        break
    case "april": case "jun": case "septembar":
    case "novembar":
        console.log("Mjesec ima 30 dana")
        break
    case "februar":
        console.log("Mjesec ima 28 ili 29 dana")
        break
}