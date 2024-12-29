$(document).ready(function () {
  let scroll = null;

  const scrollContainer =
    document.querySelector("[data-scroll-container]") || document.body;

  if (!scrollContainer) {
    console.error("L'élément [data-scroll-container] est introuvable !");
  } else {
    scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.1,
      scrollFromAnywhere: true,
    });

    updateScrollHeight();
  }

  function updateScrollHeight() {
    setTimeout(() => {
      if (scroll) {
        scroll.update();
      }
    }, 500);
  }

  $(window).on("resize", updateScrollHeight);
});
