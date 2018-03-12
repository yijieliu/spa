var $progress,    
    timer = 0,    
    i = 0;       

$(function() {
  $progress = $('#downloadProgress');
  
  $('#btnStart').click(function() {
    if(timer !== 0) return;
    
    timer = window.setInterval(function() {
      $progress.attr('value', i++);
    }, 100);
  });

  $('#btnStop').click(function() {
    window.clearInterval(timer);
    timer = 0;
  });
  
  $('#btnReset').click(function() {
    $progress.attr('value', i = 0);
  });
});
