let a 
let b
let h
let answer

document.getElementById('button').addEventListener('click', calc)

function calc () {
  a = parseInt(document.getElementById('val1').value)
  b = parseInt(document.getElementById('val2').value)
  h = parseInt(document.getElementById('val3').value)
  answer = (a + b) / 2 * h

  alert(answer)
}