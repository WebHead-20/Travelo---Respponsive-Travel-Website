/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*===== Menu Show =====*/
/* Validate if constant exists*/
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

/*===== Menu hidden =====*/
/* Validate if constant exists*/
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== FIXING NAVBAR ON SCROLL ===============*/
window.addEventListener("scroll", function() {
    let navbarWrapper = document.getElementById("nav__wrapper");
    navbarWrapper.classList.toggle('fixed', this.window.scrollY > 100)
})

/*=============== HIDING NAVBAR ON SCROLL DOWN ===============*/
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollpos = window.pageYOffset;

    // Show Nav on Scroll Up
    if(prevScrollpos > currentScrollpos){
        document.getElementById("nav__wrapper").style.top = "0";
    }
    // Hide Nav on Scroll Down
    else{
        document.getElementById("nav__wrapper").style.top = "-100%";
    }
    prevScrollpos = currentScrollpos;
}

/*========== SEARCH BAR ========== */
const navSearch = document.getElementById('nav-search'),
    searchBar = document.getElementById('search-bar'),
    searchClose = document.getElementById('search-close');

/* ===== SEARCH SHOW ===== */
/* Validate if constant exists */
if (navSearch) {
    navSearch.addEventListener('click', () => {
        searchBar.classList.add('show-search');
        // Prevent Body Scroll
        document.body.style.overflowY = 'hidden';
    })
};

/* ===== SEARCH HIDE ===== */
/* Validate if constant exists */
if (searchClose) {
    searchClose.addEventListener('click', () => {
        searchBar.classList.remove('show-search');
        // Allows Body Scroll
        document.body.style.overflowY = 'scroll';
    })
};

/* ===== Remove Menu Mobile ===== */
const navLink = document.querySelectorAll(".nav__link")

navLink.forEach(link => {
    link.addEventListener("click", ()=>{
        const navMenu = document.getElementById('nav-menu');
        navMenu.querySelector(".active").classList.remove("active");
        link.classList.add("active");

        // When we click on each navlink, we remove the show-menu class
        navMenu.classList.remove("show-menu");
    })
})

// Home Carousel
$('.home-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    smartSpeed: 700,
    autoplay: true,
    autoplayTimeout: 10000,  
    responsive: {
        0: {
            items:1
        }
    }
});

// Custom Carousel Buttons
let wrapper = document.querySelectorAll(".wrapper");

wrapper.forEach(option => {
    option.addEventListener("click", function(e){

        // If Clicked Btn Contains "carousel-next-btn" class
        if (e.target.classList.contains("carousel__next__btn")){
            // Gets Data Attribute
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            // Go to Next item
            owl.trigger('next.owl.carousel');
        }
        // If Clicked Btn Contains "carousel-prev-btn" class
        else if (e.target.classList.contains("carousel__prev__btn")){
            // Gets Data Attribute
            const target = e.target.getAttribute("data-target");
            var owl = $(target);
            owl.owlCarousel();

            // Go to Prev item
            owl.trigger('prev.owl.carousel');
        }
        else{
            return // Do nothing
        }

    })
});

// Destination Carousel
$('.destination-carousel').owlCarousel({
    loop: true,
    margin: 35,
    stagePadding: 75,
    dots: false,
    smartSpeed: 500,
    // Temporarily disabling autopplay
    // autoplay: true,
    // autoplayTimeout: 8000,  
    responsive: {
        0: {
            items:1,
            stagePadding: 0
        },
        1000:{
            items: 1.2,
        },
        1080:{
            items: 1.61,
        }
    }
});

// Tour Carousel
$('.tour-carousel').owlCarousel({
    loop: true,
    margin: 35,
    dots: false,
    stagePadding: 75,
    smartSpeed: 500,
    // Temporarily disabling autopplay
    // autoplay: true,
    // autoplayTimeout: 8000,  
    responsive: {
        0: {
            items:1,
            stagePadding: 0,
        },
        710: {
            items: 2,
            stagePadding: 0,
        },
        1000: {
            items: 2.5,
        },
        1080: {
            items: 3,
        }
    }
});