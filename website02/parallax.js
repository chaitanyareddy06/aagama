document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        const parallaxSections = document.querySelectorAll(".parallax-section");

        parallaxSections.forEach(function (section) {
            const scrollPosition = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const yOffset = scrollPosition - sectionTop;
                section.style.backgroundPositionY = yOffset * 0.5 + "px"; // Adjust the speed
            }
        });
    });
});