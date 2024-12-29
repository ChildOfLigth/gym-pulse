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

  const listTrainersCards = document.querySelector(".main_wrapperOurTrainers");
  let swiperForListTrainers;

  const listPasses = document.querySelector(".main_passes");
  let swiperForPasses;

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
        <div class="swiper-pagination"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    `;
  }

  function updateContent() {
    let classForContainer;
    let classForContainerForCards;
    let classForCard;

    if (window.innerWidth <= 500) {
      classForContainer = "swiper";
      classForContainerForCards = "swiper-wrapper";
      classForCard = "swiper-slide";

      listTrainersCards.style.display = "flex";
      listTrainersCards.style.width = "100%";
    } else {
      classForContainer = "main_ourTrainers";
      classForContainerForCards = "ourTrainers_listCard";
      classForCard = "listCard_card";

      listTrainersCards.style.display = "grid";
      listTrainersCards.style.width = "100%";
    }

    if (swiperForListTrainers) {
      swiperForListTrainers.destroy(true, true);
      swiperForListTrainers = null;
    }

    listFillFunction(
      classForContainer,
      classForContainerForCards,
      classForCard
    );

    swiperForListTrainers = new Swiper(".swiper", {
      slidesPerView: 1,
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      pagination: { el: ".swiper-pagination", clickable: true },
      scrollbar: { el: ".swiper-scrollbar", draggable: true },
    });
    
  }

  updateContent();

  window.addEventListener("resize", function () {
    updateContent();
  });

  function listFillPassesFunction(
    classForContainer,
    classForList,
    classForCard
  ) {
    listPasses.innerHTML = `
<div class="${classForContainer}">
 <ul class="${classForList}">
    <li class="${classForCard}">
      <div class="card_name">
        <h3>Стартовый</h3>
      </div>
      <div class="card_textPart">
        <p><span>800грн</span> / 1 месяц</p>

        <p>
          Это идеальный выбор для начинающих. С Вами будет заниматься
          профессионал, что бы помочь со всем разобраться
        </p>
      </div>
      <a class="card_buttonDetails">
        <span data-text="Подробнее">Подробнее</span>
      </a>

      <ul class="card_modalWindWithFeatureList">
        <button class="closeModalWindow">
          <img src="imgs/close.png" alt="" />
        </button>
        <h3>Вам доступно:</h3>
        <li>Доступны все методы тренировки</li>
        <li>Индивидуальные тренировки</li>
        <li>Отдых после тренировок(масаж, сауна и т.д) 1 раз в неделю</li>
        <li>Возможность посещать зал в любое время его работы.</li>
      </ul>
    </li>

    <li class="${classForCard}">
      <div class="card_name">
        <h3>Энергия в группе</h3>
      </div>
      <div class="card_textPart">
        <p><span>1300грн</span> / 3 месяца</p>

        <p>
          Выбор для тех, кто хочет заняться спортом в группе. В рамках
          этого абонемента вы сможете участвовать в различных групповых
          тренировках
        </p>
      </div>
      <a class="card_buttonDetails">
        <span data-text="Подробнее">Подробнее</span>
      </a>

      <ul class="card_modalWindWithFeatureList">
        <button class="closeModalWindow">
          <img src="imgs/close.png" alt="" />
        </button>
        <h3>Вам доступно:</h3>
        <li>
          Безлимитное посещение групповых тренировок (йога, кроссфит и
          т.д)
        </li>
        <li>Возможность посещать зал в любое время его работы.</li>
        <li>
          Отдых после тренировок(масаж, сауна и т.д) 2 раза в неделю
        </li>
      </ul>
    </li>

    <li class="${classForCard}">
      <div class="card_name">
        <h3>Свободный график</h3>
      </div>
      <div class="card_textPart">
        <p><span>150грн</span> / час</p>

        <p>
          Этот абонемент позволяет посещать занятия в удобное для вас
          время, без жесткой привязки к расписанию
        </p>
      </div>
      <a class="card_buttonDetails">
        <span data-text="Подробнее">Подробнее</span>
      </a>

      <ul class="card_modalWindWithFeatureList">
        <button class="closeModalWindow">
          <img src="imgs/close.png" alt="" />
        </button>
        <h3>Вам доступно:</h3>
        <li>Доступны все методы кроме групповых</li>
        <li>Возможность посещать зал в любое время его работы.</li>
        <li>Индивидуальные тренировки</li>
      </ul>
    </li>

    <li class="${classForCard}">
      <div class="card_name">
        <h3>Максимум</h3>
      </div>
      <div class="card_textPart">
        <p><span>2400грн</span> / 8 месяцев</p>

        <p>
          Этот абонемент для тех, кто хочет всерьез заняться спортом без
          ограничений и с полным комфортом
        </p>
      </div>
      <a class="card_buttonDetails">
        <span data-text="Подробнее">Подробнее</span>
      </a>

      <ul class="card_modalWindWithFeatureList">
        <button class="closeModalWindow">
          <img src="imgs/close.png" alt="" />
        </button>
        <h3>Вам доступно:</h3>
        <li>Доступны все методы тренировки</li>
        <li>Отдых после тренировок(масаж, сауна и т.д) каждый день</li>
        <li>Возможность заморозить абонемент до 2-ух недель</li>
        <li>Участие в любых групповых тренировках</li>
        <li>Индивидуальные тренировки</li>
      </ul>
    </li>
   </ul>

  <div class="swiper-pagination"></div>
  <div class="swiper-scrollbar"></div>
</div>
    `;
  }

  function updateContentForBlockPasses() {
    let classForContainer;
    let classForList;
    let classForCard;

    if (window.innerWidth <= 740) {
      classForContainer = "swiper-passes";
      classForList = "swiper-wrapper";
      classForCard = "swiper-slide";

      listPasses.style.display = "flex";
      listPasses.style.width = "90%";
    } else {
      classForContainer = "passes_content";
      classForList = "passes_seasonTicketList";
      classForCard = "seasonTicketList_card";

      listPasses.style.display = "grid";
    }

    if (swiperForPasses) {
      swiperForPasses.destroy(true, true);
      swiperForPasses = null;
    }

    listFillPassesFunction(classForContainer, classForList, classForCard);

    if (classForContainer === "swiper-passes") {
      swiperForListTrainers = new Swiper(".swiper-passes", {
        slidesPerView: 1,
        direction: "horizontal",
        loop: true,
        effect: "slide",
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

  updateContentForBlockPasses();

  window.addEventListener("resize", function () {
    updateContentForBlockPasses();
  });

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
});
