'use strict';

import { BaseComponent } from './basecomponent.js';

document.querySelectorAll('.header-list-element').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(event.target.getAttribute('href'));
    if (window.innerWidth < 1024) {
      onBurger();
    }

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const burger_button = document.querySelector('.header-burger');
const mobile_menu = document.querySelector('.mobile-nav');
const header_name = document.querySelector('.header-name');
const header = document.querySelector('header');

function onBurger() {
  document.body.classList.toggle('not-scroll');
  burger_button.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  header_name.classList.toggle('is-active');
}

burger_button.addEventListener('click', function () {
  onBurger();
});

function createElement({ tag, elementClass, text, img, altImg, parent }) {
  const element = document.createElement(tag);
  if (Array.isArray(elementClass)) {
    elementClass.forEach(function (classItem) {
      element.classList.add(classItem);
    });
  } else {
    element.classList.add(elementClass);
  }
  element.alt = altImg;
  element.src = img;
  element.textContent = text;
  parent.append(element);
  return element;
}

//////////////// Slider ////////////////

const sliderSection = document.querySelector('.images-selector');
const arrowLeft = createElement({
  tag: 'img',
  elementClass: 'arrow',
  img: '../assets/img/carret-left.svg',
  altImg: 'Arrow Left',
  parent: sliderSection,
});
const carouselAndSlider = createElement({
  tag: 'div',
  elementClass: 'carousel-slider',
  parent: sliderSection,
});
const slider = createElement({
  tag: 'div',
  elementClass: 'images-items',
  parent: carouselAndSlider,
});
// const visibleSlider = [];
const visibleSlider = createElement({
  tag: 'div',
  elementClass: 'visible-images-items',
  parent: slider,
});

createElement({
  tag: 'img',
  elementClass: 'slider-image',
  img: '../assets/img/image-1.png',
  altImg: 'Image 1',
  parent: visibleSlider,
});
createElement({
  tag: 'img',
  elementClass: 'slider-image',
  img: '../assets/img/image-2.png',
  altImg: 'Image 2',
  parent: visibleSlider,
});
createElement({
  tag: 'img',
  elementClass: 'slider-image',
  img: '../assets/img/image-3.png',
  altImg: 'Image 3',
  parent: visibleSlider,
});
createElement({
  tag: 'img',
  elementClass: 'slider-image',
  img: '../assets/img/image-4.png',
  altImg: 'Image 4',
  parent: visibleSlider,
});
createElement({
  tag: 'img',
  elementClass: 'slider-image',
  img: '../assets/img/image-5.png',
  altImg: 'Image 5',
  parent: visibleSlider,
});
const arrowRight = createElement({
  tag: 'img',
  elementClass: 'arrow',
  img: '../assets/img/carret-left.svg',
  altImg: 'Arrow Right',
  parent: sliderSection,
});

const createdCarouselElements = [];

const carousel = createElement({
  tag: 'ul',
  elementClass: 'carousel-pagination',
  parent: carouselAndSlider,
});

for (let index = 0; index < 5; index++) {
  const carouselItem = createElement({
    tag: 'li',
    elementClass: 'carousel-item',
    parent: carousel,
  });
  createdCarouselElements.push(carouselItem);
}

let imgIndex = 0;
let slideStrength = -33.3;
let imgIndexSlides = 2;

function onDifferentScreenSlider(windowWidth) {
  if (!windowWidth) {
    slideStrength = -33.3;
    imgIndexSlides = 2;
    return;
  }

  slideStrength = -105;
  imgIndexSlides = 4;
}

onDifferentScreenSlider(window.innerWidth < 1420);
addEventListener('resize', () => onDifferentScreenSlider(window.innerWidth < 1420));

arrowRight.style.transform = 'scaleX(-1)';
function slide(imgIndex) {
  visibleSlider.style.transform = 'translate(' + imgIndex * slideStrength + '%)';
  createdCarouselElements[imgIndex].classList.add('active');
  createdCarouselElements.forEach(function (element) {
    element.classList.remove('active');
  });
}
arrowRight.addEventListener('click', function () {
  imgIndex = imgIndex < imgIndexSlides ? imgIndex + 1 : 0;
  slide(imgIndex);
});
arrowLeft.addEventListener('click', function () {
  imgIndex = imgIndex > 0 ? imgIndex - 1 : imgIndexSlides;
  slide(imgIndex);
});

createdCarouselElements.forEach(function (element, carouselIndex) {
  element.addEventListener('click', function () {
    imgIndex = carouselIndex;
    createdCarouselElements.forEach(function (element) {
      element.classList.remove('active');
    });
    element.classList.add('active');
    slide(imgIndex);
  });
  createdCarouselElements[0].classList.add('active');
});

//////////////// Slider ////////////////

const favoritesItems = document.querySelector('.favorites-items');
const seasonRadios = document.querySelectorAll('.season-input');
seasonRadios[0].checked = true;

function createBook({ title, author, description, imgSrc, bookOwn = false, bookParent }) {
  const book = createElement({
    tag: 'div',
    elementClass: 'book',
    parent: bookParent,
  });
  const aboutBook = createElement({
    tag: 'div',
    elementClass: 'about-book',
    parent: book,
  });
  const bookHeader = createElement({
    tag: 'div',
    elementClass: 'book-header',
    parent: aboutBook,
  });
  createElement({
    tag: 'h3',
    elementClass: ['section-title-text', 'book-title-text'],
    text: 'StaffPicks',
    parent: bookHeader,
  });
  createElement({ tag: 'div', elementClass: 'book-line', parent: bookHeader });
  const nameAuthor = createElement({
    tag: 'div',
    elementClass: 'name-author',
    parent: aboutBook,
  });
  createElement({
    tag: 'p',
    elementClass: ['book-text', 'book-name'],
    text: title,
    parent: nameAuthor,
  });
  createElement({
    tag: 'p',
    elementClass: ['book-text', 'book-name'],
    text: author,
    parent: nameAuthor,
  });
  createElement({
    tag: 'p',
    elementClass: ['book-text', 'book-description'],
    text: description,
    parent: aboutBook,
  });

  if (bookOwn) {
    createElement({
      tag: 'button',
      elementClass: ['book-button', 'book-button-own'],
      text: 'Own',
      parent: book,
    }).setAttribute('disabled', true);
  } else {
    createElement({
      tag: 'button',
      elementClass: 'book-button',
      text: 'Buy',
      parent: book,
    });
  }

  createElement({
    tag: 'img',
    elementClass: 'book-img',
    img: imgSrc,
    altImg: title,
    parent: book,
  });
}

const seasonActions = new Map([
  [
    'winter',
    {
      createBooks: createWinterBooks,
    },
  ],
  [
    'spring',
    {
      createBooks: createSpringBooks,
    },
  ],
  [
    'summer',
    {
      createBooks: createSummerBooks,
    },
  ],
  [
    'autumn',
    {
      createBooks: createAutumnBooks,
    },
  ],
]);

seasonRadios.forEach((radio) => {
  radio.addEventListener('change', function () {
    if (seasonActions.has(radio.id) && !seasonActions.get(radio.id).tab) {
      hideAllTabs();
      seasonActions.get(radio.id).createBooks();
      return;
    }

    hideAllTabs();
    showTab(radio.id);
  });
});

function hideAllTabs() {
  seasonActions.forEach((value) => {
    if (value.tab) {
      value.tab.style.display = 'none';
      value.tab.style.transition = '1000ms';
    }
  });
}

function showTab(seasonId) {
  const tab = seasonActions.get(seasonId).tab;
  tab.style.display = 'flex';
  tab.style.transition = '1000ms';
}

function createTab(seasonId) {
  const booksTab = createElement({
    tag: 'div',
    elementClass: 'books-tab',
    parent: favoritesItems,
  });
  seasonActions.get(seasonId).tab = booksTab;
  return booksTab;
}

function createWinterBooks() {
  const booksTab = createTab('winter');
  createBook({
    title: 'THE BOOK EATERS',
    author: 'By Sunyi Dean',
    description:
      'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.',
    imgSrc: '../assets/img/winter-book-1.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'CACKLE',
    author: 'By Rachel Harrison',
    description:
      'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
    imgSrc: '../assets/img/winter-book-2.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'DANTE: POET OF THE SECULAR WORLD',
    author: 'By Erich Auerbach',
    description:
      "Auerbach's engaging book places the 'Comedy' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante's uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante's main themes.",
    imgSrc: '../assets/img/winter-book-3.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'THE LAST QUEEN',
    author: 'By Clive Irving',
    description:
      'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
    imgSrc: '../assets/img/winter-book-4.png',
    bookOwn: true,
    bookParent: booksTab,
  });
}

function createSpringBooks() {
  const booksTab = createTab('spring');
  createBook({
    title: 'The Body',
    author: 'By Stephen King',
    description:
      'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
    imgSrc: '../assets/img/spring-book-1.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Carry: A Memoir of Survival on Stolen Land',
    author: 'By Toni Jenson',
    description:
      "This memoir about the author's relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.",
    imgSrc: '../assets/img/spring-book-2.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Days of Distraction',
    author: 'By Alexandra Chang',
    description:
      'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
    imgSrc: '../assets/img/spring-book-3.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Dominicana',
    author: 'By Angie Cruz',
    description:
      'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
    imgSrc: '../assets/img/spring-book-4.png',
    bookOwn: true,
    bookParent: booksTab,
  });
}

function createSummerBooks() {
  const booksTab = createTab('summer');
  createBook({
    title: 'Crude: A Memoir',
    author: 'By Pablo Fajardo & ​​Sophie Tardy-Joubert',
    description:
      'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people',
    imgSrc: '../assets/img/summer-book-1.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Let My People Go Surfing',
    author: 'By Yvon Chouinard',
    description:
      'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
    imgSrc: '../assets/img/summer-book-2.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'The Octopus Museum: Poems',
    author: 'By Brenda Shaughnessy',
    description:
      'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
    imgSrc: '../assets/img/summer-book-3.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Shark Dialogues: A Novel',
    author: 'By Kiana Davenport',
    description:
      'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
    imgSrc: '../assets/img/summer-book-4.png',
    bookOwn: true,
    bookParent: booksTab,
  });
}

function createAutumnBooks() {
  const booksTab = createTab('autumn');
  createBook({
    title: 'Casual Conversation',
    author: 'By Renia White',
    description:
      "White's impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don't, examining the possibilities around how we construct and communicate identity.",
    imgSrc: '../assets/img/autumn-book-1.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'The Great Fire',
    author: 'By Lou Ureneck',
    description:
      'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide',
    imgSrc: '../assets/img/autumn-book-2.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Rickey: The Life and Legend',
    author: 'By Howard Bryant',
    description:
      "With the fall rolling around, one can't help but think of baseball's postseason coming up! And what better way to prepare for it than reading the biography of one of the game's all-time greatest performers, the Man of Steal, Rickey Henderson?",
    imgSrc: '../assets/img/autumn-book-3.png',
    bookParent: booksTab,
  });
  createBook({
    title: 'Slug: And Other Stories',
    author: 'By Megan Milks',
    description:
      'Exes Tegan and Sara find themselves chained together by hairballs of codependency. A father and child experience the shared trauma of giving birth to gods from their wounds.',
    imgSrc: '../assets/img/autumn-book-4.png',
    bookOwn: true,
    bookParent: booksTab,
  });
}

createWinterBooks();

const babadook = new BaseComponent({
  tag: 'h1',
  elementClass: ['kruto'],
  text: 'Ya Babadook',
  parent: document.querySelector('.box-welcome-bg'),
});
babadook.getnode();
