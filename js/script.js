// Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika  hamburger menu di Klik
document.querySelector('#hamburger-menu').onclick=()=>{
    navbarNav.classList.toggle('active');
}

// click di luarsidebar utk  menghilangkannav
const  hamburger=document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})

// $(window).scroll(function(){
//     var wScroll=$(this).scrollTop();

//     if(wScroll > $('.menu').offset().top-1000){
//         $('.menu .row .menu-card .thumbnail').addClass('muncul')
//     }
    
// })

// event pda saatlinkdi klik
// $('.page-scroll').on('click',function(e){

//     // ambil isi href
//     var tujuan=$(this).attr('href');
    
//     // tangkap element  yang bersangkutan
//     var elemenTujuan=$(tujuan);

//     // pindahkan scroll
//     $('body').animate({
//         scrollTop:elemenTujuan.offset().top -50
//     },1000);

//     e.preventDefault()

// })