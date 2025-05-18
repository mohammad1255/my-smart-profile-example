$(document).ready(function() {
    // 1. slideToggle()
    $('#toggleContent').click(function() {
      $('#secretContent').slideToggle();
    });
  
    // 2. fadeToggle() للصورة
    $('#fadeImageBtn').click(function() {
      $('#funImage').fadeToggle();
    });
  
    // 3. AJAX لتحميل الاقتباس من quote.txt
    $('#loadQuote').attr('type', 'button').click(function() {
      $('#quoteDisplay').text('Loading...');
      $.ajax({
        url: 'quote.txt',      // <-- المسار المصحح هنا
        dataType: 'text',
        cache: false
      })
      .done(function(data) {
        const quotes = data.trim().split('\n');
        const random = quotes[Math.floor(Math.random() * quotes.length)];
        $('#quoteDisplay').fadeOut(200, function() {
          $(this).text(random).fadeIn(200);
        });
      })
      .fail(function(jqXHR, textStatus, errorThrown) {
        console.error('AJAX error:', textStatus, errorThrown);
        $('#quoteDisplay').text('Error loading quote: ' + errorThrown);
      });
    });
  });
  