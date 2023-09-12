// 1
function arraySum(arr) {

    let sum = 0

    for (let i of arr) {
        sum += i
    }

    return sum
}
console.log(arraySum([1, 2, 3, 4, 5]))

// 2
function del(num) {

    let arr = []

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            arr.push(i)
        }
    }

    return arr
}
console.log(del(20))

// 3
function string(str) {
    return str.split('')
}
console.log(string('test'))

// 4
function reverseString(str) {
    return string(str)
        .reverse()
        .join('')
}
console.log(reverseString('test'))

// 5
function firstLetterToUpperCase(str) {

    let arr = string(str)
    arr[0] = arr[0].toUpperCase()

    return arr.join('')
}
console.log(firstLetterToUpperCase('test'))

// 6
function firstLetterInEachWordToUpperCase(str) {

    let arr = str.split(' ')
    let newArr = []

    for (let word of arr) {
        newArr.push(firstLetterToUpperCase(word))
    }

    return newArr.join(' ')
}
console.log(firstLetterInEachWordToUpperCase('hello world'))

// 7
function fillArr(num) {

    let arr = []

    for (let i = 1; i <= num; i++) {
        arr.push(i)
    }

    return arr
}
console.log(fillArr(10))

// 8
function sumOfDigits(num) {

    let str = num
        .toString()
        .split('')
    let sum = 0

    for (let n of str) {
        sum += +n
    }

    return sum
}
console.log(sumOfDigits(1234))

// 9
function year(num) {
    return num % 4 === 0 ? 'високосный' : 'не високосный'
}
console.log(year(2012))

// 10
function sec(num) {
    return Math.floor(num / (24*60*60))
}
console.log(sec(86400))

// 11
function randomElementFromArr(arr) {

    let index = Math.floor(Math.random() * (arr.length))

    return arr[index]
}
console.log(randomElementFromArr([1, 2, 3, 4]))

// 12
function basicNum(num) {
    return del(num).length === 2 ? 'простое' : 'не простое'
}
console.log(basicNum(14))

