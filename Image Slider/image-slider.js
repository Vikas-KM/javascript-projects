//IIFE - so that is not leaked
(function() {
  //Array of images for slideshow
  const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
  //setup a counter
  let counter = 0;
  //listen to button prev and next events
  let btns = document.querySelectorAll(".btn");

  let image = document.getElementById("image");
  console.log(image);
  //listen on each button each
  btns.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      let value = event.target;
      // console.log(value);

      if (value.classList.contains("prev")) {
        // console.log("prev clicked");
        counter--;
        //to loop continuously
        if (counter < 0) {
          counter = images.length - 1;
        }
        // console.log(counter);
        //template literals to get the corresponding image value
        image.src = `images/${images[counter]}`;
      }
      if (value.classList.contains("next")) {
        // console.log("next clicked");
        counter++;
        //to loop continuously
        if (counter > images.length - 1) {
          counter = 0;
        }
        // console.log(counter);
        //template literals to get the corresponding image value
        image.src = `images/${images[counter]}`;
      }
    });
  });
})();
