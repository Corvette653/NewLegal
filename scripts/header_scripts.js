var nav = document.querySelectorAll("header .navigation li a");
var back = document.querySelector("header .background-video");

async function show_menu() {
  // open_elem(back, 1500);
  for (elem of nav) {
    open_elem(elem, 1000);
    await sleep(100);
  }
  document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:hide_menu()");
}

async function hide_menu() {
  // close_elem(back, 1500);
  for (elem of nav) {
    close_elem(elem, 1000);
    await sleep(100);
  }
  document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:show_menu()");
}

document.querySelector("header .navigation").addEventListener("click", hide_menu, { passive: true });