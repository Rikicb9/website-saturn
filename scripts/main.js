let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/pintura-negra-2.jpg") {
        myImage.setAttribute("src", "images/piedra-locura.jpg");
    } else {
        myImage.setAttribute("src", "images/pintura-negra-2.jpg");
    }
}