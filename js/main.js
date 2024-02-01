let total = 0

document.querySelector('#pumpkin').addEventListener('click', makeZero)
document.querySelector('#dominosPizza').addEventListener('click', jumanji)
document.querySelector('#zebra').addEventListener('click', add9)
document.querySelector('#cantThinkOfAnything').addEventListener('click', sub2)
document.querySelector('#theBachelor').addEventListener('click', add100)



function makeZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
  document.querySelector('#pumpkin').style.backgroundColor = 'rgba(252, 243, 110, 0.8)'
  document.querySelector('#dominosPizza').style.backgroundColor = 'white'
  document.querySelector('#zebra').style.backgroundColor = 'white'
  document.querySelector('#cantThinkOfAnything').style.backgroundColor = 'white'
  document.querySelector('#theBachelor').style.backgroundColor = 'white'
}

function jumanji() {
  total = total + 3
  document.querySelector('#placeToPutResult').innerText = total
  document.querySelector('#dominosPizza').style.backgroundColor = 'rgba(252, 243, 110, 0.8)'
  document.querySelector('#pumpkin').style.backgroundColor = 'white'
  document.querySelector('#zebra').style.backgroundColor = 'white'
  document.querySelector('#cantThinkOfAnything').style.backgroundColor = 'white'
  document.querySelector('#theBachelor').style.backgroundColor = 'white'
}

function add9() {
  total = total + 9
  document.querySelector('#placeToPutResult').innerHTML = total
  document.querySelector('#dominosPizza').style.backgroundColor = 'white'
  document.querySelector('#pumpkin').style.backgroundColor = 'white'
  document.querySelector('#zebra').style.backgroundColor = 'rgba(252, 243, 110, 0.8)'
  document.querySelector('#cantThinkOfAnything').style.backgroundColor = 'white'
  document.querySelector('#theBachelor').style.backgroundColor = 'white'
}

function sub2() {
  total = total - 2
  document.querySelector('#placeToPutResult').innerHTML = total
  document.querySelector('#dominosPizza').style.backgroundColor = 'white'
  document.querySelector('#pumpkin').style.backgroundColor = 'white'
  document.querySelector('#zebra').style.backgroundColor = 'white'
  document.querySelector('#cantThinkOfAnything').style.backgroundColor = 'rgba(252, 243, 110, 0.8)'
  document.querySelector('#theBachelor').style.backgroundColor = 'white'
}
function add100(){
  total = total + 100
  document.querySelector('#placeToPutResult').innerHTML = total
  document.querySelector('#dominosPizza').style.backgroundColor = 'white'
  document.querySelector('#pumpkin').style.backgroundColor = 'white'
  document.querySelector('#zebra').style.backgroundColor = 'white'
  document.querySelector('#cantThinkOfAnything').style.backgroundColor = 'white'
  document.querySelector('#theBachelor').style.backgroundColor = 'rgba(252, 243, 110, 0.8)'
}
