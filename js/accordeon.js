const list = document.getElementById('accordeon')
list.addEventListener('click', function openAccordeon(event){
   
   const openClass = 'acc-li-open'
    if (event.target.classList.contains('acc-opener')) {
        let content = event.target.parentNode
        
        if (content.classList.contains(openClass)) {
            content.classList.remove(openClass)
        } else {
            content.classList.add(openClass);
        }
    }
    
})

