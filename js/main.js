
$('.product-option').on('click','.current-option',function(){
  $(this).next('.options').slideToggle();
  return false;
});

$('.product-option').find('.options').on('click','.option',function(){
  var currentOption = $(this).parents('.product-option').find('.current-option');
  currentOption.html($(this).html());
  $(this).parent().slideUp();
  return false;
});

$(document).on('click',function(){
  $('.product-option').find('.options').slideUp();
  return false;
});