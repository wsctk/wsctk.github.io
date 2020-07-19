window.onload = function() {
    const body = document.querySelector("body");
    window.addEventListener("click", function(event) {
        const abc = window.pageX
        console.log(abc)
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