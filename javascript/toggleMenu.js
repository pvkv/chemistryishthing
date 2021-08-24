let isOpened = false;

const overflowLi = document.getElementsByClassName('overflowLi')
const watermarks = document.querySelectorAll('.watermarks:not(watermark-1), .watermarks:not(watermark-2)')

const list = document.querySelector('#overflow')
// console.log(list.target)
const body = document.body
const bg = document.getElementById('black-screen')

function toggle() {
    if (isOpened === false) {
        list.style.display = 'block'
        body.style.overflow = 'hidden'
        bg.style.display = 'block'
        isOpened = !isOpened
        console.log("loop false " +isOpened)
    } else if (isOpened === true) {
        list.style.display = 'none'
        body.style.overflow = 'visible'
        bg.style.display = 'none'

        for (let i = 0; i < overflowLi.length; i++) {
            overflowLi[i].style.display = 'inherit';
        }
        for (let j = 0; j < watermarks.length; j++) {
            watermarks.item(j).style.display = 'inherit'
        }
        isOpened = !isOpened
        console.log("loop true " +isOpened)
    }
}

function toggleOxy() {
    if (isOpened === false) {
        for (let i = 0; i < overflowLi.length; i++) {
            if (overflowLi[i].getAttribute('id') === 'deOxy') {
                overflowLi[i].style.display = 'none'
                for (let j = 0; j < watermarks.length; j++) {
                    watermarks.item(j).style.display = 'none'
                }
            }
        }
        isOpened !=isOpened
        toggle()
    } else if (isOpened === true) {
        isOpened !=isOpened
    }
}

function toggleDeoxy() {
    if (isOpened === false) {
        for (let i = 0; i < overflowLi.length; i++) {
            if (overflowLi[i].getAttribute('id') === 'oxy') {
                overflowLi[i].style.display = 'none'
            }
        }
        isOpened !=isOpened
        toggle()
    } else if (isOpened === true) {
        isOpened !=isOpened
    }
}