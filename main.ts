let throttle = 0
let Arm = false
let Roll = 0
let Pitch = 0
input.onButtonPressed(Button.A, function () {
    if (throttle <= 40) {
        throttle += -5
    } else {
        throttle += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Arm) {
        Arm = false
    } else {
        Arm = true
    }
    throttle = 0
})
input.onButtonPressed(Button.B, function () {
    if (throttle < 40) {
        throttle += 5
    } else {
        throttle += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    Arm = false
    throttle = 0
})
basic.forever(function () {
    Roll = input.rotation(Rotation.Roll)
    Pitch = input.rotation(Rotation.Pitch)
    basic.clearScreen()
    if (Arm) {
        led.plot(0, 0)
    }
    led.plot(0, 4 - throttle / 25)
    led.plot((Roll + 45) / 22.5, (Pitch + 45) / 22.5)
})
