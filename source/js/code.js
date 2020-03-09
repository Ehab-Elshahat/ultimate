$(function () {
  'use strict';
  // side bar menu sliding
  $('a').on('click', function () {
    $(this).parent('li').find('.sub-list').slideToggle();
    $(this).children('.arrow').toggleClass('rotate');
  });
  
  //moving sidebar and content section
  $('.custome-2').on('click', function () {
    $('.sidebar, .content').toggleClass('move')
  });

  // full screen browser
  $('.full-screen').on('click', function () {
    $(this).toggleClass('mini');
    if ($(this).hasClass('mini')) {
      openFullscreen() 
    } else {
      closeFullscreen()
    }
  }) 
});


/* Get the element you want displayed in fullscreen mode (a video in this example): */
var elem = document.documentElement;

/* When the openFullscreen() function is executed, open the video in fullscreen.
Note that we must include prefixes for different browsers, as they don't support the requestFullscreen method yet */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}