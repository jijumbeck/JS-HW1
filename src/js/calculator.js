const numInputs = document.querySelectorAll('input[type=number]')

numInputs.forEach(function(input) {
  input.addEventListener('change', function(e) {
    if (e.target.value == '') {
      e.target.value = 0
    }
  })
})

function calculateDotProduct() {
    let x1 = document.getElementById('x1Dot').value
    let y1 = document.getElementById('y1Dot').value
    let z1 = document.getElementById('z1Dot').value

    let x2 = document.getElementById('x2Dot').value
    let y2 = document.getElementById('y2Dot').value
    let z2 = document.getElementById('z2Dot').value
    
    let result = x1 * x2 + y1 * y2 + z1 * z2
    let resultText = String("(" + x1 + ", " + y1 + ", " + z1 + ") * (" +  x2 + ", " + y2 + ", " + z2 + ") = " + result);

    localStorage.setItem('answerDot', resultText);

    saveOperation(resultText);

    return result
}

function calculateDistanceFromPointToPlane() {
    let x1 = document.getElementById('xDis').value
    let y1 = document.getElementById('yDis').value
    let z1 = document.getElementById('zDis').value

    let A = document.getElementById('ADis').value
    let B = document.getElementById('BDis').value
    let C = document.getElementById('CDis').value
    let D = document.getElementById('DDis').value

    if (A*A + B*B + C*C <= 0) {
        alert("Уравнение плоскости задано неверно.")
        return
    }
    
    let result = Math.abs(A * x1 + B * y1 + C * z1 + D) / Math.sqrt(A*A + B*B + C*C)
    let resultText = String("distance((" + x1 + ", " + y1 + ", " + z1 + "), " +  A + "x + " + B + "y + " + C + "z + " + D + " = 0) = " + result);

    localStorage.setItem('answerDist', resultText);

    saveOperation(resultText);

    return result
}

function saveOperation(operation) {
  let operationsCopy = localStorage.getItem('operations');
  let array = JSON.parse(operationsCopy)
  array.push(operation);
  localStorage.setItem('operations', JSON.stringify(array))
}