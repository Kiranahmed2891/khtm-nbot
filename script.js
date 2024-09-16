// Get the quote element
const quote = document.querySelector('blockquote');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Check if the quote element is in view
  if (isInView(quote)) {
    // Animate the quote element to fade in
    quote.style.opacity = 1;
    quote.style.transition = 'opacity 0.5s';
  }
});

// Function to check if an element is in view
function isInView(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener('mouseover', () => {
    // Change the background color of the link on hover
    link.style.backgroundColor = '#ccc';
  });

  link.addEventListener('mouseout', () => {
    // Reset the background color of the link on mouseout
    link.style.backgroundColor = '';
  });
});

// Get the background image element
const backgroundImage = document.querySelector('.background-image');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Calculate the scroll position
  const scrollPosition = window.scrollY;

  // Move the background image based on the scroll position
  backgroundImage.style.transform = `translateY(${scrollPosition * 0.5}px)`;
});