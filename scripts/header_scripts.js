var header = {
  navbar: document.querySelectorAll("header .navigation li a"),

  open_elem: async function (elem, wait_time) {
    elem.classList.replace("closed", "opening");
    await utils.sleep(wait_time);
    elem.classList.replace("opening", "opened");
  },

  close_elem: async function (elem, wait_time) {
    elem.classList.replace("opened", "closing");
    await utils.sleep(wait_time);
    elem.classList.replace("closing", "closed");
  },

  show: async function () {
    for (elem of header.navbar) {
      header.open_elem(elem, 1000);
      await utils.sleep(100);
    }
    utils.body.classList.add("no_scroll");
    document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:header.hide()");
  },

  hide: async function () {
    utils.body.classList.remove("no_scroll");
    for (elem of header.navbar) {
      header.close_elem(elem, 1000);
      await utils.sleep(100);
    }
    document.querySelector("header .main-header .hamburger").setAttribute("href", "javascript:header.show()");
  },

  scroll_to: async function(event, elem, small = 'start', large = 'start', behavior = null) {
    event.preventDefault();
    var y = document.querySelector(elem).getBoundingClientRect().top + window.scrollY;
    var elemHeight = document.querySelector(elem).clientHeight;
    try {
      elemHeight -= document.querySelector(elem + " .triangle").offsetHeight;
    } catch { }
    var headerHeight = document.querySelector("header").clientHeight;
    var screenHeight = window.innerHeight;

    if (utils.device = "desktop") { var block = large; }
    else { var block = small; }

    if (block == 'start') { var top = y - headerHeight; }
    else if (block == 'end') { var top = y + elemHeight - screenHeight; }
    else { var top = y + (elemHeight - screenHeight - headerHeight) / 2; }

    if (behavior) { window.scrollTo({ top: top, behavior: behavior }); }
    else { window.scrollTo({ top: top }); }

    header.hide();
  },
}