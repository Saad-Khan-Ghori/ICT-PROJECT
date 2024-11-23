document.addEventListener('DOMContentLoaded', () => {
    const emailLinks = document.querySelectorAll('.footer-contact a');
    
    emailLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default mailto behavior
        const email = link.getAttribute('href').replace('mailto:', '');
        window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
      });
    });
  });

