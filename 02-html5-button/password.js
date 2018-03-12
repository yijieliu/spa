$(function(){
  $('#pwNormal').on('input',function(){
    $('.pwDisplay').val($('#pwNormal').val());
  });

  $('#btnTest').mouseover(function(){
    $('#btnTest').attr('src','images/2.png');
    $('.pwDisplay').css('display','inline-block');
  });

  $('#btnTest').mouseout(function(){
    $('#btnTest').attr('src','images/1.png');
    $('.pwDisplay').css('display','none');
  });
});