function toggleText() {
  var extraText = document.getElementById("moreText");
  var buttonText = document.getElementById("showMore");

  if (extraText.style.display === "none") {
    extraText.style.display = "inline";
    buttonText.style.display = "none";
  } else {
    extraText.style.display = "none";
    buttonText.innerHTML = "Show More";
  }
}