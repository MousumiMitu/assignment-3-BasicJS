

// Problem-1: Covertion

function kilometerToMeter (kiloMeter){
    var meter = kiloMeter * 1000;
    return meter;
}

var result = kilometerToMeter(52);
// console.log(result);

// Problem-3: Hotel Costing

function hotelCost (days){
    var cost = 0;
    if ( days <= 10){
        cost = days * 100;
    }
    else if ( days <= 20){
        var firstPartCost = 10 * 100;
        var remainingDays = days - 10;
        var secondPartCost = remainingDays * 80;
        cost = firstPartCost + secondPartCost;
    }
    else {
        var firstPartCost = 10 * 100;
        var secondPartCost = 10 * 80;
        var remainingDays = days - 20;
        var thirdPartCost = remainingDays * 50;
        cost = firstPartCost + secondPartCost + thirdPartCost;
    }
    return cost;
}

var result = hotelCost(42);
 console.log(result);
