input.onButtonPressed(Button.A, function () {
    pixel_array.showColor(neopixel.colors(NeoPixelColors.Red))
})
input.onButtonPressed(Button.B, function () {
    pixel_array.clear()
    pixel_array.show()
})
let pixel_array: neopixel.Strip = null
pixel_array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
