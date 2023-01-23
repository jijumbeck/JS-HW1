var answer = "kjrngng"

function calculateDotProduct() {
    let x1 = document.getElementById('x1Dot').value
    let y1 = document.getElementById('y1Dot').value
    let z1 = document.getElementById('z1Dot').value

    let x2 = document.getElementById('x2Dot').value
    let y2 = document.getElementById('y2Dot').value
    let z2 = document.getElementById('z2Dot').value
    
    let result = x1 * x2 + y1 * y2 + z1 * z2

    let text = document.createTextNode(result)
    const answerDiv = document.getElementById('answerDot')
    answerDiv.innerHTML = result

    alert("Скалярное произведение равно " + result)

    console.log(result)

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

    let text = document.createTextNode(result)
    const answerDiv = document.getElementById('answerDis')
    answerDiv.innerHTML = result

    alert("Расстояние от точки до плоскости равно " + result.toFixed(2))

    console.log(result)

    return result
}