var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/sobaka.jpg') {
      myImage.setAttribute ('src','images/sobaka2.jpg');
    } else {
      myImage.setAttribute ('src','images/sobaka.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName() {
  var myName = prompt('Укажите имя.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Собаки это круто, ' + myName;
  if (myName == "Sonya") {
  	myImage.setAttribute ('src', 'images/Sonya.JPG') ;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Собаки это круто, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}