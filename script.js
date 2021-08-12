$(document).ready(function slideIt() {

    $("#shapes > div").hide();

    var sizeLoop = $("#shapes > div").length;
    var startLoop = 0;

    $("#shapes > div").first().eq(startLoop).fadeIn(500);


    setInterval(function () {

        $("#shapes > div").eq(startLoop).fadeOut(1000);
        if (startLoop == sizeLoop - 1) {
            startLoop = 0
        }
        else {
            startLoop++;
        }

        $("#shapes > div").eq(startLoop).slideDown(700);

    }, 2000);


});