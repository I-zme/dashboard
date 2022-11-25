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
        bookAuthorBind.textContent = (this.author.length + this.title.length >= 40) ? this.author.split(' ').reverse()[0] : this.author;

        const bookTitleBind = document.createElement('span');
        bookTitleBind.classList.add('title-name-bind');
        bookTitleBind.textContent =  (this.author.split(' ').reverse()[0].length + this.title.length >= 40) ? '': this.title;


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


// add books to the site

const bookList = [
    {
        title: "Some Stories Are Like That",
        author: "Alberta DeBrittany",
        summary:"An exploration into the conciousness of a dolphin during its life at a water park, from capture, performances and the the day to day with its 'masters'.",
        quote: "The fish here taste different, an empty sort of flavour, do I taste empty now too?",
    },

    {
        title: "Judas, Preach",
        author: "Max Bogus",
        summary:"A satiric comedy about the last supper from the perspective of Judas.",
        quote: "J raises his glass and tells of the importance of forgiveness, I think he knows, the bastard.",
    },

    {
        title:"Nomadish",
        author: "Gaming Nomad",
        summary: "A quick guide to following your dreams and remembering the importance of play.",
        quote: "Yeahh Bebyyyyy!",
    },

    {
        title: "Working with the Dead",
        author: "Frank Enstein",
        summary: "A moving, gruesome, often hilarious, collection of poems about the cadavers in the morgue where the author used to work as a young man.",
        quote: "She had beautiful eyes, I scooped them out for safekeeping.",
    },

    {
        title: "A Genesis",
        author: "Ernst McGreggor",
        summary:"In his self-proclaimed magnum opus debute book, McGreggor tells the story of Aidan and Evett, founders of the First People - a race of beautiful pale bionic creatures, as they venture through existence seeking always to redeem their past mistakes and return home.",
        quote: "'Oh Aidan, are we doomed?' asked Evett, sobbing artificial tears of recycled water from her cooling system, her beautiful man-made eyes shining.",
    },

    // {
    //     title:,
    //     author:,
    //     summary:,
    //     quote:,
    // },
]


bookList.forEach(book=>{
    let aBook = new Book(book.title, book.author, book.summary, book.quote);
    aBook.addBook()
})



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
        if(bk.classList.contains('bk-viewinside')){
            bk.classList.remove('bk-viewinside');
        }
        else{
            if(bk.classList.contains('bk-viewback')){bk.classList.remove('bk-viewback')}
            bk.classList.add('bk-viewinside');
        }
    });
})


const bookFronts = document.querySelectorAll('.bk-front');
bookFronts.forEach(fronter=>{
    fronter.addEventListener('click',()=>{
        let infoDivBtnList = fronter.parentElement.nextSibling.childNodes
        let btn = Array.from(infoDivBtnList).find(node => node.classList.contains('flip-btn'))
        btn.click()
    });
});

const bookBacks = document.querySelectorAll('.bk-back');
bookBacks.forEach(backer=>{
    backer.addEventListener('click',()=>{
        let infoDivBtnList = backer.parentElement.nextSibling.childNodes
        let btn = Array.from(infoDivBtnList).find(node => node.classList.contains('view-btn'))
        btn.click()
    });
});

const bookPages = document.querySelectorAll('.bk-page');
bookPages.forEach(pager=>{
    pager.addEventListener('click',()=>{
        let infoDivBtnList = pager.parentElement.nextSibling.childNodes
        let btn = Array.from(infoDivBtnList).find(node => node.classList.contains('view-btn'))
        btn.click()
    });
});