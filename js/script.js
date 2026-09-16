function toggleText(button) {
  var extraText = button.closest('.project-card').querySelector('.moreText');

  if ( extraText.style.display === "none" || extraText.style.display === "" ) {
    extraText.style.display = "inline";
    button.innerHTML = "Show Less";
  } else {
    extraText.style.display = "none";
    button.innerHTML = "Show More";
  }
}

const type = document.querySelector('.bio-text');
const text = type.textContent;
type.textContent = '';