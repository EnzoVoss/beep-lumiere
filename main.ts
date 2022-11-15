let ldr = 0
function Beep () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P2, 0)
    basic.pause(300)
}
basic.forever(function () {
    ldr = pins.analogReadPin(AnalogPin.P1)
    if (ldr > 86) {
        Beep()
        Beep()
    }
})
