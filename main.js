
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