

// Problem-1: Covertion

function kilometerToMeter (kiloMeter){
    var meter = kiloMeter * 1000;
    if( kiloMeter >= 1){
        return meter;
    }
    else {
        return "kilometer value cann't be negative!!" ;
    }
}

// Problem-2: Budget calculating

function budgetCalculator( watch, mobile, laptop){
    if ((watch, mobile, laptop) >= 1){
        var cost1 = watch * 50;
        var cost2 = mobile * 100;
        var cost3 = laptop * 500;
        var total = cost1 + cost2 + cost3;
        return total;
    }
    else {
        return "cost amount can't be negative or zero!!"
    }
}
// var result = budgetCalculator(-1,0,0);
// console.log(result)

// Problem-3: Hotel Costing

function hotelCost (days){
    var cost = 0;
    if ( days >= 1){
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
    else{
        return "Days input cannot be negative or zero!!";
    }

}

// var result = hotelCost(0);
// console.log(result);

// Problem-4: Largest string

/** Sample array-
 *     var friends = ["Esha", "Rumpa","Afrin","Rifa","Tanjla"];*/

function megaFriend (arrString){
    if ( arrString != " "){
        var longestString = 0;
        var largestName;
        for (var i = 0; i < arrString.length; i++){
            if( arrString[i].length > longestString){
                longestString = arrString[i].length;
                largestName = arrString[i];
            }
        }
        return largestName;
    } 
    else{
        return "array value can't be empty string!!";
    }
}
var result = megaFriend([" "]);
console.log(result);
