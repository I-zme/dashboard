
// theme dropdown
const themeToggle = document.querySelector('.theme-dropdown-btn');
const themeDropDown= document.querySelector('.dropdown-content');
themeToggle.addEventListener('click',()=>{
    themeDropDown.toggleAttribute('data-visible');
    themeDropDown.hasAttribute('data-visible') ? themeDropDown.setAttribute('aria-expanded','false') : themeDropDown.setAttribute('aria-expanded','true');

})

document.addEventListener('click',(e)=>{
    if(!themeToggle.contains(e.target) && themeDropDown.hasAttribute('data-visible')){
        themeToggle.click()
    }
});


// navbar
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click',()=>{
    navToggle.toggleAttribute('data-expanded')
    if(navToggle.hasAttribute('data-expanded')){
        navToggle.setAttribute('aria-expanded', "true") 
        document.querySelector(':root').style = '--nav-width: var(--nav-expanded-width);';
    }
    else{
        navToggle.setAttribute('aria-expanded', "false")
        document.querySelector(':root').style = '--nav-width: var(--nav-min-width);';
    }

})


document.addEventListener('DOMContentLoaded',(e)=>{
    if(window.matchMedia("(min-width:50em)").matches){
        navToggle.click()
    }
})

window.addEventListener('resize',()=>{
    if(window.matchMedia("(max-width:50em)").matches){
        if(navToggle.hasAttribute('data-expanded')){
            navToggle.click()
        }
    }
    else if(!navToggle.hasAttribute('data-expanded')){
        navToggle.click()
    }
})

const navbar = document.querySelector('.sidebar');
navbar.addEventListener('click',(e)=>{
    if(e.target===navbar){
        navToggle.click()
    }
})


// announcements

class Announcement {
    constructor(title, text){
        this.title = title,
        this.text = text;
    }

    addAnnouncement() {
        const container = document.querySelector('.announcements-container');
        
        const postit = document.createElement('div');
        postit.classList.add('post-it');
        const postitInner = document.createElement('div');
        postitInner.classList.add('post-it-inner');
        const postitTitle = document.createElement('h3');
        const postitPara = document.createElement('p');
        postitTitle.textContent = this.title;
        postitPara.textContent = this.text;

        postitInner.append(postitTitle, postitPara);
        postit.append(postitInner);
        container.append(postit);
    }
}


const announcementsList = [
    {   
        title: "New Website!!!",
        text: "We changed up some things, but don't worry, it's the same site you know and love :)",
    },

    {   
        title:"Webinar on December 3rd",
        text: "Join us for our webinar with author Allan Van Kronen for a lecture about how he wrote 50 books in 50 days!",
    },
    {   
        title:"New books available in print!",
        text: "Max Bogus, The Rox Sisters, Vera Bong and more now have books available in select shops.",
    },
    {   
        title:"One Week to Deadline",
        text: "One more week for the CoLibrary Annual Writing Competition Deadline (October 31st), the subject is 'daily grind', get writing!",
    },

    // {
    //     title:,
    //     text:,
    // },
]

announcementsList.forEach(item=>{
    let anouncementPostit = new Announcement(item.title, item.text);
    anouncementPostit.addAnnouncement();
})

// making the announcements container scrollable with thumbnails and arrows
const annoucementsContainer = document.querySelector('.announcements-container');
const announcementsWidth = parseInt(getComputedStyle(document.body).getPropertyValue('--post-it-size'),10);

const thumbnailContainer = document.querySelector('.thumbnails-container');
function hightlightThumbnails(){
    thumbnailContainer
        .querySelectorAll('.thumbnail.highlighted')
        .forEach(elem => elem.classList.remove('highlighted'));
    const index = Math.floor(annoucementsContainer.scrollLeft / announcementsWidth);
    thumbnailContainer
        .querySelector(`div[data-id="${index}"]`)
        .classList.add('highlighted');
}

function scrollToElement(elem) {
    const index = parseInt(elem.dataset.id, 10);
    annoucementsContainer.scrollTo(index * announcementsWidth,0);
}

const announcementSlides = document.querySelectorAll('.post-it')
thumbnailContainer.innerHTML += [...announcementSlides]
    .map((slide, i)=>  `<div class="thumbnail" data-id="${i}"></div>`)
    .join('');


thumbnailContainer.querySelectorAll('.thumbnail').forEach(elem => {
    elem.addEventListener('click',()=>{
        scrollToElement(elem)
    });
});

annoucementsContainer.addEventListener('scroll', event => hightlightThumbnails());

// const anouncementNavigation = document.querySelector('.post-it-navigation');
const leftArrow = document.querySelector('button.left-arrow');
const rightArrow = document.querySelector('button.right-arrow');

leftArrow.addEventListener('click', ()=>{
    const elem = thumbnailContainer.querySelector('.thumbnail.highlighted').previousSibling;
    scrollToElement(elem)
})

rightArrow.addEventListener('click', ()=>{
    const elem = thumbnailContainer.querySelector('.thumbnail.highlighted').nextSibling;
    scrollToElement(elem);
})


const firstThumbnail = thumbnailContainer.firstElementChild
const lastThumbnail = thumbnailContainer.lastElementChild

function arrowClassCallback(mutationsList, arrow) {
    mutationsList.forEach(mutation =>{
        if(mutation.target.classList.contains('highlighted')) {
            arrow.setAttribute('disabled','')
        }
        else {
            arrow.removeAttribute('disabled','')
        }
    })
}

const firstChildMutationer = new MutationObserver(mutationsList => arrowClassCallback(mutationsList, leftArrow))
const lastChildMutationer = new MutationObserver(mutationsList => arrowClassCallback(mutationsList, rightArrow))

firstChildMutationer.observe(firstThumbnail, {attributes: true})
lastChildMutationer.observe(lastThumbnail, {attributes: true})
