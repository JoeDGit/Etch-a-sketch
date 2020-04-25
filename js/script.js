

function sketchy (x) {

    for (i = 0; i < x; i++) {
    const sketchContain = document.querySelector("#sketchContain");
    const makeDiv = document.createElement('div');    
    sketchContain.appendChild(makeDiv);
    makeDiv.classList.add('squareContain');    
    }
}

sketchy(256);
colourOn();



function colourOn()  {                                  // Triggers the mouseover behaviour and sets colour to random. 
                                                        // Made into a function so it can be called when button is clicked, instead of on page load.
const sC = document.querySelectorAll(".squareContain");
sC.forEach(node => node.addEventListener ("mouseover", function(e) {

    e.target.className = "squareReleased"

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
    
}))};




document.getElementById("subSquares").addEventListener("click", function() {

    let pixelNo = prompt("Enter the number of pixels you'd like in your sketch", 256);
    let sqR = document.querySelectorAll(".squareReleased");
    let sqC = document.querySelectorAll(".squareContain");
    sqR.forEach(node => node.remove());
    sqC.forEach(node => node.remove());



    sqR.forEach(node => node.style.backgroundColor = "white");
      
    sketchy(pixelNo);
    colourOn();
       
} );
    





  