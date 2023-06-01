const horizontalScroller = (element, to, duration) => {
  const start = element.scrollLeft;
  const change = to - start;
  const startTime = performance.now();

  function animateScroll(timestamp) {
    const currentTime = timestamp - startTime;
    const increment = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollLeft = increment;

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    }
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  requestAnimationFrame(animateScroll);

  setTimeout(() => {
    const horizontalScrolerPrevBtn = document.querySelector(
      ".horizontalScrolerPrevBtn"
    );
    const horizontalScrolerNextBtn = document.querySelector(
      ".horizontalScrolerNextBtn"
    );
    if (element.scrollLeft === 0) {
      horizontalScrolerPrevBtn.style.opacity = "0.3";
    } else {
      horizontalScrolerPrevBtn.style.opacity = "1";
    }

    if (element.scrollLeft >= element.scrollWidth - element.clientWidth) {
      horizontalScrolerNextBtn.style.opacity = "0.3";
    } else {
      horizontalScrolerNextBtn.style.opacity = "1";
    }
  }, 500);
};

export default horizontalScroller;