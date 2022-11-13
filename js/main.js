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
