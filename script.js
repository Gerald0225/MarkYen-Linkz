// header responsive starts

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
// header responsive starts




// home automatic slider starts

var responsiveSlider = function() {

    var slider = document.getElementById("slider");
    var sliderWidth = slider.offsetWidth;
    var slideList = document.getElementById("sliderWrap")
    var count = 1;
    var items = slideList.querySelectorAll("li").length;
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    window.addEventListener('resize', function()  {
        sliderWidth = slider.offsetWidth;
    });

    var prevSlide = function() {
        if(count > 1) {
            count = count = 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
    };

    var nextSlide = function() {
        if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
        }
        else if(count = items) {
            slideList.style.left = "0px"
            count = 1;
        }
    };

    next.addEventListener("click", function() {
        nextSlide();
    });
    prev.addEventListener("click", function() {
        prevSlide();
    });

    setInterval(function(){
        nextSlide()
    }, 5000);

};

window.onload = function(){
    responsiveSlider();
}
// home automatic slider ends


// blogs slider starts

var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
    showSlides(slideIndex += n);
}


function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    
    slides[slideIndex - 1].style.display = "block"; 
    dots[slideIndex - 1].className += " active"; 
}

// blogs slider ends


// services carousel starts

let currentIndex = 0;

const carouselTrack = document.querySelector('.carousel-track');
const serviceCards = document.querySelectorAll('.service-card');
const totalCards = serviceCards.length;

const serviceTitle = document.getElementById("serviceTitle");
const serviceDescription = document.getElementById("serviceDescription");

const titles = [
  "PC RENTALS", "PRINTING", "BAYAD CENTER", 
  "COMPUTER PARTS & ACCESSORIES", "COMPUTER SET", "COMPUTER & PRINTER REPAIR", "PRINTER INK"
];
const descriptions = [
  "P15.00/hour \nYou can avail our MEMBERSHIP CARD(VIP or REGULAR)", "Black & Colored Document Print for as low as P2.00 (P1.00 PROMO for Black and Text only)\nPhoto Print\nCertificate Printing\nBusiness Cards/IDs\nInvitations\nLogos (Photo or Vinyl Stickers)\nName Labels/Tags", "E-LOAD (Smart, Sun, Globe, TM, DITO, Game, Pins etc.)\n✓BILLS PAYMENT (Meralco, PLDT,\nPrimewater, CATV, Cignal, Home Credit, Police Clearance, NBI, PSA, etc.)\n✔REMITTANCE (Padala / Claim)\nCASH-IN/CASH-OUT (GLOBE G-CASH)", 
  "(KEYBOARD, MOUSE, HEADSET,WEBCAM, MOUSE PAD, OTHERS)\nCOMPUTER HARDWARE (PARTS) \n(PROCESSOR, MEMORY, MOTHERBOARD, MONITOR, CASING, POWER SUPPLY, OTHERS)", "2nd Hand \nBrand New", "ALSO AVAILABLE FOR SALE!!\nBRAND NEW PRINTER-EPSON-CANON", "✓ EPSON\n✓ CANON\n✓ BROTHER\n✓ HP(DYE, PIGMENT, SUBLIMATION)"
];

document.querySelector('.next-btn').addEventListener('click', () => {
  if (currentIndex < totalCards - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateCarousel();
});

document.querySelector('.prev-btn').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalCards - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselTrack.style.transform = `translateX(-${currentIndex * (380 + 20)}px)`;
  serviceTitle.textContent = titles[currentIndex];
  serviceDescription.textContent = descriptions[currentIndex];
}


// services carousel ends