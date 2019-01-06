//using IIFE so data leak is not there

(function() {
  //Inital counter value to be 0
  let counterVal = 0;
  //listen to the events of the buttons, hence queryselector all
  const buttons = document.querySelectorAll(".btn-class");
  //counter is the text where we will update the counter Value
  const counter = document.getElementById("counter");
  //loop through the node list to listen to the events
  buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
      const value = event.target;
      //   console.log(value);
      //if prev button clicked, apply the logic
      if (value.classList.contains("prev")) {
        counterVal--;
        counter.textContent = counterVal;
        if (counterVal < 0) {
          counter.style.color = "red";
        }
        // console.log("prev clicked");
      }
      //if next button clicked apply the logic
      if (value.classList.contains("next")) {
        counterVal++;
        counter.textContent = counterVal;
        if (counterVal > 0) {
          counter.style.color = "green";
        }
        // console.log("next clicked");
      }
      //if value is 0, apply the color to be black
      if (counterVal === 0) {
        counter.style.color = "black";
      }
    });
  });
})();
