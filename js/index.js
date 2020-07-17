window.onload = function() {
    document.append()
    const body = document.querySelector("body");
    console.log(body);
    body.addEventListener("click", function(event) {
        const top = event.clientY;
        const left = event.clientX;
        body.append('<div class="dot" style="top:' + top +'px;left: ' + left + 'px;"></div>')
})
}