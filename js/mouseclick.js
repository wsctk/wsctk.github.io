window.onload = function() {
    const body = document.querySelector("body");
    const winheight = body.scrollHeight
    const winwidth = body.scrollWidth
    console.log(winheight)
    const di = document.createElement('div');
    di.className = "gezhaoceng";
    di.style.width = winwidth + 'px'
    di.style.height = winheight + 'px'
    console.log(di.height)
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