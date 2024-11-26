document.addEventListener('DOMContentLoaded', () => {
  // Price per category
  const tourPrices = {
    classic: 50000,
    premium: 80000,
    business: 120000,
  };

  const hotelPrices = {
    standard: 10000,
    deluxe: 20000,
    luxury: 40000,
  };

  const calculatePrice = () => {
    // Get selected tour type and hotel type
    const tourType = document.getElementById('tour-type').value;
    const hotelType = document.getElementById('hotel').value;

    // Get guest count and room numbers
    const guestCount = parseInt(document.getElementById('guests').value) || 0;
    const adultRooms = parseInt(document.getElementById('adult-rooms').value) || 0;
    const childRooms = parseInt(document.getElementById('child-rooms').value) || 0;

    // Calculate the total price
    const tourPrice = tourPrices[tourType] || 0;
    const hotelPrice = hotelPrices[hotelType] || 0;

    const totalPrice = guestCount * tourPrice + (adultRooms + childRooms) * hotelPrice;
    document.getElementById('price').innerText = `Rs. ${totalPrice.toLocaleString()}`;
  };

  // Add event listeners for input changes
  document.getElementById('tour-type').addEventListener('change', calculatePrice);
  document.getElementById('hotel').addEventListener('change', calculatePrice);
  document.getElementById('guests').addEventListener('input', calculatePrice);
  document.getElementById('adult-rooms').addEventListener('input', calculatePrice);
  document.getElementById('child-rooms').addEventListener('input', calculatePrice);

  // Form submission handler
  document.getElementById('booking-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const price = document.getElementById('price').innerText;

    if (!name || !email) {
      alert('Please fill in all required fields!');
    } else {
      alert(`Thank you ${name}! Your booking has been submitted. Total Price: ${price}`);
    }
  });
});
