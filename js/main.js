'use strict';

(function(){
  var menu =  document.getElementById('hamburger-menu');
  var navigation =  document.getElementById('navigation');
  menu.addEventListener('click',function(){
    if(navigation.classList.contains('show')){
      navigation.classList.remove('show');
    }else{
      navigation.classList.add('show');
    }
  });

  var getIntroHeight = function () {
    const height = window.innerHeight - 72;
    setIntroheight(height);
  }

  var setIntroheight = function (height) {
    var section = document.getElementsByClassName('header__hero');
    section[0].style.height = height + 'px';
    console.log(section[0]);
  }

  getIntroHeight();
  window.addEventListener('resize', getIntroHeight);
}());
