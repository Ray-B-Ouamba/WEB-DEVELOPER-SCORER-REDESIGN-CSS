let total = 0

document.querySelector('#webDevScore').addEventListener('click', scoreZero)
document.querySelector('#html').addEventListener('click', scoreHtml)
document.querySelector('#css').addEventListener('click', scoreCss)
document.querySelector('#javaScript').addEventListener('click', scoreJavaScript)
document.querySelector('#reactJs').addEventListener('click', scoreReactJs)
document.querySelector('#nodeJs').addEventListener('click', scoreNodeJs)
document.querySelector('#python').addEventListener('click', scorePython)
document.querySelector('#php').addEventListener('click', scorePhp)

function scoreZero() {
  total = 0
  document.querySelector('#placeToPutResult').innerText = total
}

function scoreHtml() {
  total = total + 10
  document.querySelector('#placeToPutResult').innerText = total
}

function scoreCss() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total
}

function scoreJavaScript() {
  total = total + 20
  document.querySelector('#placeToPutResult').innerHTML = total
}
function scoreReactJs() {
  total = total + 5
  document.querySelector('#placeToPutResult').innerHTML = total 

}
function scoreNodeJs() {
  total = total + 20
  document.querySelector('#placeToPutResult').innerHTML = total

}
function scorePython() {
total = total + 20
document.querySelector('#placeToPutResult').innerHTML = total
}

function scorePhp() {
total = total + 20 
document.querySelector('#placeToPutResult').innerHTML = total 
}