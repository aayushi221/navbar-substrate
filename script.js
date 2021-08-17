// Transition of shapes
const divs = document.querySelectorAll(".scroller > div");

// divs[2].scrollIntoView({ inline: "center", top: "-20px" });

let i = 0;
divs[i].scrollIntoView({ block: "center", top: "-20px" });
setInterval(() => {
  if (i % 17 == 0) {
    document.querySelector(".transition").style.scrollBehavior = "auto";
    divs[i % 17].scrollIntoView({ inline: "center", top: "-20px" });
    document.querySelector(".transition").style.scrollBehavior = "smooth";
  } else {
    divs[i % 17].scrollIntoView({ block: "center", top: "-20px" });
  }
  i++;
}, 1500);

$(document).ready(function slideIt() {
  $("#shapes > div").hide();

  var sizeLoop = $("#shapes > div").length;
  var startLoop = 0;

  $("#shapes > div").first().eq(startLoop).fadeIn(100);

  setInterval(function () {
    $("#shapes > div").eq(startLoop).fadeOut(10);
    if (startLoop == sizeLoop - 1) {
      startLoop = 0;
    } else {
      startLoop++;
    }

    $("#shapes > div").eq(startLoop).fadeIn(1);
  }, 2000);
});
