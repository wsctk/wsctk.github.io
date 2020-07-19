window.onload = function() {
    const body = document.querySelector("body");
    const winheight = window.innerHeight
    const winwidth = window.innerWidth
    const di = document.createElement('div');
    di.className = "gezhaoceng";
    di.innerWidth = winwidth
    di.innerHeight = winheight
    console.log(di.innerHeight)
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