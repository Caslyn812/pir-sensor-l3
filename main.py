strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
pins.digital_write_pin(DigitalPin.P12, 0)
pins.digital_write_pin(DigitalPin.P13, 0)
while True:
    if pins.digital_read_pin(DigitalPin.P0) == 1:
        pins.digital_write_pin(DigitalPin.P12, 1)
        pins.digital_write_pin(DigitalPin.P13, 0)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        basic.pause(5000)
    else:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        pins.digital_write_pin(DigitalPin.P12, 0)
        pins.digital_write_pin(DigitalPin.P13, 0)

        