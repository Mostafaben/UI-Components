function Plus() {
  scale += 0.05;
  initialPadding += 5;
  initialWidth += 5;
  imageInitialX += 2.5;
  image.style.transform = `scale(${scale})`;
  image.style.left = `${imageInitialX}px`;
  card.style.paddingTop = `${initialPadding}px`;
  card.style.width = `${initialWidth}px`;
}

function Minis() {
  if (initialWidth == 200) return;
  scale -= 0.05;
  initialPadding -= 5;
  initialWidth -= 5;
  imageInitialX -= 2.5;
  image.style.left = `${imageInitialX}px`;
  image.style.transform = `scale(${scale})`;
  card.style.paddingTop = `${initialPadding}px`;
  card.style.width = `${initialWidth}px`;
}

function Reset() {
  image.style.left = '40px';
  image.style.transform = 'scale(0.7)';
  card.style.paddingTop = '100px';
  card.style.width = '200px';
}

function imageFn() {
  if (!isImageOpen) {
    if (scale > 0.7) Reset();
    image.classList.add('preview-image');
    card.classList.add('active');
  } else {
    image.classList.remove('preview-image');
    card.classList.remove('active');
  }
  isImageOpen = !isImageOpen;
}

function clearScreen(e) {
  let dialog = document.querySelector('.dialog');
  let buttonContent = document.querySelector('.rest p');
  let buttonIcon = document.querySelector('.rest i');
  if (isScreenClear) {
    dialog.style.display = 'block';
    buttonContent.textContent = 'Clear Screen';
    buttonIcon.classList.remove('fa-battery-full');
    buttonIcon.classList.add('fa-recycle');
  } else {
    dialog.style.display = 'none';
    buttonContent.textContent = 'Refill Screen';
    buttonIcon.classList.remove('fa-recycle');
    buttonIcon.classList.add('fa-battery-full');
  }
  isScreenClear = !isScreenClear;
}

// end dragin
function handleMouseUp() {
  isDragin = false;
}

// start dragin
function handleMouseDown() {
  if (!isClicking) isDragin = true;
}

// add click effect
function handleClick(e) {
  // change the shape of the card
  transformCardToImage();

  // handle the click effect
  isClicking = true;
  card2.style.transform = 'scale(0.9)';
  setTimeout(() => {
    card2.style.transform = 'scale(1)';
  }, 300);
  card.style.boxShadow = '0px 3px 0px #dddddd';
  setTimeout(() => {
    card2.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
    isClicking = false;
  }, 200);
}

function transformCardToImage() {
  if (cardIsClicked) {
    card2.classList.add('card-clicked');
  } else {
    card2.classList.remove('card-clicked');
  }
  cardIsClicked = !cardIsClicked;
}

// cancel following mouse
window.onmousemove = (e) => {
  if (isDragin) {
    card2.classList.add('card-darging');
    card2.style.position = 'absolute';
    card2.style.transitionDuration = '0ms';
    card2.style.top = e.clientY;
    card2.style.left = e.clientX;
  } else {
    card2.style.position = 'relative';
  }
};

// follow the mouse
window.onmouseup = (e) => {
  if (isDragin) {
    card2.style.transitionDuration = '300ms';
    card2.style.position = 'relative';
    card2.style.top = '0px';
    card2.style.left = '0px';
    card2.classList.remove('card-darging');
    isDragin = false;
  }
};
