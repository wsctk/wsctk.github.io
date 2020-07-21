window.onload = function() {
    const body = document.querySelector("body");
    const height1 = body.scrollHeight
    const height2 = window.innerHeight
    const width1 = body.scrollWidth
    const width2 = window.innerWidth
    const height = (height1 > height2) ? height1 : height2
    const width = (width1 > width2) ? width1 : width2 
    const di = document.createElement('div');
    di.className = "gezhaoceng";
    di.style.width = width -17 + 'px'
    di.style.height = height + 'px'
    body.appendChild(di)
    window.addEventListener("click", function(event) {
        const top = event.pageY;
        const left = event.pageX;
        const d = document.createElement('div');
        d.className = "dot";
        d.style.left = left + 'px';
        d.style.top = top + 'px';
        const ddd = document.querySelector('.gezhaoceng')
        ddd.appendChild(d);
        setTimeout(function(){
            ddd.removeChild(d);
        },3200)
    })
}