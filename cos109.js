// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name) {
      alert('Please enter your name.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (message.length < 10) {
      alert('Your message must be at least 10 characters long.');
      return;
    }
  
  // Helper function to validate email
  function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
    alert("Thank you for your message! I'll get back to you soon.");
    document.getElementById("contactForm").reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  function showDetails(title, description) {
    // Dynamically update modal content
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-description').textContent = description;
  
    // Show the modal
    document.getElementById('modal').style.display = 'block';
  }
  
  function closeModal() {
    // Hide the modal
    document.getElementById('modal').style.display = 'none';
  }
  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';
  });
  