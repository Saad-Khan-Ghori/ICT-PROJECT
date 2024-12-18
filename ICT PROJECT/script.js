document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('.footer-contact a');
    emailLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default mailto behavior
        const email = link.getAttribute('href').replace('mailto:', '');
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
      });
    });
    const bookNowButton = document.querySelector('.book-now');
    const learnMoreButton = document.querySelector('.learn-more');

  // Add click event listeners
  bookNowButton.addEventListener('click', () => {
    window.location.href = 'Booking.html'; // Replace with your Book Now page
  });

  learnMoreButton.addEventListener('click', () => {
    window.location.href = 'learnMore.html'; // Replace with your Learn More page
  });
  });

