 // Get the button element by its ID
 const easteregg = document.getElementById('easteregg');

 // Add a click event listener to the button
 easteregg.addEventListener('click', function() {
   // Create an Audio object with the path to your fart sound file
   const easterSound = new Audio('tf2-jokes-pyro.mp3'); // Replace with the actual path

   // Play the fart sound
   easterSound.play();
 });
 const carousel = document.getElementById('carousel');
  let currentIndex = 0;

  function showSlide(index) {
    const totalItems = document.querySelectorAll('.carousel-item').length;
    index = (index + totalItems) % totalItems; // Ensure index is within bounds

    const translateValue = -index * 100 + '%';
    carousel.style.transform = `translateX(${translateValue})`;
    currentIndex = index;
  }
