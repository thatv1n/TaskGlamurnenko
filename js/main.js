$(document).ready(function () {
  $(function () {
    $('.block_packet').hover(
      (e) => {
        e.target.className === 'block_packet' &&
          $(e.target).css({
            '-webkit-box-shadow': '0px 0px 41px 9px rgba(0, 0, 0, 0.2)',
            '-moz-box-shadow': '0px 0px 41px 9px rgba(0, 0, 0, 0.2)',
            'box-shadow': '0px 0px 41px 9px rgba(0, 0, 0, 0.2)',
            border: '2px solid #BFBFBF ',
          });
      },
      (e) => {
        e.target.className === 'block_packet' &&
          $(e.target).css({
            '-webkit-box-shadow': 'none ',
            '-moz-box-shadow': 'none ',
            'box-shadow': 'none',
            border: '1px solid #BFBFBF',
          });
      },
    );

    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('header').css({
          position: 'fixed',
          background: 'black',
          top: '0',
          width: '100%',
          left: '0',
          padding: '5px 40px',
        });
      } else {
        $('header').css({
          position: 'absolute',
          background: 'none',
          top: '',
          width: '',
          left: '',
          padding: '0',
        });
      }
    });

    $('#click-top').click(function () {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        800,
      );
      return false;
    });
  });
});
