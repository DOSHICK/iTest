const headerBurger = document.getElementById('header-burger')
const headerBottom = document.getElementById('header-bottom')

const burgerOnClickHandler = () =>{
    const switcher = (condition) =>{
        switch (condition) {
            case 'open':
                    headerBurger.classList.add('active')
                    headerBottom.classList.add('active')
                break;
            case 'hide':
                    headerBurger.classList.remove('active')
                    headerBottom.classList.remove('active')
                break;
        
            default:
                break;
        }
    
        
    }


    if(headerBottom.classList.contains('active') === false){
        switcher('open')
    }else{
        switcher('hide')
    }
}

headerBurger.onclick = () =>{
    burgerOnClickHandler()
}