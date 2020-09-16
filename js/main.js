function slider() {
    let slideIndex = 0,
        slides = document.querySelectorAll('.home-img');
    
    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides(n) {
        showSlides(slideIndex += n); 
    }

    setInterval(plusSlides(1),1000);

}

slider();

AOS.init();