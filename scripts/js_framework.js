var body = document.querySelector("body");
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function open_elem(elem, wait_time) {
  body.classList.add("no_scroll");
  elem.classList.replace("closed", "opening");
  await sleep(wait_time);
  elem.classList.replace("opening", "opened");
}

async function close_elem(elem, wait_time) {
  body.classList.remove("no_scroll");
  elem.classList.replace("opened", "closing");
  await sleep(wait_time);
  elem.classList.replace("closing", "closed");
}

async function scroll_to(event, elem, small = 'start', large = 'start', behavior = null) {
  event.preventDefault();
  var y = document.querySelector(elem).getBoundingClientRect().top + window.scrollY;
  var elemHeight = document.querySelector(elem).clientHeight;
  try {
    elemHeight -= document.querySelector(elem + " .triangle").offsetHeight;
  } catch { }
  var headerHeight = document.querySelector("header").clientHeight;
  var screenHeight = window.innerHeight;

  if (window.innerWidth > 900) { var block = large; }
  else { var block = small; }

  if (block == 'start') { var top = y - headerHeight; }
  else if (block == 'end') { var top = y + elemHeight - screenHeight; }
  else { var top = y + (elemHeight - screenHeight - headerHeight) / 2; }

  if (behavior) { window.scrollTo({ top: top, behavior: behavior }); }
  else { window.scrollTo({ top: top }); }
}