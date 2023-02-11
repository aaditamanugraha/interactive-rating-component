document.getElementById("submit").addEventListener("click", function () {
  let ratingCard = document.querySelector(".card-rating");
  let thankYouCard = document.querySelector(".thank-you");
  let rating = document.getElementsByName("rating");
  let score = "";

  for (let i = 0; i < rating.length; i++) {
    if (rating[i].checked) {
      score = rating[i].value;
      break;
    }
  }

  document.getElementById("selected-score").innerHTML = score;
  console.log("You have been choose " + score);

  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
});
