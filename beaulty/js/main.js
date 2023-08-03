(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var menuBtn = document.querySelector('.menu-open');
var menu = document.querySelector('.menu');
var menuClose = document.querySelector('.menu__close');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', function (ev) {
    menu.classList.add('_active');
    document.body.classList.add('_no-scroll');
  });
  menuClose.addEventListener('click', function (ev) {
    menu.classList.remove('_active');
    document.body.classList.remove('_no-scroll');
  });
}
var swiper = new Swiper('.forpartners__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    720: {
      slidesPerView: 2
    },
    1224: {
      slidesPerView: 3
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.forpartners__slider-btn._next',
    prevEl: '.forpartners__slider-btn._prev'
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7QUFDbEQsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7QUFDMUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUM7QUFFdEQsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO0VBQ2pCLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxFQUFFLEVBQUk7SUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0lBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUM7RUFDN0MsQ0FBQyxDQUFDO0VBRUYsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFBLEVBQUUsRUFBSTtJQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDaEMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQztFQUNoRCxDQUFDLENBQUM7QUFDTjtBQUVBLElBQU0sTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO0VBQzlDO0VBQ0EsU0FBUyxFQUFFLFlBQVk7RUFDdkIsSUFBSSxFQUFFLEtBQUs7RUFDWCxhQUFhLEVBQUUsQ0FBQztFQUNoQixZQUFZLEVBQUUsRUFBRTtFQUVoQixXQUFXLEVBQUU7SUFDVCxHQUFHLEVBQUU7TUFDRCxhQUFhLEVBQUU7SUFDbkIsQ0FBQztJQUVELElBQUksRUFBRTtNQUNGLGFBQWEsRUFBRTtJQUNuQjtFQUNKLENBQUM7RUFFRDtFQUNBLFVBQVUsRUFBRTtJQUNWLE1BQU0sRUFBRSxnQ0FBZ0M7SUFDeEMsTUFBTSxFQUFFO0VBQ1Y7QUFDRixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW9wZW4nKTtcclxubGV0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpOyBcclxubGV0IG1lbnVDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X19jbG9zZScpO1xyXG5cclxuaWYgKG1lbnVCdG4gJiYgbWVudSkge1xyXG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ID0+IHtcclxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ19hY3RpdmUnKTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ19uby1zY3JvbGwnKTtcclxuICAgIH0pXHJcblxyXG4gICAgbWVudUNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXYgPT4ge1xyXG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnX2FjdGl2ZScpO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnX25vLXNjcm9sbCcpO1xyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmZvcnBhcnRuZXJzX19zbGlkZXInLCB7XHJcbiAgICAvLyBPcHRpb25hbCBwYXJhbWV0ZXJzXHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IGZhbHNlLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMSxcclxuICAgIHNwYWNlQmV0d2VlbjogMzAsXHJcblxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICA3MjA6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogMlxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIDEyMjQ6IHtcclxuICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgXHJcbiAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xyXG4gICAgbmF2aWdhdGlvbjoge1xyXG4gICAgICBuZXh0RWw6ICcuZm9ycGFydG5lcnNfX3NsaWRlci1idG4uX25leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuZm9ycGFydG5lcnNfX3NsaWRlci1idG4uX3ByZXYnLFxyXG4gICAgfSxcclxuICB9KTsiXX0=
