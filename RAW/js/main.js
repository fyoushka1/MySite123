$(document).ready(function(){
    $('.features__inner').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:true,
        slidesToShow:3,
        autoplay:true,
        autoplaySpeed:2000,
        responsive:[
            {
                breakpoint:999,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint:724,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    })
})
$(document).ready(function(){
    $('.about__inner').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true,
        slidesToShow:4,
        autoplay:true,
        autoplaySpeed:1500,
        responsive:[
            {
                breakpoint:1050,
                settings: {
                    slidesToShow:3,
                }
            },{
                breakpoint:788,
                settings: {
                    slidesToShow:2,
                }
            },{
                breakpoint:550,
                settings: {
                    slidesToShow:1,
                }
            }
        ]
    })
})      


const tabsBtn = document.querySelectorAll(".works__list-tab");
const tabsItems = document.querySelectorAll(".work__tab");

tabsBtn.forEach(function(item){
    item.addEventListener("click",function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if( ! currentBtn.classList.contains("active") ){

            tabsBtn.forEach(function(item){
                item.classList.remove("active");
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove("active");
            });
            
    
            currentBtn.classList.add("active");
            currentTab.classList.add("active");
        }
    
        
    });
});


AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 100, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

window.onscroll = function showHeader() {

    var header = document.querySelector('.header__inner');
  
    if(window.pageYOffset > 800){
      header.classList.add('header__fixed');
    } else{
      header.classList.remove('header__fixed');
    }
  }


  $('.menu__btn').on('click', function(){
    $('.menu__list').toggleClass('menu__list--active');
  });