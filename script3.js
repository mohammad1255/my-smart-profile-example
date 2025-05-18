// script.js
document.addEventListener('DOMContentLoaded', () => {
    const updateBtn = document.getElementById('updateBtn');
  
    updateBtn.addEventListener('click', () => {
      // Change image
      const img = document.getElementById('proj2-img');
      img.src = 'images/image4.jpg';
      img.alt = 'Updated Project 2';
  
      // Change title and description
      const title = document.getElementById('proj2-title');
      title.textContent = 'Project Two (Updated)';
  
      const desc = document.getElementById('proj2-desc');
      desc.textContent = 'This project was dynamically updated via JavaScript!';
  
      // Optionally change button text
      updateBtn.textContent = 'Updated';
      updateBtn.disabled = true;
    });
  });
  