document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('#choose_enjoy .container figure ');
    const prevButton = document.querySelector('#prevButton');
    const nextButton = document.querySelector('#nextButton');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach(item => {
            item.style.display = 'none';
        });
        carouselItems[index].style.display = 'block';
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Affichez la première diapositive au chargement de la page
    showSlide(currentIndex);
});