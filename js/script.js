let sliderImages = document.querySelectorAll('.slide'),
 arrowLeft = document.querySelector('#arrow-left'),
 arrowRight = document.querySelector('#arrow-right'),
 current = 0;

//clears all the images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

//initiates the slider to display first image
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

//show previous image
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

//show next image
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++; //to increase the current
}

//Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) { //first image selected
    current = sliderImages.length;
  }
  slideLeft();
})

//Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) { 
    current = -1;
  }
  slideRight();
})    

startSlide();

//--------------POP-UP START--------------

//gets element of popupbox
var popupbox = document.getElementById('simpPop'); 
//get open popupbox button
var popupBtn = document.getElementById('popupBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0]; //specifies that the first array is wanted

//Look for click
popupBtn.addEventListener('click', popOpen); //once a "click" is detected, popOpen function is called
//look for when close "x" is clicked
closeBtn.addEventListener('click', popClose);
//close also by clicking outside the pop up box
window.addEventListener('click', clickOutside)

//function to open the popupbox
function popOpen() {
  popupbox.style.display = 'block';
}

//function to close the popupbox
function popClose() {
  popupbox.style.display = 'none';
}
//function to close the popupbox even if outside of the window is clicked
function clickOutside(e) { //use of internet was used for this code: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
  if(e.target == popupbox) {
      popupbox.style.display = 'none';
  }
}