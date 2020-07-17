window.onload = function() {
    window.onclick = function () {
        const circle = document.createElement('div')
        circle.style = {
            width: "50px",
            height: "50px",
            borderRadius: "25px",
            position: "absolute",
            background:"transparent",
            animation: "sploosh 3s cubic-bezier(0.165, 0.85, 0.44, 1)"
        }
        const top = window.clientY;
        const left = this.clientX;
        console.log(top);
    }
}