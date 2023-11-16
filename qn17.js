/*Create a function that determines the age classification of people:
Bellow are classifications according to specific conditions:
 
    MIMICRY: 			0 - 12
    SELF-DISCOVERY: 	13 - 19
    COMMITMENT: 		20 - 45
    LEGACY:			46 - Above*/


function determineAge(dob) {
    if (dob >= 0 && dob <= 12) {
        console.log("MIMICRY")
    }
    else if (dob >= 13 && dob <= 19) {
        console.log("SELF-DISCOVERY");
    }

    else if (dob >= 20 && dob <= 40) {
        console.log("COMMITMENT");
    }
    else if (dob >= 40) {
        console.log("LEGACY");
    }
}
determineAge(46);





    

