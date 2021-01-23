// https://github.com/md-ashadusjaman/assignment




// First one

function kilometerToMeter() {

    // taking input from user
    const kilometers = prompt("Enter value in kilometers: ")

    // calculate meter 
    const meter = kilometers * 1000

    return meter;
}

var result = kilometerToMeter();
console.log(result);





// Second One budgetCalculator


function budgetCalculator(watch, phone, laptop) {
    var watchCost = watch * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;


    return [watchCost + phoneCost + laptopCost];
}

var Items = budgetCalculator(10, 10, 20);

console.log(Items);






// Third one is hotelCost


function hotelCost(totalDate) {

    var day = 12;
    var cost = 0;

    if (day <= 10) {
        var cost = day * 100;

    } else if (day <= 20) {
        var first10 = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        cost = first10 + secondPart;
    } else {
        var first10 = 10 * 100
        secondPart = 10 * 80
        var remaining = day - 20;
        var thiredPart = remaining * 50;
        cost = first10 + secondPart + thiredPart;
    }
    return cost;
}

var totalCost = hotelCost();

console.log(totalCost);




// And the last one is megaFriend


function megaFriend(friends) {
    var myFriends = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var tallestFriend = friends[i];

        if (tallestFriend.length > myFriends.length) {
            myFriends = tallestFriend;
        }
    }
    return myFriends;
}

var jumboFriends = megaFriend(["rubel", "jamalur", "kamrul hasan", "jihad karim gone", "pavel raj"]);

console.log(jumboFriends);