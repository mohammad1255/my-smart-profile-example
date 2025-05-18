$(function() {
    // 1. Live personalized greeting on keyup
    $('#nameInput').on('keyup', function() {
      const name = $(this).val().trim();
      $('#greeting')
        .text(name ? `Hello, ${name}!` : '')
        .css('opacity', 0)
        .fadeTo(300, 1);
    });
  
    // 2. Change background on hover over greeting
    $('#greeting').hover(
      () => $('#greeting').css('background-color', 'rgba(79,70,229,0.1)'),
      () => $('#greeting').css('background-color', 'transparent')
    );
  
    // 3. Bounce animation on button click
    $('#smartBtn').on('click', function() {
      const btn = $(this);
      btn.addClass('clicked');
      btn.one('animationend', () => btn.removeClass('clicked'));
    });
  
    // 4. Light/Dark theme switcher
    $('#themeToggle').on('change', function() {
      $('body').toggleClass('dark');
    });
  });
  