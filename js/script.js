function toggleText(button) {
  var extraText = button.closest('project-card').querySelector('.moreText');

  if ( extraText.style.display === "none" || extraText.style.display === "" ) {
    extraText.style.display = "inline";
    button.style.display = "none";
  } else {
    extraText.style.display = "none";
    button.innerHTML = "Show More";
  }
}