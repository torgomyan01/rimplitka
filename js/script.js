const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}
const img_widget = document.querySelectorAll('.image-widget')
const box_item = document.querySelectorAll('.box-item')

const { mobileMenu, body, imageWidget } = {
    mobileMenu: $('.mobile-menu'),
    body: $('body'),
    imageWidget: $('.image-widget'),
}
//
// AOS.init()
//
// $('.mobile-menu-board').on('click', function (){
//     const thisElem = $(this);
//     if(thisElem.hasClass(active)){
//         mobileMenu.removeClass(active)
//         thisElem.removeClass(active)
//         body.removeClass(hidden)
//     } else {
//         mobileMenu.addClass(active)
//         thisElem.addClass(active)
//         body.addClass(hidden)
//     }
// })


function clearActive(){
    img_widget.forEach(im=>{
        im.classList.remove('active')
    })
}

img_widget.forEach(el =>{
    el.addEventListener('click', ()=>{
        clearActive()
        el.classList.add('active')
    })
})

imageWidget.on('click', function (){
    imageWidget.addClass(opacity25);
    $(this).removeClass(opacity25)
})

const defaultInput = $('.def-input input');
const inpLabel = $('.def-input');

defaultInput.on('blur', function (){
    inpLabel.map((index, e) => {
        if($(e).children('input').val() === ''){
            $(e).removeClass(active);
        }
    })
})

defaultInput.on('focus', function (){
    $(this).parent().addClass(active);
})



/* menu   */

// const menu_bars = document.querySelector('#menu-bars')
const menuItemMobile = $('.menu-item-mobile');

// menu_bars.addEventListener('click', ()=>{
//     menu_item_mobile.classList.toggle('active')
// })
$('.mobile-menu-board').on('click', function (){
    if($(this).hasClass(active)){
        $(this).removeClass(active);
        menuItemMobile.removeClass(active);
    } else {
        $(this).addClass(active);
        menuItemMobile.addClass(active);
    }
})


// slider

const slider_image = document.querySelectorAll('.slider-image')
const slider_buttons = document.querySelector('.slider-buttons')
const left_btn = document.querySelector('.left-btn')
const right_btn = document.querySelector('.right-btn')

slider_image.forEach((elem, index)=>{
    const icons = document.createElement('div')
    icons.classList.add('icons')
    const icons_item = document.createElement('span')
    icons_item.classList.add('icon-item')
    icons.appendChild(icons_item)
    slider_buttons.appendChild(icons)
    if(index === 0){
        elem.classList.add('active')
        icons_item.classList.add('active')
    }

    if(index === slider_image.length -1){
        startSlider()
    }
})

function startSlider(){
    const buttons_span = document.querySelectorAll('.icon-item')
    buttons_span.forEach((elem,index)=>{
        elem.addEventListener('click', ()=>{
            buttons_span.forEach(elem => elem.classList.remove('active'))
            elem.classList.add('active')
            slider_image.forEach(elem => elem.classList.remove('active'))
            slider_image[index].classList.add('active')
        })
    })
}

left_btn.addEventListener('click', ()=>{
    ChangeSlider('minus')
})

right_btn.addEventListener('click', ()=>{
    ChangeSlider('plus')
})
let num = 0


function clearActive(){
    const buttons_span = document.querySelectorAll('.icon-item')
    buttons_span.forEach(elem =>{
        if(elem.classList.contains('active')){
            elem.classList.remove('active')
            slider_image.forEach(elem => elem.classList.remove('active'))
        }
    })

}


function ChangeSlider(numStatus){
    const buttons_span = document.querySelectorAll('.icon-item')

    numStatus === 'plus' ? num++ : num--
    console.log(num)
    if(num >= buttons_span.length){
        num = 0
    } else if(num < 0){
        num = buttons_span.length-1
    }
    clearActive()
    buttons_span[num].classList.add('active')
    slider_image[num].classList.add('active')

}

let plus = 'plus'

setInterval(()=>{
    const buttons_span = document.querySelectorAll('.icon-item')

    num++
    if(num >= buttons_span.length){
        num = 0
    } else if(num < 0){
        num = buttons_span.length-1
    }
    clearActive()
    buttons_span[num].classList.add('active')
    slider_image[num].classList.add('active')

},2000)


// text

const dots = document.getElementById("dots");
const moreText = document.getElementById("more");
const btnText = document.getElementById("myBtn");



function myFunction() {
    const title_mobile = document.querySelector('.title-mobile');

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Читать больше";
        moreText.style.display = "none";
        title_mobile.classList.add('text')
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Читать меньше";
        moreText.style.display = "inline";
        title_mobile.classList.remove('text')
    }
}


//........... Slider


$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

let statusSlider = true;

$(window).on('resize', function (){
    if($(window).width() <= 768 && statusSlider){
        statusSlider = false;
        console.log('sddddd')
        // $('.slider').slick({
        //     dots: true,
        //     infinite: false,
        //     speed: 300,
        //     slidesToShow: 5,
        //     slidesToScroll: 2,
        //     responsive: [
        //         {
        //             breakpoint: 1024,
        //             settings: {
        //                 slidesToShow: 3,
        //                 slidesToScroll: 1,
        //                 infinite: true,
        //                 dots: true
        //             }
        //         }
        //         // You can unslick at a given breakpoint now by adding:
        //         // settings: "unslick"
        //         // instead of a settings object
        //     ]
        // });

    }
}).resize()
