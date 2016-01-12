$(function() {
  $.fn.bootstrapSwitch.defaults.onText = 'On';
  $.fn.bootstrapSwitch.defaults.offText = 'Off';
  $('input[type="checkbox"]').bootstrapSwitch();
  $('input[data-toggle="slider"]').slider();
  $('.navbar-toggler.dropdown').on('show.bs.dropdown', hide_nav);
  $('.navbar-nav a:not([data-toggle="dropdown"])').on('click', hide_nav);

  function hide_nav() {
    $('.navbar-toggleable-xs.collapse').removeClass('in');
  }
});
