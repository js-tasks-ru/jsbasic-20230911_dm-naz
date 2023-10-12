function initCarousel() {
  // Инициализируем элементы и параметры для реализации карусели
  const arrowLeft = document.querySelector(".carousel__arrow_left");
  const arrowRight = document.querySelector(".carousel__arrow_right");

  const carouselInner = document.querySelector(".carousel__inner");
  const carouselSlideWidth = carouselInner.offsetWidth;

  let translateX = 0;

  // Определяем кол-во слайдов и общую ширину карусели
  const slidesStepCount = document.querySelectorAll(".carousel__slide").length - 1;
  const CAROUSEL_WIDTH = slidesStepCount * carouselSlideWidth;

  function hideArrow() {
    // Определение текущего слайда по параметру смещения
    const isFirstSlide = Math.abs(translateX) === 0;
    const isLastSlide = Math.abs(translateX) === CAROUSEL_WIDTH;
    const isAnotherSlide = !(isFirstSlide || isLastSlide);

    if (isFirstSlide) {
      arrowLeft.style.display = "none";
      return;
    }

    if (isLastSlide) {
      arrowRight.style.display = "none";
      return;
    }

    if (isAnotherSlide) {
      arrowLeft.style.display = "";
      arrowRight.style.display = "";
      return;
    }
  }

  hideArrow();

  document.addEventListener("click", (event) => {
    // Определяем куда было произведено нажатие
    const isRightArrow = event.target.closest(".carousel__arrow_right") === arrowRight;
    const isLeftArrow = event.target.closest(".carousel__arrow_left") === arrowLeft;
    const isAnotherElement = !(isRightArrow || isLeftArrow);

    if (isAnotherElement) {
      return;
    }

    if (isRightArrow) {
      translateX -= carouselSlideWidth;
    }

    if (isLeftArrow) {
      translateX += carouselSlideWidth;
    }

    carouselInner.style.transform = `translateX(${translateX}px)`;

    hideArrow();
  });
}
