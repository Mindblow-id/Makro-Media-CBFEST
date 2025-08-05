
function setSearchParam(key, value) {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    // Update the URL without reloading the page
    history.replaceState(null, "", url);
}