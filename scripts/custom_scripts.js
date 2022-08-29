function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function show_bookmark(i) {
    i--;
    var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark");
    bookmarks[i].classList.add("opened");
    bookmarks[i].classList.remove("closed");
}

function close_bookmark() {
    var bookmarks = document.querySelectorAll("#main-content .bookmarks .bookmark.opened");
    for(var i = 0; i < bookmarks.length; i++) {
        bookmarks[i].classList.add("closed");
        bookmarks[i].classList.remove("opened");
    }
}