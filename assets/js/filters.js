const filtersList = document.querySelectorAll('.filters .filter')

function createSelects(element){
    let id = element.getAttribute('connected')
    let select = document.getElementById(id)

    let options = select.querySelectorAll('option')

    // let wrapper = element.querySelector('.filter__wrapper')
    let head = element.querySelector('.filter__head')
        let headActive = head.querySelector('.filter__active')
    let body = element.querySelector('.filter__body')

    options.forEach(option =>{
        if(option.getAttribute('value') !== ''&& option.getAttribute('value') !== null){
            let newItem = document.createElement('div')
            newItem.classList.add('filter__item')
            newItem.setAttribute('value', option.getAttribute('value'))
            newItem.textContent = option.textContent
            body.appendChild(newItem)
        }else{
            headActive.textContent = option.textContent
        }
    }) 
}

function syncSelects(id, item){

    let select = document.getElementById(id)
    console.log(select.value)
    select.value = item.getAttribute('value')
    console.log(select.value)
}


filtersList.forEach(element =>{
    let id = element.getAttribute('connected')

    createSelects(element)

    let wrapper = element.querySelector('.filter__wrapper')
    let head = element.querySelector('.filter__head')
        let headActive = head.querySelector('.filter__active')
    let body = element.querySelector('.filter__body')

    head.onclick = () =>{
        wrapper.classList.toggle('filter-open')
    }

    let listItems = body.querySelectorAll('.filter__item')
    listItems.forEach(item =>{
        item.onclick = () =>{
            wrapper.classList.toggle('filter-open')
            headActive.textContent = item.textContent

            syncSelects(id, item)
        }
    })
})


const filtersShow = document.getElementById('filters-show')
const background = document.getElementById('background')
const filtersContent = document.getElementById('filters-content')
filtersShow.onclick = () =>{
    filtersContent.classList.add('visible')
    background.classList.add('visible')
}
const filtersClose = document.getElementById('filters__close')
filtersClose.onclick = () =>{
    filtersContent.classList.remove('visible')
    background.classList.remove('visible')
}



