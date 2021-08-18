//      problem number 1
// seer to mon converting function

function seerToMon(seer) {
    // error message
    if (seer < 0) {
        return 'Plz, give a positive number';
    }
    else if (typeof seer != 'number') {
        return 'Plz, give a number of seer to convert mon';
    }

    let mon = seer / 40;
    return mon;
}

console.log(seerToMon(80));


//   problem number 2
// total sales calculation

function totalSales(shirt, pant, shoe) {
    // error message
    if (shirt < 0 || pant < 0 || shoe < 0) {
        return 'Plz, give a positive number';
    }
    else if (typeof shirt != 'number' || typeof pant != 'number' || typeof shoe != 'number') {
        return 'Plz, give a number of  shirt, pant and shoe quantity';
    }


    const shirtPrice = 100;
    const pantPrice = 200;
    const shoePrice = 500;

    const totalShirtPrice = shirt * shirtPrice;
    const totalPantPrice = pant * pantPrice;
    const totalShoePrice = shoe * shoePrice;

    const totalSale = totalShirtPrice + totalPantPrice + totalShoePrice;

    return totalSale;
}



//   problem number 3
// Shirt delivery cost calculation

function deliveryCost(shirt) {
    // error message
    if (shirt < 0) {
        return 'Negative number is not acceptable';
    }
    else if (typeof shirt != 'number') {
        return 'Plz, give a number to calculate the total cost of shirt shipping';
    }


    const first100PerTshirtCost = 100;
    const second100PerTshirtCost = 80;
    const restPerTshirtCost = 50;

    if (shirt <= 100) {
        const totalDeliveryCost = shirt * first100PerTshirtCost;
        return totalDeliveryCost;
    }

    else if (shirt <= 200) {
        const first100TshirtDeliveryCost = first100PerTshirtCost * 100;
        const restTshirt = shirt - 100;
        const second100TshirtDeliveryCost = restTshirt * second100PerTshirtCost;
        const totalDeliveryCost = first100TshirtDeliveryCost + second100TshirtDeliveryCost;
        return totalDeliveryCost;
    }
    else {
        const first100TshirtDeliveryCost = first100PerTshirtCost * 100;
        const second100TshirtDeliveryCost = second100PerTshirtCost * 100;
        const restTshirt = shirt - 200;
        const restTshirtDeliveryCost = restTshirt * restPerTshirtCost;
        const totalDeliveryCost = first100TshirtDeliveryCost + second100TshirtDeliveryCost + restTshirtDeliveryCost;
        return totalDeliveryCost;
    }
}




//                problem number 4
//  finding friends whom had five charactar in their name

let friends = ['arif', 'salman', 'sobuj', 'rubel', 'roki', 'maruf', 'joy'];

function perfectFriend(friends) {
    // error message
   if (typeof friends == 'number') {
        return ' number is not acceptable';
    }
    else if (typeof friends == 'boolean') {
        return 'boolean is not allowed here';
    }

    for (const friend of friends) {
        if (friend.length == 5) {
            return friend;
        }
    }
}







