$(function(){"use strict";$("a").on("click",function(){$(this).parent("li").find(".sub-list").slideToggle(),$(this).children(".arrow").toggleClass("rotate")}),$(".custome-2").on("click",function(){$(".sidebar, .content").toggleClass("move")}),$(".full-screen").on("click",function(){$(this).toggleClass("mini"),$(this).hasClass("mini")?openFullscreen():closeFullscreen()})});var elem=document.documentElement;function openFullscreen(){elem.requestFullscreen?elem.requestFullscreen():elem.mozRequestFullScreen?elem.mozRequestFullScreen():elem.webkitRequestFullscreen?elem.webkitRequestFullscreen():elem.msRequestFullscreen&&elem.msRequestFullscreen()}function closeFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen()}