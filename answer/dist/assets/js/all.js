"use strict";

var url = window.location.pathname;
$(document).ready(function () {
  console.log(url);
  $('.js-nav-item').find('a').each(function () {
    $(this).toggleClass('active', $(this).attr('href') == url.split('/')[1]);
  });
});
//# sourceMappingURL=all.js.map
