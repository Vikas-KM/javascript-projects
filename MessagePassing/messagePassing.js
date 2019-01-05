//IFFE

(function() {
  document
    .getElementById("messageForm")
    .addEventListener("submit", function(e) {
      //to prevent the page from loading by default
      e.preventDefault();
      //getting the value
      const message = document.getElementById("messageText");
      const text = message.value;

      //change the text content to the input received

      if (text.length === 0) {
        document.getElementById("feedback").style.display = "block";
        //Timeout function to remove the error message after 2 seconds
        setTimeout(function() {
          document.getElementById("feedback").style.display = "none";
        }, 2000);
      } else {
        document.getElementById("feedback").style.display = "none";
        document.getElementById("messageVal").textContent = text;
        document.getElementById("messageVal").style.textTransform = "uppercase";
      }

      //making the input empty to receive the new input
      message.value = "";
    });
})();
