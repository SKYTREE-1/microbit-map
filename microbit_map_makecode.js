// micro:bit側（MakeCode JavaScript）
// Webページから U / D / L / R / X を受け取り、LEDに矢印を表示します。
// まずこのコードをMakeCodeに貼り付け、micro:bitへ転送してください。


bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    cmd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (cmd == "U") {
        basic.showArrow(ArrowNames.North)
    } else if (cmd == "D") {
        basic.showArrow(ArrowNames.South)
    } else if (cmd == "L") {
        basic.showArrow(ArrowNames.West)
    } else if (cmd == "R") {
        basic.showArrow(ArrowNames.East)
    } else if (cmd == "X") {
        basic.clearScreen()
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    }
})

input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallDiamond)
    bluetooth.uartWriteString("B\\n")
})

input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.SmallDiamond)
    bluetooth.uartWriteString("B\\n")
})

let cmd = ""
bluetooth.startUartService()
basic.showString("MAP")
basic.showIcon(IconNames.Rollerskate)
basic.forever(function () {
	
})

