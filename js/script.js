// Function for the cards on the projects page
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

// Function for the typewriting effect for homepage text
const type = document.querySelector('.bio-text');
const text = type.textContent;
type.textContent = '';

let i = 0;
function typeWriter() {
  if (i < text.length) {
    type.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40); 
  }
}

typeWriter();