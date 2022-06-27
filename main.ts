input.onButtonPressed(Button.A, function () {
    y += 1
})
input.onButtonPressed(Button.B, function () {
    x += 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    absmouse.click()
})
let x = 0
let y = 0
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
basic.forever(function () {
    absmouse.movexy(0, 0)
})
