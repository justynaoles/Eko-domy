$(document).ready(function() {
    hamburgerMenu();
    mobileElements();
    currentLinkMenu();
    // currentLinkGallery();     
});


function hamburgerMenu() {
    var nav = document.querySelector('.nav');
    var hamburger = document.querySelector('.hamburger');
    var topline = document.querySelector('.topline');
    var midline = document.querySelector('.midline');
    var bottline = document.querySelector('.bottline');
    
    hamburger.addEventListener('click', function(){
 
            $('.nav').slideToggle('slow')
            $('.topline').toggleClass('rotateplus');
            $('.midline').toggleClass('hide');
            $('.bottline').toggleClass('rotateminus');
     
        
    });
       
    
} 


function mobileElements(){
     window.sr = ScrollReveal();
    sr.reveal('h1, h2, h3, h4', {
        reset: false,
        delay: 300
    });
    sr.reveal('.gallery img', { duration: 2000 }, 50);
    sr.reveal('.products1, .products2, .products3, .products4, .products5, .products6', {
        reset: false,
        delay: 300
        
    });
    
}

// function currentLinkGallery() {
    
//     var currentPage = document.URL;
//     var nav = document.querySelector('.menu-gallery');
//     var links = nav.getElementsByTagName('a');

//     console.log(nav); 
    
//    for (let link of links) {
//            if (link.href == currentPage) {
//              link.style.color='#00b468';
//            }
//          }
// }

function currentLinkMenu() {
    
    var currentPage = document.URL;
    var nav = document.querySelector('.menu');
    var links = nav.getElementsByTagName('a');
  
   for (let link of links) {
           if (link.href == currentPage) {
             link.style.color='#ff6132';
           }
         }

}
    
    
    