const url = window.location.pathname;



  $(document).ready(() => {
    console.log(url);
    $('.js-nav-item')
      .find('a')
      .each(function () {
        $(this).toggleClass(
          'active',
          $(this).attr('href') == url.split('/')[1]
        );
      });
  });