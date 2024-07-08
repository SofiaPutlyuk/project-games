const searchInput1 = document.getElementById('numberInput1')
const searchInput2 = document.getElementById('numberInput2')
const searchInput3 = document.getElementById('numberInput3')
document.addEventListener('keydown',function(event){
    if(event.key === 'Enter'){
    const array = [searchInput1.value, searchInput2.value,searchInput3.value]
    const item = Math.max(...array)
    console.log(item)
    const searchText = document.querySelector('.maxNumber')

    searchText.innerHTML = `
    Найбільше число, яке ви ввели -  ${item}
    `
    console.log(array)
    }
})