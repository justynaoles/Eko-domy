
$(document).ready(function() {

  currentLinkGallery();

  function currentLinkGallery() {
    
    var currentPage = document.URL;
    var nav = document.querySelector('.menu-gallery');
    var links = nav.getElementsByTagName('a');

   for (let link of links) {
           if (link.href == currentPage) {
             link.style.color='#00b468';
           }
         }
}
   
});
