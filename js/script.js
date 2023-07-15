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

AOS.init()

$('.mobile-menu-board').on('click', function (){
    const thisElem = $(this);
    if(thisElem.hasClass(active)){
        mobileMenu.removeClass(active)
        thisElem.removeClass(active)
        body.removeClass(hidden)
    } else {
        mobileMenu.addClass(active)
        thisElem.addClass(active)
        body.addClass(hidden)
    }
})


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

const menu_bars = document.querySelector('#menu-bars')
const menu_item_mobile = document.querySelector('.menu-item-mobile')

menu_bars.addEventListener('click', ()=>{
    menu_item_mobile.classList.toggle('active')
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

    if(num >= buttons_span.length){
        num = 0
    } else if(num < 0){
        num = buttons_span.length-1
    }
    clearActive()
    buttons_span[num].classList.add('active')
    slider_image[num].classList.add('active')

}