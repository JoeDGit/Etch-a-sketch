

function sketchy (x) {

    for (i = 0; i < x; i++) {
    const sketchContain = document.querySelector("#sketchContain");
    const makeDiv = document.createElement('div');    
    sketchContain.appendChild(makeDiv);
    makeDiv.classList.add('squareContain');    
    }
}

sketchy(256);

