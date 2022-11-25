const booksContainer = document.querySelector('.books');

class Book {
    constructor(title, author, summary, quote){
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.quote = quote;
    }

    addBook() {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bk-div');

        const bookWrapper = document.createElement('div');
        bookWrapper.classList.add('bk-book')
        const bookFront = this.createBookCover();
        const bookPage = this.createBookPage();
        const bookBack = this.createBookBack();
        const bookRight = this.createBookRight();
        const bookLeft = this.createBookLeft();
        const bookTop = this.createBookTop();
        const bookBottom = this.createBookBottom();
        const bookButtons = this.createBookButtons();
        bookWrapper.append(bookFront, bookPage, bookBack, bookRight, bookLeft, bookTop, bookBottom);
        bookDiv.append(bookWrapper, bookButtons);
        booksContainer.append(bookDiv);
    }

    createBookCover(){
        const bookFront = document.createElement('div');
        bookFront.classList.add('bk-front');
        const bookCover  =document.createElement('div');
        bookCover.classList.add('bk-cover')
        const h2Cover = document.createElement('h2');
        const bookAuthor = document.createElement('span');
        bookAuthor.classList.add('author-name');
        bookAuthor.textContent = this.author;

        const bookTitle = document.createElement('span');
        bookTitle.classList.add('title-name');
        bookTitle.textContent = this.title;

        const bookCoverBack  =document.createElement('div');
        bookCoverBack.classList.add('bk-cover-back');

        h2Cover.append(bookAuthor, bookTitle);
        bookCover.append(h2Cover);
        bookFront.append(bookCoverBack,bookCover)

        return bookFront
    }

    createBookPage() {
        const bookPage = document.createElement('div');
        bookPage.classList.add('bk-page');
        const bookContent  =document.createElement('div');
        bookContent.classList.add('bk-content')

        const bookQuote = document.createElement('blockquote');
        bookQuote.classList.add('bk-quote')
        bookQuote.textContent = this.quote;

        bookContent.append(bookQuote);
        bookPage.append(bookContent);

        return bookPage
    }

    createBookBack() {
        const bookBack = document.createElement('div');
        bookBack.classList.add('bk-back');
        const bookSummary  =document.createElement('p');
        bookSummary.classList.add('bk-summary');
        bookSummary.textContent = this.summary;

        bookBack.append(bookSummary)

        return bookBack
    }

    createBookRight() {
        const bookRight = document.createElement('div');
        bookRight.classList.add('bk-right');

        return bookRight
    }

    createBookLeft() {
        const bookLeft = document.createElement('div');
        bookLeft.classList.add('bk-left');
        const h2Bind = document.createElement('h2');
        const bookAuthorBind = document.createElement('span');
        bookAuthorBind.classList.add('author-name-bind');
        bookAuthorBind.textContent = this.author;

        const bookTitleBind = document.createElement('span');
        bookTitleBind.classList.add('title-name-bind');
        bookTitleBind.textContent = this.title;

        h2Bind.append(bookAuthorBind, bookTitleBind);
        bookLeft.append(h2Bind);

        return bookLeft
    }

    createBookTop() {
        const bookTop = document.createElement('div');
        bookTop.classList.add('bk-top');

        return bookTop
    }

    createBookBottom() {
        const bookBottom = document.createElement('div');
        bookBottom.classList.add('bk-bottom');

        return bookBottom
    }

    createBookButtons() {
        const infoContainer = document.createElement('div');
        infoContainer.classList.add('info-div')
        const flipButton = document.createElement('button');
        flipButton.classList.add('flip-btn');
        flipButton.textContent = "summary";
        const viewButton = document.createElement('button');
        viewButton.classList.add('view-btn');
        viewButton.textContent = "quote"
        const infoButton = document.createElement('button');
        infoButton.classList.add('info-btn');
        infoButton.textContent = "more information"

        infoContainer.append(flipButton, viewButton, infoButton);

        return infoContainer
    }
}

const PrideNPrejudice = new Book('Pride and Prejudice', 'Jane Austen', "Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.", "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.");

PrideNPrejudice.addBook()




// event listeners
const flipButtons = document.querySelectorAll('.flip-btn');
const viewButtons = document.querySelectorAll('.view-btn');
const infoButtons = document.querySelectorAll('.info-btn');

flipButtons.forEach(flipper=>{
    flipper.addEventListener('click',()=>{
        let bk = flipper.parentElement.previousSibling;
        if(bk.classList.contains('bk-viewback')){
            bk.classList.remove('bk-viewback');
        }
        else{
            if(bk.classList.contains('bk-viewinside')){bk.classList.remove('bk-viewinside')}
            bk.classList.add('bk-viewback');
        }
    });
})

viewButtons.forEach(viewer=>{
    viewer.addEventListener('click',()=>{
        let bk = viewer.parentElement.previousSibling;
        console.log(bk)
        if(bk.classList.contains('bk-viewinside')){
            bk.classList.remove('bk-viewinside');
        }
        else{
            if(bk.classList.contains('bk-viewback')){bk.classList.remove('bk-viewback')}
            bk.classList.add('bk-viewinside');
        }
    });
})