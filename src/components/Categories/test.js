const data = require('../../data/data.json')



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result
}

let result = getRandomInt(0,8)

const level1 = data.javascript_array_methods.level[0].one[`${result}`]

const question1 = level1.question
const answer1 = level1.answer

console.log(level1)
console.log(`q1: ${question1} ||||||||| a1: ${answer1}`)




let result1 = getRandomInt(0,7)

const level2 = data.javascript_array_methods.level[1].two[`${result1}`]

const question2 = level2.question
const answer2 = level2.answer

console.log(level2)
console.log(`q1: ${question2} ||||||||| a1: ${answer2}`)

