$(document).ready(function () {
    $('.kviz-slider').slick({
        fade: true,
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '.button-slider--prev',
        nextArrow: '.button-slider--next',
    })
})

let openModal1Btn = document.querySelector('.header-button')
let modal1Content = document.querySelector('.test__modal-wrap')
let modal2Content = document.querySelector('.test__modal-wrap2')
let modalCloseBtn = document.querySelector('.modal__close-btn')
let modalCloseBtn2 = document.querySelector('.modal__close-btn2')
let buttonBlocker1 = document.querySelector('.button-blocker--1')
let textRule1 = document.querySelector('.text-rule_wrap')
let textRule2 = document.querySelector('.text-rule_wrap2')
let kvizCheckboxes = document.querySelectorAll('.kviz-input')
let kvizLabel = document.querySelectorAll('.kviz-input_wrap')
let kvizLabelText = document.querySelectorAll('.kviz-input__text')
let kvizForm = document.querySelector('.kviz-form')
let kvizBtnNext = kvizForm.querySelector('.button-slider--next')
let buttonBlocker2 = document.querySelector('.button-blocker--2')
let kvizInput = document.querySelector('.kviz-input2')
let kvizInput2 = document.querySelector('.kviz-input3')
let buttonFinish = document.querySelector('.button-finish')
let kvizBtnPrev = document.querySelector('.button-slider--prev')
let kvizFinish = document.querySelector('.kviz-finish_wrap')


openModal1Btn.addEventListener('click', function () {
    modal1Content.style.display = 'block'
})

modalCloseBtn.addEventListener('click', function () {
    modal1Content.style.display = 'none'
    modal2Content.style.display = 'block'
})

modalCloseBtn2.addEventListener('click', function () {
    modal2Content.style.display = 'none'
})

buttonBlocker1.addEventListener('click', function () {
    textRule1.style.opacity = "1"
    setTimeout(() => {
        textRule1.style.opacity = "0"
    }, 2000)
})

kvizLabel.forEach((label, numb) => {
    label.addEventListener('click', function () {
        kvizCheckboxes.forEach( (elem, ind) => {
            if (elem.checked) {
                buttonBlocker1.style.display = 'none'
            }
        })
    })
})


kvizBtnNext.addEventListener('click', function () {
    buttonBlocker2.style.display = 'flex'
})
buttonBlocker2.addEventListener('click', function () {
    textRule2.style.opacity = "1"
    setTimeout(() => {
        textRule2.style.opacity = "0"
    }, 2000)
})

kvizInput.addEventListener('input', function () {
    buttonBlocker2.style.display = 'none'
})

kvizInput2.addEventListener('input', function () {
    buttonFinish.style.display = 'flex'
})

kvizBtnPrev.addEventListener('click', function() {
    buttonBlocker1.style.display = 'none'
    buttonBlocker2.style.display = 'none'
    buttonFinish.style.display = 'none'
})

buttonFinish.addEventListener('click', function(e) {
    // e.preventDefault()
    kvizFinish.style.display = 'block'


})


// kvizOpenBtn.addEventListener('click', function () {
//     kvizContent.style.left = '0%'
// })


// let kvizOpenBtn = document.querySelector('.test-button')
// let kvizContent = document.querySelector('.kviz_wrap')