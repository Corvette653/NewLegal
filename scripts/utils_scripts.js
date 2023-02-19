var utils = {
    body: document.querySelector("body"),
    device: "desktop",//"mobile"

    sleep: function (ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    },

    check_device: function () {
        if (window.matchMedia("(min-width: 950px)").matches) {
            try {
                body.classList.remove("no_scroll");
            } catch { }
            utils.device = "desktop";
        } else { utils.device = "mobile"; }
    },
}

var cookies = {
    declaration: document.querySelector('#cookies'),

    check: function () {
        var saved = false;
        var cookie = document.cookie;
        cookie = cookie.split(';');
        for (var i = 0; i < cookie.length; i++) {
            while (cookie[i].charAt(0) == ' ') {
                cookie[i] = cookie[i].substring(1);
            }
            if (cookie[i].indexOf("cookies_saved") != -1) {
                saved = true;
            }
        }

        if (saved == false) {
            cookies.declaration.style = 'display: block;';
            if (utils.device == "mobile") { utils.body.classList.add("no_scroll"); }
        }
    },

    close_declaration: async function () {
        await utils.sleep(500);
        cookies.declaration.style = 'display: block; opacity: 0;';
        await utils.sleep(500);
        cookies.declaration.style = '';
        try {
            utils.body.classList.remove("no_scroll");
        } catch { }

        var date = new Date();
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        document.cookie = "cookies_saved=True;expires=" + date + ";path=/";
    },
}

var appear = {

    emerge: async function (elem, funct, children, attribute) {
        if (document.querySelector(elem).getBoundingClientRect().top > window.innerHeight / 2) { return false; }
        document.removeEventListener("scroll", funct, false);
        if (funct == appear.zaufali_mi) { setInterval(client_carousel.change_slide, 5000); }
        for (e of children) { e.setAttribute("style", "transition: 1s " + attribute + ";"); }
        await utils.sleep(1000);
        for (e of children) { e.removeAttribute("style"); }
        return true
    },

    jak_dzialamy: async function () { appear.emerge("#jak_dzialamy", appear.jak_dzialamy, [document.querySelector("#jak_dzialamy .title"), document.querySelector("#jak_dzialamy .content")], "opacity"); },
    uslugi: async function () { appear.emerge("#uslugi", appear.uslugi, document.querySelectorAll("#uslugi a"), "transform"); },
    zaufali_mi: async function () { appear.emerge("#zaufali_mi", appear.zaufali_mi, [document.querySelector("#zaufali_mi .grid"), document.querySelector("#zaufali_mi .carousel")], "transform"); },
    o_mnie: async function () { appear.emerge("#o_mnie", appear.o_mnie, [document.querySelector("#o_mnie .portrait"), document.querySelector("#o_mnie .text")], "opacity"); },
    blog: async function () { appear.emerge("#blog", appear.blog, document.querySelectorAll("#blog .articles"), "transform"); },
    kontakt: async function () { appear.emerge("#kontakt", appear.kontakt, [document.querySelector("#kontakt .form"), document.querySelector("#kontakt .asap")], "transform"); },
}

window.onload = function () {
    utils.check_device();
    window.addEventListener("resize", utils.check_device, false);

    document.addEventListener("scroll", appear.jak_dzialamy, false);
    document.addEventListener("scroll", appear.uslugi, false);
    document.addEventListener("scroll", appear.zaufali_mi, false);
    document.addEventListener("scroll", appear.o_mnie, false);
    document.addEventListener("scroll", appear.blog, false);
    document.addEventListener("scroll", appear.kontakt, false);

    appear.jak_dzialamy();
    appear.uslugi();
    appear.zaufali_mi();
    appear.o_mnie();
    appear.blog();
    appear.kontakt();

    cookies.check();

    document.querySelector("#blog").addEventListener("touchstart", blog_carousel.handleTouchStart, false);
    document.addEventListener("touchend", blog_carousel.handleTouchEnd, false);
}

// var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark");

// otwieranie i zamykanie zakładek #uslugi
// async function show_bookmark(n) {
//   open_elem(bookmarks[n - 1], 500);
// }

// async function close_bookmark() {
//   for (var i = 0; i < bookmarks.length; i++)
//     if (bookmarks[i].classList.contains("opened"))
//       close_elem(bookmarks[i], 500);
// }