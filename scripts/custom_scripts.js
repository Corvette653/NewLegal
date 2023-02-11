var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark");

// otwieranie i zamykanie zakładek #uslugi
async function show_bookmark(n) {
  open_elem(bookmarks[n - 1], 500);
}

async function close_bookmark() {
  for (var i = 0; i < bookmarks.length; i++)
    if (bookmarks[i].classList.contains("opened"))
      close_elem(bookmarks[i], 500);
}

// pojawianie sie elementow
document.addEventListener("scroll", jak_dzialamy_wejscie, false);
document.addEventListener("scroll", uslugi_wejscie, false);
document.addEventListener("scroll", zaufali_mi_wejscie, false);
document.addEventListener("scroll", o_mnie_wejscie, false);
document.addEventListener("scroll", blog_wejscie, false);
document.addEventListener("scroll", kontakt_wejscie, false);

async function wejscie(elem, funct, children, attribute) {
  if(document.querySelector(elem).getBoundingClientRect().top > window.innerHeight / 2) {return;}
  document.removeEventListener("scroll", funct, false);
  for(e of children) {e.setAttribute("style", "transition: 1s "+attribute+";");}
  await sleep(1000);
  for(e of children) {e.removeAttribute("style");}
}

async function jak_dzialamy_wejscie() {wejscie("#jak_dzialamy", jak_dzialamy_wejscie, document.querySelectorAll("#jak_dzialamy .content"), "opacity");}
async function uslugi_wejscie() {wejscie("#uslugi", uslugi_wejscie, document.querySelectorAll("#uslugi a"), "transform");}
async function zaufali_mi_wejscie() {wejscie("#zaufali_mi", zaufali_mi_wejscie, document.querySelectorAll("#zaufali_mi .content"), "transform");}
async function o_mnie_wejscie() {wejscie("#o_mnie", o_mnie_wejscie, [document.querySelector("#o_mnie .portrait"), document.querySelector("#o_mnie .text")], "opacity");}
async function blog_wejscie() {wejscie("#blog", blog_wejscie, document.querySelectorAll("#blog .articles"), "transform");}
async function kontakt_wejscie() {wejscie("#kontakt", kontakt_wejscie, [document.querySelector("#kontakt .form"), document.querySelector("#kontakt .asap")], "transform");}