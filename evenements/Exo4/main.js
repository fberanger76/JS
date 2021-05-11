function toggleImage() {
    var img = document.getElementById('imageClick').src;
    if (img.indexOf('enfants.jpg')!=-1) {
        document.getElementById('imageClick').src  = 'assets/img/clown.jpg';
    }
     else {
       document.getElementById('imageClick').src = 'assets/img/enfants.jpg';
   }
 }