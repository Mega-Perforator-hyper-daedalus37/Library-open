import { BaseComponent } from './basecomponent.js';

const sliderSection = document.querySelector('.images-selector');

const arrowLeft = new BaseComponent({
  tag: 'img',
  elementClass: ['arrow'],
  parent: sliderSection,
});
arrowLeft.setImg('../assets/img/carret-left.svg', 'Arrow-Left');
const carouselAndSlider = new BaseComponent({
  elementClass: ['carousel-slider'],
  parent: sliderSection,
});
const sliderTab = new BaseComponent({
  elementClass: ['images-items'],
  parent: carouselAndSlider,
});
carouselAndSlider.insertChildren([sliderTab]);
const image1 = new BaseComponent({
  tag: 'img',
  parent: sliderTab,
});
const image2 = new BaseComponent({
  tag: 'img',
  parent: slider,
});
const image3 = new BaseComponent({
  tag: 'img',
  parent: slider,
});
const arrowRight = new BaseComponent({
  tag: 'img',
  elementClass: ['arrow'],
  parent: sliderSection,
});
arrowRight.setImg('../assets/img/carret-left.svg', 'Arrow-Left');
arrowRight.setStyle('transform', 'scaleX(-1)');
