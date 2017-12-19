
//selecting random number to be shown at start of game
$(document).ready(function () {
    var random = Math.floor(Math.random() * 101 + 19)

//appending random number    
    $('#rndm-number-generator').text(random)

//Crystal variables
    var purpleGem = Math.floor(Math.random() * 11 + 1)
    var blueGem = Math.floor(Math.random() * 11 + 1)
    var greenGem = Math.floor(Math.random() * 11 + 1)
    var yellowGem = Math.floor(Math.random() * 11 + 1)


//tallies variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#win-counter').text(wins);
    $('#loss-counter').text(losses);


//Game reset
    function reset() {
        random = Math.floor(Math.random() * 101 + 19);
        console.log(random)
        $('#rndm-number-generator').text(random)
        purpleGem = Math.floor(Math.random() * 11 + 1);
        blueGem = Math.floor(Math.random() * 11 + 1);
        greenGem = Math.floor(Math.random() * 11 + 1);
        yellowGem = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
    }

    function winner() {
        alert("Your a winner!");
        wins++;
        $('#win-counter').text(wins);
        reset();
    }

    function loser() {
        alert("You lose!");
        losses++;
        $('#loss-counter').text(losses);
        reset()
    }

    $('#purple-gem').on('click', function () {
        userTotal = userTotal + purpleGem;
        console.log("New userTotal = " + userTotal);
        $('#final-total').text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $('#blue-gem').on('click', function () {
        userTotal = userTotal + purpleGem;
        console.log("New userTotal = " + userTotal);
        $('#final-total').text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $('#green-gem').on('click', function () {
        userTotal = userTotal + purpleGem;
        console.log("New userTotal = " + userTotal);
        $('#final-total').text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    })

    $('#yellow-gem').on('click', function () {
        userTotal = userTotal + purpleGem;
        console.log("New userTotal = " + userTotal);
        $('#final-total').text(userTotal);
        if (userTotal == random) {
            winner();
        }
        else if (userTotal > random) {
            loser();
        }
    });
});