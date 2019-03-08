$(document).ready(function() {

    // DECLARE/INITIALIZE VARIABLES
    var total = 0;
    var winCount = 0;
    var lossCount = 0;
    var compNum = Math.floor(Math.random() * 101)+19;   // Display generated number and conditions so that the computer only finds number 19-120
    $("#comprandom").text(compNum);

    // Generate numbers on crystals
    var crystal1 = Math.floor(Math.random() * 12)+1;
    var crystal2 = Math.floor(Math.random() * 12)+1;
    var crystal3 = Math.floor(Math.random() * 12)+1;
    var crystal4 = Math.floor(Math.random() * 12)+1;


    // RESET FUNCTION
    function reset(){
    total = 0;
    compNum = Math.floor(Math.random() * 101)+19;
    $("#comprandom").text(compNum);
    crystal1 = Math.floor(Math.random() * 12)+1;
    crystal2 = Math.floor(Math.random() * 12)+1;
    crystal3 = Math.floor(Math.random() * 12)+1;
    crystal4 = Math.floor(Math.random() * 12)+1;
    $("#addnum").text(total);
}

   ///GAME FUNCTION
    function game(crystal){
        total += crystal
        $("#addnum").text(total);
        if(total === compNum) {
            winCount++;
            $("#result").text("You Win!");
            $("#winpoint").text(winCount);
            reset();
        }
        if(total > compNum) {
            lossCount++;
            $("#result").text("You Lose!");
            $("#losepoint").text(lossCount);
            reset();
        }  
    }

    // EVENT FUNCTIONS
    $(".c1").on("click", function() {
        game(crystal1);
    });

    $(".c2").on("click", function() {
        game(crystal2);
    });

    $(".c3").on("click", function() {
      game(crystal3);
    });

    $(".c4").on("click", function() {
       game(crystal4);
    });

});