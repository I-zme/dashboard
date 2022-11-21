const themeToggle = document.querySelector('.theme-dropdow-btn');
const themeDropDown= document.querySelector('.dropdown-content');
themeToggle.addEventListener('click',()=>{
    themeDropDown.toggleAttribute('data-visible');
    themeDropDown.hasAttribute('data-visible') ? themeDropDown.setAttribute('aria-expanded','false') : themeDropDown.setAttribute('aria-expanded','true');

})

const navToggle = document.querySelector('.nav-toggle');
navToggle.addEventListener('click',()=>{
    navToggle.toggleAttribute('data-expanded')
    if(navToggle.hasAttribute('data-expanded')){
         navToggle.setAttribute('aria-expanded', "true") 
        document.body.style = 'grid-template-columns: minmax(max-content, 1fr) 4fr;';
    }
    else{
        navToggle.setAttribute('aria-expanded', "false")
        document.body.style = 'grid-template-columns: var(--nav-min-width) 4fr;';
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