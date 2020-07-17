window.onload = function() {
    document.append()
    const body = document.querySelector("body");
    console.log(body);
    body.addEventListener("mousedown", function(event) {
        const top = event.pageY;
        const left = event.pageX;
        const d = document.createElement('div');
        d.className = "dot";
        d.style.left = left + 'px';
        d.style.top = top + 'px';
        body.appendChild(d);
        setTimeout(function(){
            body.removeChild(d);
        },3200)
    })
}