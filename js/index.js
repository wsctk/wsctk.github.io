window.onload = function() {
    document.append()
    const body = document.querySelector("body");
    console.log(body);
    body.addEventListener("click", function(event) {
        const top = event.clientY;
        const left = event.clientX;
        const dot = document.createElement('div');
        dot.className = dot;
        dot.style.left = left + 'px';
        dot.style.top = top + 'px';
        body.appendChild(dot);
        console.log(dot);
})
}