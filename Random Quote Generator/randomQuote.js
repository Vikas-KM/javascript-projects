// Add authors and make quotes as array of objects

const quotes = [
  "Man needs his difficulties because they are necessary to enjoy success.",
  "You have to dream before your dreams can come true.",
  "Great dreams of great dreamers are always transcended.",
  "We should not give up and we should not allow the problem to defeat us.",
  "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work.",
  "Be more dedicated to making solid achievements than in running after swift but synthetic happiness.",
  "Unless India stands up to the world, no one will respect us. In this world, fear has no place. Only strength respects strength.",
  "Innovation distinguishes between a leader and a follower.",
  "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
  "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
  "Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.",
  "It always seems impossible until it's done."
];

const btn = document.getElementById("button");

btn.addEventListener("click", function() {
  console.log("Button Clicked");
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  document.getElementById("para").innerHTML = quotes[random];
});
