let slideIndex = 0;
const totalSlides = document.querySelectorAll('.card').length;

function moveSlider(n) {
    const cards = document.querySelectorAll('.card');
    const maxIndex = totalSlides - 1;

    slideIndex += n;

    // Check if slideIndex is out of bounds
    if (slideIndex < 0) {
        slideIndex = 0; // Restrict slideIndex to 0 if it's trying to go before the first slide
    } else if (slideIndex > maxIndex) {
        slideIndex = maxIndex; // Restrict slideIndex to maxIndex if it's trying to go beyond the last slide
    }

    const offset = -slideIndex * (cards[0].offsetWidth + 20); // 20px for margin-right
    document.querySelector('.cards-slider').style.transform = `translateX(${offset}px)`;

    // Disable/Enable buttons based on slideIndex
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');
    prevButton.disabled = slideIndex === 0; // Disable prev button if slideIndex is 0
    nextButton.disabled = slideIndex === maxIndex; // Disable next button if slideIndex is maxIndex
}
