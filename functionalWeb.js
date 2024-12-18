const seasonTicketCard = document.querySelectorAll(".seasonTicketList_card");

let currentlyOpenModal = null;

seasonTicketCard.forEach((card) => {
  const modalWindowWithFeatureList = card.querySelector(
    ".card_modalWindWithFeatureList"
  );

  const buttonDetails = card.querySelector(".card_buttonDetails");
  const closeModalWindow = card.querySelector(".closeModalWindow");

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

  closeModalWindow.onclick = () => {
    modalWindowWithFeatureList.style.display = "none";
  };
});

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

const listTrainersCards = document.querySelector(".main_wrapperOurTrainers");
let swiperInstance;

window.addEventListener("DOMContentLoaded", function () {
  function listFillFunction(
    classForContainer,
    classForContainerForCards,
    classForCard
  ) {
    listTrainersCards.innerHTML = `
      <div class="${classForContainer}">
        <div class="${classForContainerForCards}">
          <div class="${classForCard}">
            <img src="imgs/trainerAlex.webp" alt="" />
            <div class="card_textPart">
              <h3>Яремчук Алекс</h3>
            </div>
            <div class="card_aboutTheCoach">
              <div class="aboutTheCoach_textPart">
                <p>
                  <span>Алекс</span> — тренер с богатым восьмилетним опытом,
                  который поможет вам достичь максимальных результатов и освоить
                  сложные тренировочные методики.
                </p>
                <p>Стаж работы: 8 лет</p>
                <ul>
                  <h4>Специалист по:</h4>
                  <li>Боксу,</li>
                  <li>Тяжелой атлетике,</li>
                  <li>Кроссфиту,</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="${classForCard}">
            <img src="imgs/treinerСофия.webp" alt="" />
            <div class="card_textPart">
              <h3>Войчик София</h3>
            </div>
            <div class="card_aboutTheCoach">
              <div class="aboutTheCoach_textPart">
                <p>
                  <span>София</span> — опытный и разносторонний тренер, который
                  помогает своим клиентам достигать результатов и раскрывать
                  потенциал. Она специализируется на:
                </p>
                <p>Стаж работы: 6 лет</p>
                <ul>
                  <h4>Специалист по:</h4>
                  <li>Индивидуальным тренировкам,</li>
                  <li>Кроссфиту,</li>
                  <li>Стретчингу,</li>
                  <li>Боксу,</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="${classForCard}">
            <img src="imgs/trainerНиколь.webp" alt="" />
            <div class="card_textPart">
              <h3>Сидорченко Николь</h3>
            </div>
            <div class="card_aboutTheCoach">
              <div class="aboutTheCoach_textPart">
                <p>
                  <span>Николь</span> — профессиональный тренер с шестилетним
                  опытом, который помогает клиентам достигать гармонии между
                  телом и духом.
                </p>
                <p>Стаж работы: 6 лет</p>
                <ul>
                  <h4>Специалист по:</h4>
                  <li>Индивидуальным тренировкам,</li>
                  <li>Кроссфиту,</li>
                  <li>Стретчингу,</li>
                  <li>Груповым тренировкам,</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="${classForCard}">
            <img src="imgs/trainerArtemii.jpg" alt="" />
            <div class="card_textPart">
              <h3>Чернов Артемий</h3>
            </div>
            <div class="card_aboutTheCoach">
              <div class="aboutTheCoach_textPart">
                <p>
                  <span>Артемий</span> — опытный и вдохновляющий тренер, который
                  уже 7 лет помогает своим клиентам становиться сильнее, гибче и
                  увереннее в себе.
                </p>
                <p>Стаж работы: 7 лет</p>
                <ul>
                  <h4>Специалист по:</h4>
                  <li>Индивидуальным тренировкам,</li>
                  <li>Стретчингу,</li>
                  <li>Груповым тренировкам,</li>
                  <li>Боксу,</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Pagination и Scrollbar должны быть размещены здесь -->
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    `;
  }

  function updateContent() {
    let classForContainer;
    let classForContainerForCards;
    let classForCard;
    let classForPagination;

    if (window.innerWidth <= 720) {
      classForContainer = "swiper";
      classForContainerForCards = "swiper-wrapper";
      classForCard = "swiper-slide";
    } else {
      classForContainer = "main_ourTrainers";
      classForContainerForCards = "ourTrainers_listCard";
      classForCard = "listCard_card";
    }

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    listFillFunction(
      classForContainer,
      classForContainerForCards,
      classForCard,
      classForPagination
    );

    if (classForContainer === "swiper") {
      swiperInstance = new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        direction: "horizontal",
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: true,
          snapOnRelease: true,
        },
      });
    }
  }

  updateContent();

  window.addEventListener("resize", function () {
    updateContent();
  });
});
