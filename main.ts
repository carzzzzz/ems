radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == number) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
let number = 0
basic.showIcon(IconNames.Heart)
number = 0
radio.setGroup(69)
basic.forever(function () {
	
})
