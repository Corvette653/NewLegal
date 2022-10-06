var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark");
var carousel_articles = document.querySelector("#blog .carousel .articles");
var carousel_control = document.querySelectorAll(
  "#blog .carousel .control .circle"
);
var current_slide = 0;
var blog = document.querySelector("#blog");

function show_bookmark(n) {
  open_elem(bookmarks[n - 1], 500);
}

function close_bookmark() {
  for (var i = 0; i < bookmarks.length; i++)
    if (bookmarks[i].classList.contains("opened"))
      close_elem(bookmarks[i], 500);
}

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
  } else {
  }
  carousel_control[current_slide].classList.remove("active");
  carousel_control[n].classList.add("active");
  current_slide = n;
}

document.addEventListener("touchstart", handleTouchStart, false);
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;

function handleTouchStart(evt) {
  const firstTouch = (evt.touches || evt.originalEvent.touches)[0];
  xDown = firstTouch.clientX;
}

function handleTouchMove(evt) {
  if (!xDown || !evt.path.includes(blog)) return;

  var xDiff = xDown - evt.touches[0].clientX;

  if (xDiff > 0 && current_slide < carousel_articles.children.length - 1) {
    set_active_slide(current_slide + 1);
  } else if (xDiff < 0 && current_slide > 0) {
    set_active_slide(current_slide - 1);
  }
  xDown = null;
}
