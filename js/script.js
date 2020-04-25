

function sketchy (x) {

    for (i = 0; i < x; i++) {
    const sketchContain = document.querySelector("#sketchContain");
    const makeDiv = document.createElement('div');    
    sketchContain.appendChild(makeDiv);
    makeDiv.classList.add('squareContain');    
    }
}

sketchy(256);

const sC = document.querySelectorAll(".squareContain");
sC.forEach(node => node.addEventListener ("mouseover", function(e) {

    e.target.className = ".squareReleased"
    console.log(e);
}));
console.log(sC);







  