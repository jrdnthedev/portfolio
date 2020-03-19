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
    const height = window.innerHeight - 70;
    setIntroheight(height);
  }

  var getWrapperHeight = function () {
    const height = window.innerHeight -16;
    setWrapperHeight(height);
  }

  var setIntroheight = function (height) {
    var section = document.getElementsByClassName('header__hero'); 
    section[0].style.height = height + 'px';
    console.log(section[0]);
  }

  var setWrapperHeight = function (height) {
    var wrapper = document.getElementsByClassName('header');
    wrapper[0].style.height = height + 'px';
  }

  getIntroHeight();
  getWrapperHeight();
  window.addEventListener('resize', getIntroHeight,getWrapperHeight);
}());
