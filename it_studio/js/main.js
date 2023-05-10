(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var openMenuBtn = document.querySelector('.nav__open-btn');
var menu = document.querySelector('.nav__container');
var openedMenu = false;
openMenuBtn.addEventListener('click', function () {
  if (openedMenu == false) {
    menu.classList.add('nav__container--opened');
    openMenuBtn.classList.add('nav__open-btn--opened');
    openedMenu = true;
  } else {
    menu.classList.remove('nav__container--opened');
    openMenuBtn.classList.remove('nav__open-btn--opened');
    openedMenu = false;
  }
});
var nav = document.querySelector('.nav');
window.addEventListener('scroll', function () {
  if (window.scrollY > 5) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMxRCxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0FBR3BELElBQUksVUFBVSxHQUFHLEtBQUs7QUFDdEIsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFNO0VBQ3hDLElBQUksVUFBVSxJQUFJLEtBQUssRUFBRTtJQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQztJQUM1QyxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztJQUNsRCxVQUFVLEdBQUcsSUFBSTtFQUNyQixDQUFDLE1BQU07SUFDSCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQztJQUMvQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUNyRCxVQUFVLEdBQUcsS0FBSztFQUN0QjtBQUNKLENBQUMsQ0FBQztBQUdGLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO0FBRXhDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsWUFBTTtFQUNwQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO0lBQ3BCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQztFQUN0QyxDQUFDLE1BQU07SUFDSCxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7RUFDekM7QUFDSixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgb3Blbk1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2X19vcGVuLWJ0bicpO1xyXG5sZXQgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXZfX2NvbnRhaW5lcicpO1xyXG5cclxuXHJcbmxldCBvcGVuZWRNZW51ID0gZmFsc2Vcclxub3Blbk1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBpZiAob3BlbmVkTWVudSA9PSBmYWxzZSkge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbmF2X19jb250YWluZXItLW9wZW5lZCcpO1xyXG4gICAgICAgIG9wZW5NZW51QnRuLmNsYXNzTGlzdC5hZGQoJ25hdl9fb3Blbi1idG4tLW9wZW5lZCcpO1xyXG4gICAgICAgIG9wZW5lZE1lbnUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5yZW1vdmUoJ25hdl9fY29udGFpbmVyLS1vcGVuZWQnKTtcclxuICAgICAgICBvcGVuTWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCduYXZfX29wZW4tYnRuLS1vcGVuZWQnKTtcclxuICAgICAgICBvcGVuZWRNZW51ID0gZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuXHJcbmxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2Jyk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gNSkge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCduYXYtLXNjcm9sbGVkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCduYXYtLXNjcm9sbGVkJyk7XHJcbiAgICB9XHJcbn0pOyJdfQ==
