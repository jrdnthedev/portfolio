'use strict';

(function(){
    anime({
        targets: '.line-drawing-demo .lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1700,
        delay: function(el, i) { return i * 250 },
        direction: 'normal',
        loop: false
    });
}());