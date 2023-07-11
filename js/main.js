const tabs = document.querySelectorAll('.tab');
const links = document.querySelectorAll('.tabs__button');

if(links.length>0){
    tabs[0].style.display = "block";
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            tabs.forEach(tab => {
                tab.style.display = "none"
            })
            const activeTab = document.getElementById(event.target.dataset.open);
            activeTab.style.display = "block";
        })
    })
}

let reviewSlider = new Swiper('.tab', {
    wrapperClass: "tab__sliderwrapper",
    slideClass: "tab__slide",
    direction: 'horizontal',
    slidesPerView: 5,
    navigation:{
        prevEl: ".tab__prev",
        nextEl: ".tab__next",
    },
    breakpoints:{
        1300:{
            slidesPerView: "5",
        },
        900:{
            slidesPerView: "3",
        },
        320:{
            slidesPerView: "1",
        }
    }
});