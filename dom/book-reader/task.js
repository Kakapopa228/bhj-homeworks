const fontSize = document.querySelectorAll('.font-size');
const fontSizeArray = Array.from(fontSize);

fontSizeArray.forEach(el => el.addEventListener('click', function (e) {
    const fontSizeActive = document.querySelector('.font-size_active');
    fontSizeActive.classList.remove('font-size_active');
    const book = this.closest('.book');
    el.classList.add('font-size_active');
    book.classList.remove('book_fs-small');
    book.classList.remove('book_fs-big');

    if (el.dataset.size === 'small') {
        el.classList.add('font-size_active');
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    } if (el.dataset.size === 'big') {
        el.classList.add('font-size_active');
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }
    e.preventDefault();
}))