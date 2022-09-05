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
