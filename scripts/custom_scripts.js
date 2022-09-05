var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark");
var carousel_articles = document.querySelector("#blog .carousel .articles");
var carousel_control = document.querySelectorAll("#blog .carousel .control .circle");

function show_bookmark(n) {
  open_elem(bookmarks[n - 1], 500);
}

function close_bookmark() {
  for (var i = 0; i < bookmarks.length; i++)
    if (bookmarks[i].classList.contains("opened"))
      close_elem(bookmarks[i], 500);
}

async function set_active_slide(n) {
  n--;
  carousel_articles.setAttribute(
    "style",
    "transform: translateX(-" + n * 100 + "vw);"
  );
  for (var i = 0; i < carousel_control.length; i++)
    carousel_control[i].classList.remove("active");
  carousel_control[n].classList.add("active");
}
