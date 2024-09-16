let calculateButton = document.getElementById("calculateButton")
calculateButton.addEventListener("click", () => {
    let a = Number(document.getElementById("a").value)
    let b = Number(document.getElementById("b").value)
    let x = Number(document.getElementById("x").value)
    const w = calculateW(a, b, x)
    const y = calculateY(a, b, x)
    document.getElementById("wAnswer").innerText = "W = " + w
    document.getElementById("yAnswer").innerText = "y = " + y
})

function calculateY(a, b, x) {
    const cos = Math.cos(x * x * x)
    const cosInPow = cos * cos
    const sqrt = Math.sqrt(a * a + b * b)
    const dividing = x / sqrt
    return cosInPow - dividing
}

function calculateW(a, b, x) {
    const sqrt = Math.sqrt(x * x + b)
    const sin = Math.sin(x + a)
    const sinInPow = sin * sin * sin
    return sqrt - (b * b) * sinInPow / x
}