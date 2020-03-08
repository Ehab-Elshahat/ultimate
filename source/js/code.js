$(function () {
  'use strict';
  $('.arrow').on('click', function () {
    $(this).parent().parent('li').find('.sub-list').slideToggle()
  });
  
});