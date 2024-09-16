const VARIANT_NUMBER = 9

const size = Number(prompt("Enter array size", "4"))
let p = new Array(size)
p[0] = VARIANT_NUMBER
for (let i = 1; i < size; i++) {
    p[i] = (p[i - 1] * 67 + 11) % 128
}
let a = new Array(size)
for (let i = 0; i < size; i++) {
    a[i] = p[i] - 64
}
console.log(a)

fillIndexRow(size)
fillValueRow(size)

const filteredSum = a.filter(element => checkElement(element))
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(filteredSum)

const answerElement = document.getElementById("resultValue").innerText = filteredSum

function checkElement(num) {
    const formattedNum = Math.abs(num)
    console.log(formattedNum)
    return formattedNum > 9 && formattedNum < 100 && formattedNum % 2 == 0
}

function fillIndexRow(tableLength) {
    let indexRow = document.getElementById("indexRow")
    for (let i = 0; i < tableLength; i++) {
        let indexColumn = document.createElement("th")
        indexColumn.innerText = "" + i
        console.log(indexColumn)
        indexRow.appendChild(indexColumn)
    }
}

function fillValueRow(tableLength) {
    let valueRow = document.getElementById("valueRow")
    for (let i = 0; i < tableLength; i++) {
        let indexColumn = document.createElement("td")
        indexColumn.innerText = "" + a[i]
        valueRow.appendChild(indexColumn)
    }
}