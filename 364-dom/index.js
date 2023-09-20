// 1_5 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input = document.getElementById("input")
// let result = document.getElementById("result")
//
// input.addEventListener('blur', () => {
//     result.textContent = input.value
// })


// 2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let input1 = document.getElementById("input1")
// let input2 = document.getElementById("input2")
// let input3 = document.getElementById("input3")
// let button = document.getElementById("submit")
// let result = document.getElementById("result")
//
// button.onclick = () => {
//     result.textContent = +input1.value + +input2.value + +input3.value
// }


// 3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let input = document.getElementById("input")
// let result = document.getElementById("result")
//
// function sum() {
//     let sum = 0
//     for (let num of input.value) {
//         sum += +num
//     }
//     return sum
// }
//
// input.addEventListener('blur', () => {
//     result.textContent = sum()
// })


// 4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input = document.getElementById("input")
// let result = document.getElementById("result")
//
// function avg() {
//     let arr = input.value.split(',')
//     let res = arr.reduce((sum, elem) => {
//         return sum += +elem
//     }, 0)
//     return res/arr.length
// }
//
// input.addEventListener('blur', () => {
//     result.textContent = avg()
// })


// 5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let input1 = document.getElementById("input1")
// let input2 = document.getElementById("input2")
// let input3 = document.getElementById("input3")
// let input4 = document.getElementById("input4")
//
// input1.addEventListener('blur', () => {
//     let [name, surname, patronymic] = input1.value.split(' ')
//     input2.value = name
//     input3.value = surname
//     input4.value = patronymic
// })


// 6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).
// let input = document.getElementById("input")
//
// function firstLetterToUpperCase(str) {
//
//     let arr = str.split('')
//     arr[0] = arr[0].toUpperCase()
//
//     return arr.join('')
// }
//
// function firstLetterInEachWordToUpperCase(str) {
//
//     let arr = str.split(' ')
//     let newArr = []
//
//     for (let word of arr) {
//         newArr.push(firstLetterToUpperCase(word))
//     }
//
//     return newArr.join(' ')
// }
//
// input.addEventListener('blur', () => {
//     input.value = firstLetterInEachWordToUpperCase(input.value)
// })


// 7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let input = document.getElementById("input")
// let result = document.getElementById("result")
//
// function getLength(string) {
//     let arr = string.split(' ')
//     return arr.length
// }
//
// input.addEventListener('blur', () => {
//     result.textContent = getLength(input.value)
// })


// 8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let input = document.getElementById("input")
//
// input.addEventListener('blur', () => {
//     input.value = input.value.replaceAll('.', '-')
// })


// 9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let input = document.getElementById("input")
// let result = document.getElementById("result")
// let button = document.getElementById("button")
//
// button.onclick = () => {
//     let reverse = input.value
//         .split('')
//         .reverse()
//         .join('')
//     if (input.value === reverse) {
//         result.textContent = 'true'
//     }
//     else {
//         result.textContent = 'false'
//     }
// }


// 10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.getElementById("input")
// let result = document.getElementById("result")
//
// input.addEventListener('blur', () => {
//     let res = input.value
//         .split('')
//         .find(elem => {
//             return elem === '3'
//         })
//    if (res) {
//        result.textContent = 'true'
//    }
//    else {
//        result.textContent = 'false'
//    }
// })


// 11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let elems = document.querySelectorAll('p')
// let button = document.getElementById("button")
//
// button.onclick = () => {
//     elems.forEach((elem, id) => {
//         elem.textContent = id+1_5
//     })
// }


// 12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let links = document.querySelectorAll('a')
//
// links.forEach(elem => {
//     elem.textContent += elem.href
// })


// 13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let links = document.querySelectorAll('a')
//
// links.forEach(elem => {
//     if (elem.href.startsWith('https://')) {
//         console.log(1_5)
//         elem.textContent += '=>'
//     }
// })


// 14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let elems = document.querySelectorAll('p')
//
// elems.forEach(elem => {
//
//     elem.addEventListener('click', (elem) => {
//         elem.target.textContent = (+elem.target.textContent)**2
//     })
//
// })


// 15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let input = document.getElementById('input')
// let result = document.getElementById('result')
//
// input.addEventListener('blur', () => {
//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
//     let [day, month, year] = input.value.split('.')
//     let date = new Date(year, month, day, 0, 0, 0)
//     result.textContent = days[date.getDay()]
// })


// 16 Дан инпут. Реализуйте кнопочки +1_5, -1_5, которые будут увеличивать или уменьшать на 1_5 значение инпута. Сделайте так, чтобы это значение не могло стать меньше нуля.
// let input = document.getElementById('input')
// let minus = document.getElementById('minus')
// let plus = document.getElementById('plus')
//
//
// minus.onclick = () => {
//     if (+input.value !== 0) {
//         input.value = +input.value - 1_5
//     }
// }
//
// plus.onclick = () => {
//     input.value = +input.value + 1_5
// }


// 17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let input = document.getElementById('input')
// let elems = document.querySelectorAll('p')
//
// elems.forEach(elem => {
//
//     elem.addEventListener('click', (elem) => {
//         input.value = +input.value + 1_5
//     })
//
// })


// 18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let elems = document.querySelectorAll('.test')
//
// elems.forEach(elem => {
//     let str = elem.textContent.substring(0, 10)
//
//     elem.textContent = str + '...'
//
// })


// 19 Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1_5 до 100. Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// let input = document.getElementById('input')
//
// input.addEventListener('blur', () => {
//     let value = +input.value
//     if(value >= 1_5 && value <= 100) {
//         input.style.backgroundColor = 'green'
//     }
//     else {
//         input.style.backgroundColor = 'red'
//     }
// })


// 20 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let input = document.getElementById('input')
// let button = document.getElementById('button')
//
// function str(len) {
//     chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ';
//     var str = '';
//     for (var i = 0; i < len; i++) {
//         var pos = Math.floor(Math.random() * chrs.length);
//         str += chrs.substring(pos,pos+1_5);
//     }
//     return str;
// }
//
// button.onclick = () => {
//     input.value = str(8)
// }


// 21 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let input = document.getElementById('input')
// let button = document.getElementById('button')
//
// function change(str) {
//     return str.split('')
//         .sort(() => Math.random() - 0.5)
//         .join('')
// }
//
// button.onclick = () => {
//     input.value = change(input.value)
// }


// 22 Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let input = document.getElementById('input')
// let button = document.getElementById('button')
// let result = document.getElementById('result')
//
// function to(num) {
//     return (num - 32) / 1_5.8
// }
//
// button.onclick = () => {
//     result.textContent = to(+input.value)
// }


// 23 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let input = document.getElementById('input')
// let button = document.getElementById('button')
// let result = document.getElementById('result')
//
// function fact(num) {
//     if (num === 0) {
//         return 1_5;
//     }
//
//     else {
//         return num * fact(num - 1_5);
//     }
// }
//
// button.onclick = () => {
//     result.textContent = fact(+input.value)
// }


// 24 Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let button = document.getElementById('button')
let result = document.getElementById('result')

function solution(a, b, c) {
    let d = b**2 - 4*a*c

    console.log(d)

    if (d >= 0) {
        return {
            x1: (-b + d**0.5) / (2*a),
            x2: (-b - d**0.5) / (2*a)
        }
    }
    else {
        return false
    }
}

button.onclick = () => {
    let num1 = +input1.value
    let num2 = +input2.value
    let num3 = +input3.value
    let sol = solution(num1, num2, num3)
    result.textContent = sol.x1 + '    ' + sol.x2
}
