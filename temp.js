// Transition for text

// document.querySelectorAll(".transition > div")[2].scrollIntoView({ inline: "center", top: "-20px" })

// p.scrollIntoView({ inline: "center", top: "-20px" });

const divs = document.querySelectorAll(".scroller > div");

// divs[2].scrollIntoView({ inline: "center", top: "-20px" });

let i = 0;
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


// const parent=document.querySelector(".transition");
// setInterval(() => {
//     console.log(parent);
//     let temp=parent.childNodes[0];
//     parent.removeChild(temp);
//     parent.appendChild(temp);
//     // temp.nextSibling.scrollIntoView({ inline: "center", top: "-20px"});
// }, 2000);


// function scroll() {
//     console.log($('DIV.scroller').height());
//   if($('DIV.scroller').height() >  $('.transition').height()) {

//     var t = $('DIV.scroller').position().top + $('DIV.scroller').height();

//     /* Animate */
//     $('DIV.scroller').animate(
//     {
//       top: '-=' + t + 'px'
//     }
//     , 4000, 'linear', animationComplete);
//   }
// }

// function animationComplete() {
//   $(this).css('top', $('#scrollingContainer').height());
//   scroll();
// }