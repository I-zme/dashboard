const root = document.documentElement;

// theme dropdown
const themeToggle = document.querySelector('.theme-dropdown-btn');
const themeDropDown= document.querySelector('.dropdown-content');
themeToggle.addEventListener('click',()=>{
    themeDropDown.toggleAttribute('data-visible');
    themeDropDown.hasAttribute('data-visible') ? themeDropDown.setAttribute('aria-expanded','false') : themeDropDown.setAttribute('aria-expanded','true');
})

const themes = document.querySelectorAll('.dropdown-content > span');
themes.forEach(theme => {
    theme.addEventListener('click',()=>{
        themes.forEach(theme => {
            theme.removeAttribute('data-checked','');
            theme.setAttribute('aria-selected','false');
        });

        theme.toggleAttribute('data-checked');
        theme.setAttribute('aria-selected','true');
        
        if(theme.getAttribute('id')==='light-theme'){
            root.removeAttribute('class', 'dark');
        }
        
        else if(theme.getAttribute('id')==='dark-theme'){
            root.setAttribute('class', 'dark');
        }
        
        else if(theme.getAttribute('id')==='device-theme'){
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                root.setAttribute('class', 'dark');
            }
            else{
                root.removeAttribute('class', 'dark')
            }
        }
        
    });
})


// clicking outside the div to close the dropdown
document.addEventListener('click',(e)=>{
    if(!(themeToggle.contains(e.target) || themeDropDown.contains(e.target)) && themeDropDown.hasAttribute('data-visible')){
            themeToggle.click()
    }
});

// change themes
document.addEventListener('DOMContentLoaded',()=>{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        root.setAttribute('class', 'dark');
    }
});



// navbar
const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click',()=>{
    navToggle.toggleAttribute('data-collapsed')
    if(navToggle.hasAttribute('data-collapsed')){
        navToggle.setAttribute('aria-expanded', "false");
        root.style.setProperty('--nav-width','var(--nav-min-width)');
        root.style.setProperty('--nav-bg-percentage','var(--nav-bg-min)');
    }
    else{
        navToggle.setAttribute('aria-expanded', "true")
        root.style.setProperty('--nav-width','var(--nav-expanded-width)');
        root.style.setProperty('--nav-bg-percentage','var(--nav-bg-expanded)');
    }

})

document.addEventListener('DOMContentLoaded',(e)=>{
    if(window.matchMedia("(max-width:50em)").matches){
        navToggle.click()
    }
})


window.addEventListener('resize',()=>{
    if(window.matchMedia("(max-width:50em)").matches){
        if(!navToggle.hasAttribute('data-collapsed')){
            navToggle.click()
        }
    }
    else if(navToggle.hasAttribute('data-collapsed')){
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
    constructor(title, text, link){
        this.title = title,
        this.text = text;
        this.link = link;
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

        const moreInfoButton = document.createElement('button');
        moreInfoButton.classList.add('post-it-link-btn');
        moreInfoButton.textContent = "see more...";
        const announcementLink = document.createElement('a');
        announcementLink.setAttribute('href', this.link);
        moreInfoButton.append(announcementLink);

        postitInner.append(postitTitle, postitPara, moreInfoButton);
        postit.append(postitInner);
        container.append(postit);
    }
}


const announcementsList = [
    {   
        title: "New Website!!!",
        text: "We changed up some things, but don't worry, it's the same site you know and love :)",
        link: "#",
    },

    {   
        title:"Webinar on December 3rd",
        text: "Join us for our webinar with author Allan Van Kronen for a lecture about how he wrote 50 books in 50 days!",
        link:"#",
    },
    {   
        title:"New books available in print!",
        text: "Max Bogus, The Rox Sisters, Vera Bong and more now have books available in select shops.",
        link:"#",
    },
    {   
        title:"One Week to Deadline",
        text: "One more week for the CoLibrary Annual Writing Competition Deadline (October 31st), the subject is 'daily grind', get writing!",
        link:"#",
    },

    {
        title: "A very exciting announcement",
        text:" This is something exciting and very long dfkjdskf sdjfhsdj fsdjfjs jjh jd sfdud ejjj ajdj jkdsfdjsfh jhjjdf jsj Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque inventore quam blanditiis nesciunt reiciendis numquam libero perferendis quidem facilis vel.",
        link: "#",
    },

    // {
    //     title:,
    //     text:,
    //     link:,
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


// timer
// let timer;

// setInterval()




// aside main container
const asideContainers = document.querySelectorAll('.aside-main');
const sideContainerAnnouncementsToggle = document.querySelector('button.tab-toggle.announcements-toggle');

function containerToggle(btnToggle,container){
    container.toggleAttribute('data-collapsed');
    if(container.hasAttribute('data-collapsed')) {
        container.setAttribute('aria-expanded', 'false');
        root.style.setProperty('--side-width', 'var(--side-min-width)');
        btnToggle.querySelector('span.visually-hidden').textContent = 'Expand';
    } 
    else {
        container.setAttribute('aria-expanded', 'true'); 
        root.style.setProperty('--side-width', 'var(--side-expanded-width)');
        btnToggle.querySelector('span.visually-hidden').textContent = 'Collapse';
    }
}

const asideMain = document.querySelector('.aside-main-container');
asideMain.addEventListener('click', (e)=>{
    if(e.target.closest('.tab-toggle')) {
        if(sideContainerAnnouncementsToggle.contains(e.target) && window.matchMedia("(min-width:50em)").matches){
            asideContainers.forEach(container => containerToggle(sideContainerAnnouncementsToggle, container));
        }
        else{
            containerToggle(e.target, e.target.closest('.aside-main'));
        }
    }
    else if(e.target.closest('.aside-grid-container')){
        if(window.matchMedia('(min-width: 50em)').matches){
            sideContainerAnnouncementsToggle.click();
        }
        else{
            e.target.closest('.aside-grid-container').querySelector('.tab-toggle').click()
        }
    }
    else if(e.target.classList.contains('aside-main')){
        if(window.matchMedia('(min-width: 50em)').matches){
            sideContainerAnnouncementsToggle.click();
        }
        else{
            e.target.querySelector('.tab-toggle').click()
        }
    }
    else if(e.target=== asideMain){
        sideContainerAnnouncementsToggle.click();
    }
});


window.addEventListener('resize',()=>{
    asideContainers.forEach(container =>{
        if(container.hasAttribute('data-collapsed')){
            containerToggle(container.querySelector('.tab-toggle'),container)
        }
    })
})

 