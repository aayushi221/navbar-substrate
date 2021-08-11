const shapes = document.querySelectorAll(".shapes > div");

let i = 0;
setInterval(function () {
  if (i % 4 == 0) {
    document.querySelector(".container").style.scrollBehaviour = "auto";
    shapes[i % 4].scrollIntoView({ inline: "center", top: "-20px" });
  } else {
    shapes[i % 4].scrollIntoView({ block: "center", top: "-20px" });
  }
  i++;
}, 1000);
