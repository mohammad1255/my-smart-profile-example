document.addEventListener('DOMContentLoaded', function() {
  var showMoreBtn = document.getElementById('showMoreBtn');
  if(showMoreBtn) {
    showMoreBtn.addEventListener('click', function() {
      var more = document.getElementById('moreContent');
      if(more.classList.contains('d-none')) {
        more.classList.remove('d-none');
        showMoreBtn.textContent = 'Show Less';
      } else {
        more.classList.add('d-none');
        showMoreBtn.textContent = 'Show More';
      }
    });
  }
  var themeToggle = document.getElementById('themeToggle');
  if(themeToggle) {
    themeToggle.addEventListener('change', function() {
      document.body.classList.toggle('dark-mode', this.checked);
    });
  }
});
function changeProject() {
  var cardText = document.getElementById('projectDesc');
  cardText.textContent = 'This project description was changed dynamically!';
}
$(document).ready(function() {
  $('#toggleContent').click(function() {
    $('#secretContent').slideToggle();
  });
  $('#fadeContent').click(function() {
    $('#secretContent').fadeIn().delay(1000).fadeOut();
  });
  $('#loadQuote').click(function() {
    $('#quoteDisplay').load('quote.txt');
  });
  $('#nameInput').keyup(function() {
    var name = $(this).val();
    $('#greeting').text('مرحبا ' + name + '!');
  });
  $('#smartBtn').hover(function() {
    $(this).css('background-color', '#ddd');
  }, function() {
    $(this).css('background-color', '');
  });
  $('#smartBtn').click(function() {
    $(this).animate({width: '200px', height: '50px'});
  });
});
