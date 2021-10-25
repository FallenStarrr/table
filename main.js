let table = document.querySelector('tbody')
let name = document.querySelector('.name')
  let fam = document.querySelector('#fam')
  let date = document.querySelector('#date')
let search = document.querySelector('input[type=search]')

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
    console.log(el)
}) 



window.onload = () => {
table.innerHTML = localStorage.getItem('hi')
}

srchBtn.addEventListener('click', () => {
 let value =search.value

let res = localStorage.getItem('hi').toString()
let cells = document.querySelectorAll('td')
let rows = document.querySelectorAll('tr')


 if (res.includes(value)) {
        for (row of rows) {
          let val = row.querySelector('td').textContent
          if (val !== value) {
            row.style.visibility = 'hidden'
          } 
        }
 }
})
