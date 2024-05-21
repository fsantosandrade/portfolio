const triggers = document.querySelectorAll('.item .trigger')

triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.closest('li')
        const isOpen = acordeon.classList.contains('open')

        if(isOpen){
            acordeon.classList.remove('open')
        }else{
            acordeon.classList.add('open')
        }
    })
})