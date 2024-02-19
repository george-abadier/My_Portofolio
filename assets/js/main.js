// const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
// const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the
  if(this.scrollY >= 560){
    scrollUp.classList.remove('d-none');
    scrollUp.classList.add('d-block');
  }  
  else {
    scrollUp.classList.remove('d-block');
    scrollUp.classList.add('d-none');
  }
}
window.addEventListener('scroll', scrollUp)

/*==================== ANIMATION FOR TEXT TITLE ====================*/ 
const animatedText = document.getElementById('animatedText');
const dynamicText = document.getElementById('dynamicText');
const textArray = [
    'web applications using Angular & Express.JS.',
    'web applications using Angular & Asp.Net',
    'web interface.',
    'automation tools.'

];
let currentIndex = 0;

function animateText() {
    const currentText = textArray[currentIndex];
    const chars = currentText.split('');

    let animation = setInterval(() => {
    if (chars.length > 0) {
        dynamicText.innerHTML += chars.shift();
    } else {
        clearInterval(animation);
        setTimeout(() => {
        eraseText();
        }, 1000);
    }
    }, 50);
}

function eraseText() {
    let chars = dynamicText.innerHTML.split('');
    let animation = setInterval(() => {
    if (chars.length > 0) {
        chars.pop();
        dynamicText.innerHTML = chars.join('');
    } else {
        clearInterval(animation);
        currentIndex = (currentIndex + 1) % textArray.length;
        setTimeout(() => {
        dynamicText.innerHTML = ''; // Clear dynamic text
        animateText();
        }, 500);
    }
    }, 50);
}

// Start the initial animation
animateText();