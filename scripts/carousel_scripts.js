var client_carousel = {

  slides: document.querySelectorAll("#zaufali_mi .carousel .slide"),
  last_slide: null,
  curr_slide: document.querySelectorAll("#zaufali_mi .carousel .slide")[0],
  next_slide: document.querySelectorAll("#zaufali_mi .carousel .slide")[1],

  change_slide: async function () {
    if (utils.device != "desktop") { return }
    client_carousel.curr_slide.setAttribute("style", "left: -100vw;");
    client_carousel.next_slide.removeAttribute("style");
    await utils.sleep(1000);
    client_carousel.curr_slide.setAttribute("style", "opacity: 0; left: 100vw;");

    client_carousel.last_slide = client_carousel.curr_slide;
    client_carousel.curr_slide = client_carousel.next_slide;
    client_carousel.next_slide = client_carousel.last_slide;
  }
}

var blog_carousel = {
  articles: document.querySelector("#blog .carousel .articles"),
  control_circle: document.querySelectorAll("#blog .carousel .control .circle"),
  current_slide: 0,
  blog: document.querySelector("#blog"),

  set_active_slide: async function (n) {
    if (utils.device == "mobile") {
      blog_carousel.articles.setAttribute("style", "transform: translateX(-" + n * 100 + "vw);");
    }
    else {
      blog_carousel.articles.setAttribute("style", "transform: translateX(-" + n * 50 + "vw);");
    }

    blog_carousel.control_circle[blog_carousel.current_slide].classList.remove("active");
    blog_carousel.control_circle[n].classList.add("active");

    blog_carousel.current_slide = n;
  },

  xStart: null,
  yStart: null,

  handleTouchStart: async function (e) {
    if (e.touches.length > 1) { return; }
    blog_carousel.xStart = e.touches[0].clientX;
    blog_carousel.yStart = e.touches[0].clientY;
  },

  handleTouchEnd: async function (e) {
    if (!blog_carousel.xStart || !e.composedPath().includes(blog)) return;

    var xDiff = blog_carousel.xStart - e.changedTouches[0].clientX;
    var yDiff = blog_carousel.yStart - e.changedTouches[0].clientY;

    if (2 * Math.abs(yDiff) > Math.abs(xDiff)) return; // non-horizontal slide

    if (xDiff > 0 && blog_carousel.current_slide < blog_carousel.articles.children.length - 1) {
      blog_carousel.set_active_slide(blog_carousel.current_slide + 1);
    }
    else if (xDiff < 0 && blog_carousel.current_slide > 0) {
      blog_carousel.set_active_slide(blog_carousel.current_slide - 1);
    }
  },
}

    // if (carousel_control_arrow.length > 0) {
    //   if (n - 1 < 0) {
    //     carousel_control_arrow[0].removeAttribute("href");
    //   }
    //   else {
    //     carousel_control_arrow[0].setAttribute("href", "javascript:set_active_slide(" + (n - 1) + ")");
    //   }
    //   if (n + 1 >= carousel_articles.children.length) {
    //     carousel_control_arrow[1].removeAttribute("href");
    //   }
    //   else {
    //     carousel_control_arrow[1].setAttribute("href", "javascript:set_active_slide(" + (n + 1) + ")");
    //   }
    // }