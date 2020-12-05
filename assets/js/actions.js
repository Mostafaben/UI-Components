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
