
const locoScroll = new LocomotiveScroll({
    el:document.querySelector("[data-scroll-container]"),
    smooth:true,
    smartphone:{
        smooth: true
    }
    });
    
    
// navbar toggle btn

function toggleMenu() {
    var links = document.querySelector('.nav_links_container');
    var burgerMenu = document.querySelector('.burger-menu');

    if (links.style.display === "block") {
        links.style.display = "none";
        burgerMenu.innerHTML = "☰"; // Change to burger menu icon
    } else {
        links.style.display = "block";
        burgerMenu.innerHTML = "X"; // Change to close icon
    }
}