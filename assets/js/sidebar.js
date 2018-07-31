'use strict';

//Fixed sidebar
var sidebar = $('.sidebar');

function Sidebar() {
  var mTop = $('#top').offset().top;
  var top = $(document).scrollTop();
  var eTop = $('#endMenu').offset().top;
  var mHeight = $('.sidebar').height();
  var width = $('.col-3').width();
  
  if (top >= (mTop - 100) && top < (eTop - mHeight - 300)) {
    sidebar.addClass('sidebar--fixed').removeClass('sidebar--bottom');
    sidebar.css("width", width);
  } else if (top >= (eTop - mHeight - 300)) {
    sidebar.addClass('sidebar--bottom').removeClass('sidebar--fixed');
  } else {
    sidebar.removeClass('sidebar--fixed').removeClass('sidebar--bottom');
  }
}

Sidebar();

$(window).on('scroll', function () {
  Sidebar();
  var $sections = $('.chapter');
  $sections.each(function (i, el) {
    var top = $(el).offset().top - 225;
    var bottom = top + $(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if (scroll > top && scroll < bottom) {
      $('li.active').removeClass('active');
      $('a[href="#' + id + '"]').parent().addClass('active');
    }
  })
});

$(window).on('resize', function () {
  Sidebar();
});

//Anchors
$(function () {
  $('a[href^="#"]').on('click', function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top - 110}, 800);
    return false;
  });
});