let burger= document.querySelector('.burger')
let navbar= document.querySelector('.navbar');
let rightnav = document.querySelector('.rightnav');
let navlist= document.querySelector('.nav-list');
burger.addEventListener('click', ()=>{

    rightnav.classList.toggle('v-nav-resp')
    navbar.classList.toggle('h-nav-resp')
    navlist.classList.toggle('v-nav-resp')
})