//  'use strict'

// MODALS


var bindModals = function (triggerSelector, modalSelector, closeSelector, wrapperSelector) {
  var trigger = document.querySelector(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        btnSubmit = document.querySelector('.modal__submit'),
        windows = document.querySelectorAll('[data-modal]'),
        wrapper = document.querySelector(wrapperSelector);


  var modalPhone = document.querySelector('#modal--phone');
  trigger.addEventListener('click', function  (event) {
    event.preventDefault();
    // windows.windowsArray(function(item) {
    //   item.style.display = 'none';
    // });
    document.body.style.overflow = 'hidden';
    modal.classList.add('animated', 'fadeIn');
    modal.style.display = 'flex';
  });

  window.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
    document.body.style.overflow = '';
    modal.classList.remove('animated', 'fadeIn');
    modal.style.display = 'none';
    }
  });

  close.addEventListener('click', function (event) {
    document.body.style.overflow = '';
    modal.classList.remove('fadeIn', 'animated');
    modal.style.display = 'none';
  });

  btnSubmit.addEventListener('click', function (event) {
    document.body.style.overflow = '';
    modalPhone.classList.remove('fadeIn', 'animated');
    modalPhone.style.display = 'none';
  });
};

bindModals('.header__call-button', '#modal__wrapper--phone', '.modal__close', '.modal__wrapper');
bindModals ('.modal__submit', '#modal__wrapper--answer','.modal--answer .modal__close', '.modal__wrapper');

// CHECK NUM

var checkNumInputs =  function(selector) {
  var numInputs = document.querySelector(selector);
    numInputs.addEventListener('input', function () {
    numInputs.value = numInputs.value.replace(/\D/, '');
    });
};
checkNumInputs('.modal__input--tel');


// FAQ

var openAnswer = function (wrapperSelector, faqItemSelector, openClass) {
  var wrapper = document.querySelector(wrapperSelector),
        faqItem = document.querySelectorAll(faqItemSelector);
  
  function hideAnswer () {
    for (var i = 0; i < faqItem.length; i++) {
      faqItem[i].classList.remove(openClass);
    }
  }
  hideAnswer();
  
  function showAnswer (i) {
    faqItem[i].classList.add('animated', 'fadeIn');
    faqItem[i].classList.add(openClass)
    };
  
  wrapper.addEventListener('click', function (event) {
    var target = event.target;
    if (target && (target.classList.contains(faqItemSelector.replace(/\./, "")) || target.parentNode.classList.contains(faqItemSelector.replace(/\./, "")))) {
      for (var i = 0; i < faqItem.length; i++) {
        if (target == faqItem[i] || target.parentNode == faqItem[i]) {
          if (faqItem[i].classList.contains(openClass)) {
                  faqItem[i].classList.remove(openClass)
                } else {
                  hideAnswer();
                  showAnswer(i);
                }
        }
      }
    }
  });
};
openAnswer('.faq__list', '.faq__item', 'opened');

// CAROUSEL

var carousel = function (itemSelector, nextBtnSelector, prevBtnSelector, bigClass, smallClass, leftClass, rightClass) {

  var itemCarousel = document.querySelectorAll(itemSelector),
        nextBtn = document.querySelector(nextBtnSelector),
        prevBtn = document.querySelector(prevBtnSelector);
        
  var deleteClasses = function () {
    // itemCarousel.forEach(item => {
    //   item.classList.remove(bigClass);
    //   item.classList.remove(smallClass);
    //   item.classList.remove(leftClass);
    //   item.classList.remove(rightClass);
    // });
    for (var i = 0; i < itemCarousel.length; i++ ) {
      itemCarousel[i].classList.remove(bigClass);
      itemCarousel[i].classList.remove(smallClass);
      itemCarousel[i].classList.remove(leftClass);
      itemCarousel[i].classList.remove(rightClass);
    }
  }
  var giveClasses = function (i) {
    if (i === 0) {

      itemCarousel[0].classList.add(bigClass);
      itemCarousel[2].classList.add(smallClass);
      itemCarousel[2].classList.add(leftClass);
      itemCarousel[1].classList.add(smallClass);
      itemCarousel[1].classList.add(rightClass);
    } 
    if (i === 1) {
      console.log(2);
      itemCarousel[2].classList.add(bigClass);
      itemCarousel[1].classList.add(smallClass);
      itemCarousel[1].classList.add(leftClass);
      itemCarousel[0].classList.add(smallClass);
      itemCarousel[0].classList.add(rightClass);
    }
    if (i === 2) {
      itemCarousel[1].classList.add(bigClass);
      itemCarousel[0].classList.add(smallClass);
      itemCarousel[0].classList.add(leftClass);
      itemCarousel[2].classList.add(smallClass);
      itemCarousel[2].classList.add(rightClass);
    }
  }

  if (document.body.clientWidth >= 768) {
    console.log(24);
    deleteClasses();
  }

  window.addEventListener('resize', function (event) {
    if (document.body.clientWidth >= 768) {
      deleteClasses();
    }
    if (document.body.clientWidth < 768) {
      deleteClasses();
      giveClasses(0);
    }
  });

  var j = 100;

  nextBtn.addEventListener('click', function (event) {
    event.preventDefault();
    j++;
    var x = j % 3;

    if (x === 0) {
      deleteClasses();
      giveClasses(0);
    }
    if (x === 2) {
      deleteClasses();
       giveClasses(2);
    }
    if (x === 1) {
      deleteClasses();
       giveClasses(1);
    }
  });

  prevBtn.addEventListener('click', function (event) {
    console.log(j);
    event.preventDefault();
    j--;
    var x = j % 3;

    if (x === 0) {
      deleteClasses();
      giveClasses(0);
    }
    if (x === 2) {
      deleteClasses();
       giveClasses(2);
    }
    if (x === 1) {
      deleteClasses();
       giveClasses(1);
    }
  });
 };

 carousel('.room__item', '.room__button--next', '.room__button--prev', 'room__item--big', 'room__item--small', 'room__item--left', 'room__item--right');

 carousel('.reviews__item', '.reviews__button--next', '.reviews__button--prev', 'reviews__item--big', 'reviews__item--small', 'reviews__item--left', 'reviews__item--right');

 // CHANGE IMAGES

var changeImages = function (itemImagesSelector, nextBtnSelector, prevBtnSelector) {
  var itemImages = document.querySelectorAll(itemImagesSelector),
        nextBtn = document.querySelector(nextBtnSelector),
        prevBtn = document.querySelector(prevBtnSelector);

  var hideImages = function () {
    for (var i = 0; i < itemImages.length; i++) {
      itemImages[i].style.display = 'none';
    }
  };
  var showImage = function (i) {
    itemImages[i].classList.add('animated', 'fadeIn');
    itemImages[i].style.display = 'block';
  };

  hideImages();
  showImage(0);

  window.addEventListener('resize', function (event) {
    if (window.screen.availWidth >= 768) {
      hideImages();
      showImage(0);
    }
    if (window.screen.availWidth < 768) {
      deleteClasses();
      giveClasses(0);
    }
  });
 
  var j = 99;

  nextBtn.addEventListener('click', function (event) {
    j++;
    var x = j % 3;

    if (x === 0) {
      hideImages();
      showImage(0);
    }
    if ( x === 1) {
      hideImages();
      showImage(1);
    }
    if ( x === 2) {
      hideImages();
      showImage(2);
    }
  });

  prevBtn.addEventListener('click', function (event) {
    j--;
    var x = j % 3;

    if (x === 0) {
      hideImages();
      showImage(0);
    }
    if ( x === 1) {
      hideImages();
      showImage(1);
    }
    if ( x === 2) {
      hideImages();
      showImage(2);
    }
  });
};

changeImages('.about__carousel-item', '.about__button--next', '.about__button--prev');
