const chooseColor = document.querySelectorAll('.choose-color__button');
console.log(chooseColor);

const contentItem = document.querySelectorAll('.content-item');
console.log(contentItem);

chooseColor.forEach(function (element) {
  element.addEventListener('click', open);
});

function open(event) {
  const target = event.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  

  chooseColor.forEach(function (item) {
    item.classList.remove('choose-color__button--active');
  });
  target.classList.add('choose-color__button--active');

  contentItem.forEach(function (item) {
    item.classList.remove('content-item--active');
  });
  contentActive.forEach(function (item) {
    item.classList.add('content-item--active');
  })
}