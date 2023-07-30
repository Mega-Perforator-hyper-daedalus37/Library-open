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
// const bookName = document.querySelectorAll('.book-name')
// bookName[0].textContent = "Bebranyhovich";
// function book(bookName,bookDescription,bookAuthor,bookImg) {

// // }

// // const obj = {
// //     length: 1,
// //     checkLength: () => {
// //         console.log(this.length);
// //     }
// // }

// // console.log(obj.length);