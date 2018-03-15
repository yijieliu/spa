$(function() {
  var $width = $('#rectangle-width'),
    $height = $('#rectangle-height'),
    $calc = $('#rectangle-calc'),
    blnValid = false;

  $calc.click(function() {
    if(!blnValid) return;

    var width = Number($width.val()),
      height = Number($height.val()),
      p = roundFractional(width * 2 + height * 2, 2),
      a = roundFractional(width * height, 2);

    $('#rectangle-perimeter').val(p);
    $('#rectangle-area').val(a);
  });

  $width.keypress(function(e) {
    validateKey(e);
  });

  $height.keypress(function(e) {
    validateKey(e);
  });

  $width.focusout(function() {
    blnValid = validate('#rectangle-width');
  });
  
  $height.focusout(function() {
    blnValid = validate('#rectangle-height');
  });
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
  }
   function validateKey(e) {
    if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+\[\]{}|;:'",<>/?\\]/.test(e.key)) e.preventDefault();
  }
function validate(field) {
    var $data = $(field),
      $message = $(field + '-validate'),
      label = $(field).attr('data-label');

    if($data.val() === '') {
      $message.html(label + '不能为空！');
      $data.select();
      return false;
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test($data.val())) {
      $message.html(label + '必须是数值');
      $data.select();
      return false;
    }

    if(window.Number($data.val()) < 0) {
      $message.html(label + '必须大于零');
      $data.select();
      return false;
    }

    $message.html('');
    return true;
  }
});