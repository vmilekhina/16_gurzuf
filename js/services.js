// SHOW DESCRIPTION

const showDescription = (wrapSelector, itemSelector, showClass, openClass) => {
  const wrap = document.querySelector(wrapSelector),
        list = document.querySelectorAll(itemSelector);

  if (window.screen.availWidth >= 1920) {
    list.forEach(item => {
      item.addEventListener('mouseover', (event) => {
        item.classList.add(showClass);
      });
    });
    list.forEach(item => {
      item.addEventListener('mouseout', (event) => {
        item.classList.remove(showClass);
      });
    });
  };

  if (window.screen.availWidth < 1920) {
    list.forEach(item => {
      item.addEventListener('click', (event) => {
        if (item.classList.contains(openClass)) {
          item.classList.remove(openClass);
        } else {
          item.classList.add(openClass);
        }
      });
    });
  }
  window.addEventListener ('resize', (event) => {
    if (window.screen.availWidth >= 1920) {
      list.forEach(item => {
        item.addEventListener('mouseover', (event) => {
          item.classList.add(showClass);
        });
      });
      list.forEach(item => {
        item.addEventListener('mouseout', (event) => {
          item.classList.remove(showClass);
        });
      });
    };

    if (window.screen.availWidth < 1920) {
      list.forEach(item => {
        item.addEventListener('click', (event) => {
          if (item.classList.contains(openClass)) {
            item.classList.remove(openClass);
          } else {
            item.classList.add(openClass);
          }
        });
      });
    }
  });
};

showDescription('.services__list', '.services__item', 'show', 'open');