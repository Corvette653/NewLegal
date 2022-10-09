var nav = document.querySelector("header .navigation");
var back = document.querySelector("header .background-video");

function show_menu() {
  open_elem(nav, 1000);
  open_elem(back, 1000);
  document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:hide_menu()");
}
function hide_menu() {
  close_elem(nav, 1000);
  close_elem(back, 1000);
  document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:show_menu()");
}

document.querySelector("header .navigation").addEventListener("click", hide_menu, { passive: true });