var $range,    
    $data;     

$(function() {
  $range = $('#range');
  $data = $('#data');
  $data.html($range.val());
  
  $range.change(function() {
    $data.html($range.val());
  });
});
