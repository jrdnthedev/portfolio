'use strict';

(function(){
  console.log("...running");

  var menu =  document.getElementById('hamburger-menu');
  var navigation =  document.getElementById('navigation');

  menu.addEventListener('click',function(){

    console.log('clicked');

    if(navigation.classList.contains('show')){
      navigation.classList.remove('show');
    }else{
      navigation.classList.add('show');
    }
  });
}());
