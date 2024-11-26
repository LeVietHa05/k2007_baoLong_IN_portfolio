
function toHref(href) {
    window.location.href = href
}


//big view

bigview.addEventListener('click', function () {
    bigview.style.display = 'none';
});
function bigView(img) {
    console.log(img);
    bigview.innerHTML = `<img src="../${img}" alt="">`;
    bigview.style.display = 'flex';
}