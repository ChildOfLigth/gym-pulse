window.addEventListener("DOMContentLoaded", function () {
  const menu_burger = document.querySelector(".navigateBlock_menuBurger");
  const blockWithLinks = document.querySelector(
    ".navigateBlock_hiddenBlockWithLinks"
  );
  menu_burger.onclick = () => {
    blockWithLinks.classList.add("active");
  };

  const closeMenuBurger = document.querySelector(".closeMenuBurger");
  closeMenuBurger.onclick = () => {
    blockWithLinks.classList.remove("active");
  };

  const buttonScrollTop = document.querySelector(".main_scrollTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1600) {
      buttonScrollTop.classList.add("visible");
    } else {
      buttonScrollTop.classList.remove("visible");
    }
  });

  buttonScrollTop.onclick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  function creatingSwiper(
    breakPoint,
    swiperClass,
    blockWithInnerHTML,
    options
  ) {
    let swiper;
    let innerHtmlForSwiper =
      document.querySelector(blockWithInnerHTML).innerHTML;

    breakPoint = window.matchMedia(breakPoint);
    const swiperBlock = document.querySelector(swiperClass);

    const checkerBrecpoint = () => {
      if (breakPoint.matches) {
        swiperBlock.innerHTML = innerHtmlForSwiper;
        swiper = new Swiper(swiperClass, options);
        swiperBlock.style.display = "flex";
      } else {
        swiperBlock.style.display = "none";
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakPoint.addEventListener("change", checkerBrecpoint);
    checkerBrecpoint();
  }

  creatingSwiper(
    "(max-width: 500px)",
    ".swiper-trainers",
    ".main_ourTrainers",
    {
      loop: true,
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      direction: "horizontal",
      pagination: { el: ".swiper-pagination", dynamicBullets: true },
    }
  );

  creatingSwiper("(max-width: 790px)", ".swiper-passes", ".main_passes", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    direction: "horizontal",
    pagination: { el: ".swiper-pagination" },
  });

  creatingSwiper("(max-width: 840px)", ".swiper-courses", ".main_ourCourses", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    direction: "horizontal",
    pagination: { el: ".swiper-pagination" },
  });

  const seasonTicketCard = document.querySelectorAll(".swiper-slide");
  let currentlyOpenModal = null;

  seasonTicketCard.forEach((card) => {
    const modalWindowWithFeatureList = card.querySelector(
      ".card_modalWindWithFeatureList"
    );

    const buttonDetails = card.querySelector(".card_buttonDetails");
    const closeModalWindow = card.querySelector(".closeModalWindow");

    if (buttonDetails) {
      buttonDetails.onclick = () => {
        if (
          currentlyOpenModal &&
          currentlyOpenModal !== modalWindowWithFeatureList
        ) {
          currentlyOpenModal.style.display = "none";
        }

        if (modalWindowWithFeatureList.style.display === "block") {
          modalWindowWithFeatureList.style.display = "none";
          currentlyOpenModal = null;
        } else {
          modalWindowWithFeatureList.style.display = "block";
          currentlyOpenModal = modalWindowWithFeatureList;
        }
      };
    }

    if (closeModalWindow) {
      closeModalWindow.onclick = () => {
        modalWindowWithFeatureList.style.display = "none";
      };
    }
  });

  const swiperWithTrainersCard = document.querySelector(".swiper-trainers");
  const swiperSlidesWithTrainers =
    swiperWithTrainersCard.querySelectorAll(".swiper-slide");

  if (window.matchMedia("(max-width: 500px)").matches) {
    swiperSlidesWithTrainers.forEach((card) => {
      const btnToOpenAdditionalInfo = document.createElement("button");
      btnToOpenAdditionalInfo.classList.add("toOpenAdditionalInfo");
      btnToOpenAdditionalInfo.innerHTML = '<img src="/imgs/visible 1.svg"/>';

      card.appendChild(btnToOpenAdditionalInfo);

      const aboutTheCoach = card.querySelector(".card_aboutTheCoach");
      if (card.contains(btnToOpenAdditionalInfo)) {
        btnToOpenAdditionalInfo.onclick = () => {
          aboutTheCoach.classList.toggle("active");
        };
      }

      if (aboutTheCoach) {
        if (card.classList.contains("swiper-slide-active")) {
          aboutTheCoach.classList.remove("active");
          console.log("Removed 'active' from aboutTheCoach for active slide");
        }
      }
    });
  }
});
