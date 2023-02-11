var carousel_articles = document.querySelector("#blog .carousel .articles");
var carousel_control_circle = document.querySelectorAll(
  "#blog .carousel .control .circle"
);
var carousel_control_arrow = document.querySelectorAll("#blog .carousel .control.arrow");
var current_slide = 0;
var blog = document.querySelector("#blog");

// przyciski karuzeli #blog
async function set_active_slide(n) {
  if (window.matchMedia("(max-width: 767px)").matches) {
    carousel_articles.setAttribute(
      "style",
      "transform: translateX(-" + n * 100 + "vw);"
    );
  } else if (window.matchMedia("(min-width: 992px)").matches) {
    carousel_articles.setAttribute(
      "style",
      "transform: translateX(-" + n * 50 + "vw);"
    );
  } else { }

  if (carousel_control_circle.length > 0) {
    carousel_control_circle[current_slide].classList.remove("active");
    carousel_control_circle[n].classList.add("active");
  }
  if (carousel_control_arrow.length > 0) {
    if (n - 1 < 0) {
      carousel_control_arrow[0].removeAttribute("href");
    }
    else {
      carousel_control_arrow[0].setAttribute("href", "javascript:set_active_slide(" + (n - 1) + ")");
    }
    if (n + 1 >= carousel_articles.children.length) {
      carousel_control_arrow[1].removeAttribute("href");
    }
    else {
      carousel_control_arrow[1].setAttribute("href", "javascript:set_active_slide(" + (n + 1) + ")");
    }
  }
  current_slide = n;
}

// przesuwanie karuzeli #blog
document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;

async function handleTouchStart(evt) {
  const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
  xDown = firstTouch.clientX;
}

async function handleTouchMove(evt) {
  if (!xDown || !evt.path.includes(blog)) return;

  var xDiff = xDown - evt.touches[0].clientX;

  if (xDiff > 0 && current_slide < carousel_articles.children.length - 1) {
    set_active_slide(current_slide + 1);
  } else if (xDiff < 0 && current_slide > 0) {
    set_active_slide(current_slide - 1);
  }
  xDown = null;
}