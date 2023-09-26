let trailer = document.getElementById("trailer");
let trailer2 = document.getElementById("trailer2");
let trailer3 = document.getElementById("trailer3");
let trailer4 = document.getElementById("trailer4");

window.onmousemove = e => {

    //trailer1
    const x = e.clientX ,
        y = e.clientY ;

    const keyframes = {
        transform: `translate(${x}px, ${y}px)`
    }
    trailer.animate(keyframes, {
        duration: 300,
        fill: "forwards"
    });

    // trailer2


    trailer2.animate(keyframes, {
        duration: 600,
        fill: "forwards"
    });

    //trailer3

    trailer3.animate(keyframes, {
        duration: 900,
        fill: "forwards"
    });

    //trailer4

    trailer4.animate(keyframes, {
        duration: 1200,
        fill: "forwards"
    });





}


