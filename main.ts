let strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P13, 0)
while (true) {
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.digitalWritePin(DigitalPin.P13, 0)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(5000)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P13, 0)
    }
}
