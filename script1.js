/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  // Each section’s Show More button
  document.querySelectorAll('.show-more-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.closest('.section-block');
      const more = section.querySelector('.more');
      more.classList.toggle('d-none');
      btn.textContent = more.classList.contains('d-none') ? 'Show More' : 'Show Less';
    });
  });

  // Theme switcher
  document.getElementById('themeToggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
  });
});
