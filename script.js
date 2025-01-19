// Add to Cart Functionality
document.querySelectorAll(".btn-primary").forEach((button) => {
    button.addEventListener("click", () => {
      alert("Added to cart!");
    });
  });
  
  // Contact Form Submission
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
  });