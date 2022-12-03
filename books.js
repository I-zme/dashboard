const booksContainer = document.querySelector('.books');

class Book {
    constructor(title, author, summary, quote, tags, link){
        this.title = title;
        this.author = author;
        this.summary = summary;
        this.quote = quote;
        this.tags = tags;
        this.link = link;
    }

    addBook(){
        const bookDiv = this.createBook();
        booksContainer.append(bookDiv);
    }

    createBook() {
        const bookDiv = this.createBookDiv();
        const bookWrapper = this.createBookWrapper();
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

        return bookDiv
    }

    createBookDiv() {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bk-div');

        return bookDiv
    }

    createBookWrapper() {
        const bookWrapper = document.createElement('div');
        bookWrapper.classList.add('bk-book','|', ...this.tags);
        
        return bookWrapper
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
        viewButton.textContent = "quote";
        const bookLink = document.createElement('a');
        bookLink.setAttribute('href',this.link);
        bookLink.setAttribute('target', "_blank");
        const infoButton = document.createElement('button');
        infoButton.classList.add('info-btn');
        infoButton.textContent = "more information";
        
        bookLink.append(infoButton);
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
        tags:['spiritual', 'drama', 'dolphin'],
        link:"#",
    },

    {
        title: "Judas, Preach",
        author: "Max Bogus",
        summary:"A satiric comedy about the last supper from the perspective of Judas.",
        quote: "J raises his glass and tells of the importance of forgiveness, I think he knows, the bastard.",
        tags:['comedy', 'satire'],
        link:"#",
    },

    {
        title: 'New Home: Alabama',
        author:"Harry D. Silvermann",
        summary: "1952, Alabama, a new arriver in town takes up a job at the local post office, slowly adjusting to life in the area, learning its people and their habits. What they don't know is that this new arriver is actually a scout, from a distant planet on the brink of extinction, searching for a new planet to inhabit. This book details his periodic reports of his findings.",
        quote: "There is preexisting infrastructure for a separation of races (black and white colored skin here) that could easily be converted for our uses.",
        tags:['sci-fi','drama','historical','aliens'],
        link:'#',
    },

    {
        title:"Nomadish",
        author: "Gaming Nomad",
        summary: "A quick guide to following your dreams and remembering the importance of play.",
        quote: "Yeahh Bebyyyyy!",
        tags:['comedy','self-help','gaming'],
        link:"#",
    },

    {
        title: "Working with the Dead",
        author: "Frank Enstein",
        summary: "A moving, gruesome, often hilarious, collection of poems about the cadavers in the morgue where the author used to work as a young man.",
        quote: "She had beautiful eyes, I scooped them out for safekeeping.",
        tags:['comedy','poetry','horror'],
        link:"#",
    },

    {
        title: "A Genesis",
        author: "Ernst McGreggor",
        summary:"In his self-proclaimed magnum opus debute book, McGreggor tells the story of Aidan and Evett, founders of the First People - a race of beautiful pale bionic creatures, as they venture through existence seeking always to redeem their past mistakes and return home.",
        quote: "'Oh Aidan, are we doomed?' asked Evett, sobbing artificial tears of recycled water from her cooling system, her beautiful man-made eyes shining.",
        tags:['drama','religious','sci-fi'],
        link:"#",
    },

    {
        title: "Captive at Sea",
        author:"The Rox Sisters",
        summary: "The Rox Sisters are back with yet another 18th century romance set in the carribeans, if you liked Pirates of the Carribean but wanted less Captain Jack Sparrow and more sexy scenes everywhere, this is the book for you.",
        quote: "She felt warm all over as she watched him, and for once couldn't blame the Caribbean sun.",
        tags:['historical','romance','adult','pirates'],
        link:'#',
    },
    // {
    //     title:,
    //     author:,
    //     summary:,
    //     quote:,
    //     tags:[],
    //     link:,
    // },
]


bookList.forEach(book=>{
    let aBook = new Book(book.title, book.author, book.summary, book.quote, book.tags, book.link);
    aBook.addBook()
})


// DAILY RECOMMENDATION
const recommendationPreview = document.querySelector('div.recommendation-preview');
const recommendationTextDiv = document.querySelector('div.recommendation-text');
const recommendationBookDiv = document.querySelector('div.recommendation-book');

class Recommendation extends Book {
    constructor(title, author, summary, quote, tags, link, recommendationText){
        super(title, author, summary, quote, tags, link);
        this.recommendationText = recommendationText;
    }

// add a modal with the full book, (+ add the recommendation text below the buttons ?)

    AddBookRecommendation(){
        const bookDiv = this.createBook();
        recommendationBookDiv.append(bookDiv);
    }

    createBookPreview() {
        // this is only the cover of the book, with classes to stop it from being interactive
        const bookDiv = this.createBookDiv();
        const bookWrapper = this.createBookWrapper();
        const bookFront = this.createBookCover();
        bookWrapper.classList.add('not-interactive', 'preview')
        bookFront.classList.add('preview')

        bookWrapper.append(bookFront);
        bookDiv.append(bookWrapper);
        recommendationPreview.append(bookDiv);
    }

}

let recommendationInfo = {
    title: "Working with the Dead",
    author: "Frank Enstein",
    recommendationText: "Moody, morbid, somewhat romantic and just brimming with dark humour, perfect for shocking your family (and some unsuspecting kids) on Halloween!",
}
const findBookInfo = bookList.find(book => book.title === recommendationInfo.title && book.author=== recommendationInfo.author);

const todaysRecommendation = new Recommendation(findBookInfo.title, findBookInfo.author, findBookInfo.summary, findBookInfo.quote, findBookInfo.tags, findBookInfo.link, findBookInfo.recommendationText);
todaysRecommendation.createBookPreview()
todaysRecommendation.AddBookRecommendation()

recommendationTextDiv.textContent = recommendationInfo.recommendationText;


const recommendationModal = document.querySelector('.recommendation-modal');
recommendationPreview.addEventListener('click', ()=>{
    recommendationModal.toggleAttribute('data-visible');
})

recommendationModal.addEventListener('click',(e)=>{
    if(e.target===recommendationModal || e.target.classList.contains('close')) {
        recommendationModal.toggleAttribute('data-visible');
    }
})






// the book event listeners are put after the daily recommendation so that they apply to the recommendation book too
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


const bookFronts = document.querySelectorAll('.bk-front:not(.preview)');
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

