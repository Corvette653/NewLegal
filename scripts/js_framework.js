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

async function scroll_to(event, elem, block='start', offset=0, behavior = null) {
  event.preventDefault();
  var y = document.querySelector(elem).getBoundingClientRect().top + window.scrollY;
  var elemHeight = document.querySelector(elem).clientHeight;
  try {
    elemHeight -= document.querySelector(elem + " .triangle").offsetHeight;
  } catch {}
  var headerHeight = document.querySelector("header").clientHeight;
  var screenHeight = window.innerHeight;
  
  if(block == 'start') {
    if (behavior) {window.scrollTo({top: y-headerHeight-offset, behavior: behavior});}
    else {window.scrollTo({top: y-headerHeight-offset});}
  }
  else if(block == 'end') {
    if(behavior) {window.scrollTo({top: y+elemHeight-screenHeight+offset, behavior: behavior});}
    else {window.scrollTo({top:y+elemHeight-screenHeight+offset});}
  }
  else {
    if(behavior) {window.scrollTo({top: y+elemHeight/2-screenHeight/2-headerHeight/2+offset, behavior: behavior})}
    else {window.scrollTo({top: y+elemHeight/2-screenHeight/2-headerHeight/2+offset})}
  }
}