let Farenheit = 0
basic.forever(function () {
    basic.showString("" + input.temperature() + "C")
    Farenheit = input.temperature() * 9 / 5 + 32
    basic.showString("" + Farenheit + "F")
})
