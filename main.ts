let Light = 0
let Swicth = 0
OLED.init(128, 64)
basic.forever(function () {
    Swicth = pins.analogReadPin(AnalogPin.P1)
    Light = Math.map(input.lightLevel(), 0, 255, Math.round(0), Math.round(100))
    Light = Math.round(Light)
    OLED.writeString("Switch =")
    OLED.writeNumNewLine(Swicth)
    basic.pause(500)
    OLED.clear()
    tinkercademy.LED(DigitalPin.P5, OnOff.Off)
    tinkercademy.LED(DigitalPin.P10, OnOff.Off)
    tinkercademy.LED(DigitalPin.P9, OnOff.Off)
    if (Light <= 15) {
        tinkercademy.LED(DigitalPin.P5, OnOff.On)
        tinkercademy.LED(DigitalPin.P10, OnOff.Off)
        tinkercademy.LED(DigitalPin.P9, OnOff.Off)
    } else if (Light <= 30) {
        tinkercademy.LED(DigitalPin.P5, OnOff.Off)
        tinkercademy.LED(DigitalPin.P10, OnOff.On)
        tinkercademy.LED(DigitalPin.P9, OnOff.Off)
    } else {
        tinkercademy.LED(DigitalPin.P5, OnOff.Off)
        tinkercademy.LED(DigitalPin.P10, OnOff.Off)
        tinkercademy.LED(DigitalPin.P9, OnOff.On)
    }
})
