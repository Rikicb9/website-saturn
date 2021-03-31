// Image switcher code

let myImage = document.querySelector("img");
myImage.onclick = function() {
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "images/pintura-negra-2.jpg") {
        myImage.setAttribute("src", "images/piedra-locura.jpg");
    } else {
        myImage.setAttribute("src", "images/pintura-negra-2.jpg");
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Saturno te está devorando, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Saturno te está devorando, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}