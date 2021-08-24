const button = document.getElementsByClassName('button')
const subject = document.getElementsByClassName('subject')
const bodyy = document.body

for (let i = 0; i< button.length; i++) {
    let originalHeight = bodyy.scrollHeight
    button[i].addEventListener("click", function() {
        let ccontent = this.nextElementSibling 
        let svg = this.lastElementChild;

        if (ccontent.style.maxHeight === '0px') {
            ccontent.style.display = 'block'
            ccontent.style.maxHeight = ccontent.scrollHeight + 'px'
            bodyy.style.height = originalHeight + ccontent.scrollHeight + 'px'
            ccontent.style.padding = '1em'
            svg.style.transform = 'rotateX(180deg)' 
        } else if (ccontent.style.maxHeight !== '0px') {
            setTimeout(() => {
                 bodyy.style.height = originalHeight+ 'px' 
                 ccontent.style.display = null
                }, 200);
            subject[0].style.height = originalHeight +  + 'px'
            ccontent.style.maxHeight = '0'
            ccontent.style.padding = ''
            svg.style.transform = ''
        }
    })
}