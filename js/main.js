$('.block_packet').hover(
  (e) => {
    console.log(e.target.className);
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
        '-webkit-box-shadow': '0px ',
        '-moz-box-shadow': '0px ',
        'box-shadow': 'none',
        border: '1px solid #BFBFBF',
      });
  },
);
