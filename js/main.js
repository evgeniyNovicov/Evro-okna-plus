function tab(triger = '', selector = '') {
    const tabBtn = document.querySelectorAll(triger);
    const tabContent = document.querySelectorAll(selector);
    tabContent.forEach((block, number) => {
        block.style.display = 'none';
        // block.classList.add('animate__animated','animate__backInLeft')
        if (number == 0) {
            block.style.display = 'flex';
        }
    });
    tabBtn.forEach((btn, i) => {
        if (i == 0) {
            btn.classList.add('active');
        }
        btn.addEventListener('click', function () {
            btn.classList.add('active')
            tabBtn.forEach(item => {
                if (btn === item) {
                } else {
                    item.classList.remove('active')
                }
            })
            tabContent.forEach((block, number) => {
                block.style.display = 'none';
                if (number == i) {
                    block.style.display = 'flex';
                }
            })
        })
    });
}
tab(".examples__button_wrap", ".examples__item");



let openModal1Btn = document.querySelector('.header-button')
let modal1Content = document.querySelector('.test__modal-wrap')
let modal2Content = document.querySelector('.test__modal-wrap2')
let modalCloseBtn = document.querySelector('.modal__close-btn')
let modalCloseBtn2 = document.querySelector('.modal__close-btn2')

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

