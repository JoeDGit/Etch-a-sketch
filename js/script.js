function sketchy (x) {
    const inputSquared = Math.pow(x, 2);
    sketchContain.setAttribute("style",
    `grid-template-columns: repeat(${x}, auto); 
    grid-template-rows: repeat(${x}, auto);`)
    
    for (i = 0; i < inputSquared; i++) {        
    const sketchContain = document.querySelector("#sketchContain");
    const makeDiv = document.createElement('div');    
    sketchContain.appendChild(makeDiv);
    makeDiv.classList.add('squareContain');    
    }
}




function colourOn()  {                                  
const sC = document.querySelectorAll(".squareContain");
sC.forEach(node => node.addEventListener ("mouseover", function handleMouseOver(e) {

    e.target.className = "squareReleased"

    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = "#" + randomColor;
    
}))};



document.getElementById("subSquares").addEventListener("click", function() {

    let pixelNo = prompt("How big would you like your cavas to be (n x n)? 16-100", 16);
        if(pixelNo > 100 || pixelNo < 16) {
            return alert("Please enter a number betweeen 16 and 100");
        } {
    let sqR = document.querySelectorAll(".squareReleased");
    let sqC = document.querySelectorAll(".squareContain");
        sqR.forEach(node => node.remove());
        sqC.forEach(node => node.remove());
        document.getElementById("sWhite").style.visibility = "visible";
        document.getElementById("sBlack").style.visibility = "visible";        
        document.getElementById("reset").style.visibility = "visible";

      
        sketchy(pixelNo);
        colourOn();
       
}} );

document.getElementById("sWhite").addEventListener("click", () => {

    const sC = document.querySelectorAll(".squareContain");    
    sC.forEach(node => node.addEventListener ("mouseover", function(e) {
        e.target.style.backgroundColor = "white";
    }));

    let sqR = document.querySelectorAll(".squareReleased");    
    sqR.forEach(node => node.addEventListener ("mouseover", function(e) {
        e.target.style.backgroundColor = "white";
    }));

});


document.getElementById("sBlack").addEventListener("click", () => {

    const sC = document.querySelectorAll(".squareContain");    
    sC.forEach(node => node.addEventListener ("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    }));

    let sqR = document.querySelectorAll(".squareReleased");    
    sqR.forEach(node => node.addEventListener ("mouseover", function(e) {
        e.target.style.backgroundColor = "black";
    }));

});

    
document.getElementById("reset").addEventListener("click", () => {
    let sqR = document.querySelectorAll(".squareReleased");    
    sqR.forEach(node => node.style.backgroundColor = "grey");
    
       
        
});




  