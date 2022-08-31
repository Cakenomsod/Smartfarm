let Light = 0
OLED.init(128, 64)
basic.forever(function () {
    Light = Math.map(input.lightLevel(), 0, 255, Math.round(0), Math.round(100))
    Light = Math.round(Light)
    OLED.writeString("Light =")
    OLED.writeNumNewLine(Light)
    basic.pause(500)
    OLED.clear()
    tinkercademy.LED(DigitalPin.P5, OnOff.Off)
    tinkercademy.LED(DigitalPin.P6, OnOff.Off)
    tinkercademy.LED(DigitalPin.P7, OnOff.Off)
    if (Light > 30) {
        tinkercademy.LED(DigitalPin.P5, OnOff.On)
        tinkercademy.LED(DigitalPin.P6, OnOff.Off)
        tinkercademy.LED(DigitalPin.P7, OnOff.Off)
    } else if (Light <= 15) {
        tinkercademy.LED(DigitalPin.P5, OnOff.Off)
        tinkercademy.LED(DigitalPin.P6, OnOff.On)
        tinkercademy.LED(DigitalPin.P7, OnOff.Off)
    } else if (Light <= 30) {
        tinkercademy.LED(DigitalPin.P5, OnOff.Off)
        tinkercademy.LED(DigitalPin.P6, OnOff.Off)
        tinkercademy.LED(DigitalPin.P7, OnOff.On)
    }
})
