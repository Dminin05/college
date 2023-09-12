let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let result = document.getElementById("result")
let submitBtn = document.getElementById('submit')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let operation = '+'

submitBtn.onclick = function () {
    let res = calculate(input1, input2)
    res >= 0 ? result.style.color = 'green' : result.style.color = 'red'
    result.textContent = res
}

plus.onclick = function () {
    operation = '+'
}

minus.onclick = function () {
    operation = '-'
}

multiply.onclick = function () {
    operation = '*'
}

function calculate(input1, input2) {

    let num1 = +input1.value
    let num2 = +input2.value

    switch (operation) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2

    }

}
console.log(10)
