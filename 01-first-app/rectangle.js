$(function(){
  var $width=$('.rectangle__width');
  var $height=$('.rectangle__hright');
  var $calc=$('.rectangle__calc');

  $calc.click(function(){
    var width=$width.val();
    var height=$height.val();

    $('.rectangle__perimeter').val(perimeter(width,height));
    $('.rectangle__area').val(area(width,height));
  });
  $width.focusout(function(){
    validate('.rectangle__width');
  });
  $height.focusout(function(){
    validate('.rectangle__height');
  });
});
