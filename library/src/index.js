'use strict';

document.querySelectorAll('.header-list-element').forEach(anchor => {
    anchor.addEventListener('click', (event) => {
        event.preventDefault();
        const targetSection = document.querySelector(event.target.getAttribute('href'));
        
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ['class1', 'class2']
// function createElement({tag, elementClass, text, parent}) {
//     const element = document.createElement(tag);

//     if (Array.isArray(elementClass)) {
//         elementClass.forEach(function(classItem) {
//             element.classList.add(classItem);
//         });
//     } else {
//         element.classList.add(elementClass);
//     }

//     element.textContent = text;
//     parent.append(element);
//     return element;
// }

// const favoritesItems = document.querySelector('.favorites-items');
// const book = createElement({tag: 'div', elementClass: 'book', parent: favoritesItems});
// const aboutBook = createElement({tag: 'div', elementClass: 'about-book', parent: book});
// const bookHeader = createElement({tag: 'div', elementClass: 'book-header', parent: aboutBook});
// const bookTitle = createElement({tag: 'h3', elementClass: ['section-title-text', 'book-title-text'], text: 'piska228zhopa', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});
// const nameAuthor = createElement({tag: 'div', elementClass: 'name-author', parent: aboutBook});
// const bookName = createElement({tag: 'p', elementClass: ['book-text', 'book-name'], text: 'THE BOOK EATERS <br>By Sunyi Dean', parent: nameAuthor});
// const bookAuthor = createElement({tag: 'p', elementClass: ['book-text', 'book-name'], text: 'THE BOOK EATERS <br>By Sunyi Dean', parent: nameAuthor});
// const bookDescription = createElement({tag: 'p', elementClass: ['book-text', 'book-description'], parent: bookHeader});
// const bookButton = createElement({tag: 'button', elementClass: 'book-button', parent: book});
// const bookButtonText = createElement({tag: 'p', elementClass: 'book-line', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});
// const bookLine = createElement({tag: 'div', elementClass: 'book-line', parent: bookHeader});

// console.log(book);
// bookName[0].textContent = "Bebranyhovich";

// function createBook(bookName,bookDescription,bookAuthor,bookImg) {

// }

// const obj = {
//     length: 1,
//     checkLength: function() {
//         console.log(this.length);
//     }
// }

// console.log(obj.length);