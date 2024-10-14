const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

menuOpen.addEventListener('click', () => sidebar.style.left = '0');
menuClose.addEventListener('click', () => sidebar.style.left = '-100%');

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("trending");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        var animates = slides[i].getElementsByClassName("animate");
        for (var j = 0; j < animates.length; j++) {
            animates[j].style.opacity = "0";
        }  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex"; 
    var animates = slides[slideIndex-1].getElementsByClassName("animate");
    for (var j = 0; j < animates.length; j++) {
        (function(j, animates){
            setTimeout(function(){
                animates[j].style.opacity = "1";
            }, j * 200);
            setTimeout(function(){
                animates[j].style.opacity = "0";
            }, 6800 - j * 500);
        })(j, animates);
    } 
    setTimeout(showSlides, 7600);
}

document.getElementById('user').addEventListener('click', function() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'flex';
        dropdownMenu.style.flexDirection = 'column';
        dropdownMenu.style.alignItems = 'center';
        dropdownMenu.style.justifyContent = 'space-between';
        dropdownMenu.style.animation = 'slideDown 0.5s forwards';
    } else {
        dropdownMenu.style.animation = 'slideUp 0.5s forwards';
        setTimeout(function() {
            dropdownMenu.style.display = 'none';
        }, 500);
    }
});