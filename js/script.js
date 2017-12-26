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