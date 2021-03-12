input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.lightLevel())
})
basic.forever(function () {
    serial.writeValue("light", input.lightLevel())
    if (input.lightLevel() < 20) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
