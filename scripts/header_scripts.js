function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function show_menu() {
    var nav = document.querySelector("header .navigation");
    var back = document.querySelector("header .background-video");
    nav.classList.add("opening");
    nav.classList.remove("closed");
    back.classList.add("opening");
    back.classList.remove("closed");
    await sleep(1000);
    nav.classList.add("opened");
    nav.classList.remove("opening");
    back.classList.add("opened");
    back.classList.remove("opening");
    document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:hide_menu()");
}
async function hide_menu() {
    var nav = document.querySelector("header .navigation");
    var back = document.querySelector("header .background-video");
    nav.classList.add("closing");
    nav.classList.remove("opened");
    back.classList.add("closing");
    back.classList.remove("opened");
    await sleep(1000);
    nav.classList.add("closed");
    nav.classList.remove("closing");
    back.classList.add("closed");
    back.classList.remove("closing");
    document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:show_menu()");
}