window.addEventListener('scroll',function(){
  document.querySelector('body').style.fontSize=((document.body.scrollTop*.05)+50)+'px';
});