const themeToggle = document.querySelector('.theme-dropdow-btn');
const themeDropDown= document.querySelector('.dropdown-content');
themeToggle.addEventListener('click',()=>{
    themeDropDown.toggleAttribute('data-visible');
    themeDropDown.hasAttribute('data-visible') ? themeDropDown.setAttribute('aria-expanded','false') : themeDropDown.setAttribute('aria-expanded','true');

})