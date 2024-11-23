// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    const bookTripButton = document.querySelector(".book-trip");
    const cartItems = document.getElementById("cart-items");
    const clearCartButton = document.querySelector(".clear-cart");
  
    // Add booking details to the cart
    bookTripButton.addEventListener("click", () => {
      const destination = document.getElementById("destination").value;
      const date = document.getElementById("date").value;
      const people = document.getElementById("people").value;
  
      // Validate date
      if (!date) {
        alert("Please select a valid date.");
        return;
      }
  
      // Create a new cart item
      const li = document.createElement("li");
      li.textContent = `Destination: ${destination}, Date: ${date}, People: ${people}`;
  
      // Add item to the cart list
      cartItems.appendChild(li);
    });
  
    // Clear all cart items
    clearCartButton.addEventListener("click", () => {
      cartItems.innerHTML = ""; // Clear cart content
    });
  });
  