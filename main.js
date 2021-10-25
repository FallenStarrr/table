let table = document.querySelector('tbody')
let td = document.querySelectorAll('td')
let tr = document.querySelectorAll('tr')
let name = document.querySelector('.name')
  let fam = document.querySelector('#fam')
  let date = document.querySelector('#date')
let search = document.querySelector('input[type=search]')
let cells = document.querySelectorAll('td')
let rows = document.querySelectorAll('tr')

let srchBtn =  document.querySelector('.srch')
let btn = document.querySelector('.add')
btn.addEventListener('click',  () => {
   let tr = document.createElement('tr')
   let td = document.createElement('td')  
   let tdFam = document.createElement('td')  
   let tdDate = document.createElement('td')  
   td.textContent = name.value
   tdFam.textContent = fam.value
   tdDate.textContent = date.value
   tr.appendChild(td)
   tr.appendChild(tdFam)
   tr.appendChild(tdDate)
   table.appendChild(tr)
   const parsed = table.innerHTML
   localStorage.setItem('hi', parsed)
   name.value = ''
   
}) 



window.onload = () => {
table.innerHTML = localStorage.getItem('hi')
if (search.value === '') {
  
  for (let t of td) {
    t.style.background = 'white'
  }

  for (let t of tr) {
    t.style.background = 'white'
  }

}

}

srchBtn.addEventListener('click', () => {
 let value =search.value
console.log(value)

let cells = document.querySelectorAll('td')
console.log(cells.parentNode)
for ( let cell of cells) {
   
    if (cell.textContent === value) {
     cell.parentNode.style.background = 'orange'
    //  cell.nextElementSibling.style.background = 'orange'
    //  cell.nextElementSibling.nextElementSibling.style.background = 'orange'   
    } else  if (){
      cell.parentNode.style.background = 'red'
    }
    
}
 
})
