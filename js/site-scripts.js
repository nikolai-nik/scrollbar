
let container = $('.scroll-container'),
    content = $('.scroll-content');

$(container).append('<div class="scrollbar"></div>');
let scroll = $('.scrollbar');

content.on('scroll', function(e) {
  scroll.stop(true).css({
    height: Math.pow(container.height(), 2) / content[0].scrollHeight,

    top: content.height() * content[0].scrollTop / content[0].scrollHeight + 5
  });
});
$(window).on('resize', content.trigger.bind(content, 'scroll'));
content.trigger('scroll');


