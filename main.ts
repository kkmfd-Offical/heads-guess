function Start () {
	
}
input.onButtonPressed(Button.A, function () {
    game.addScore(1)
    basic.showIcon(IconNames.Yes)
})
input.onGesture(Gesture.ScreenUp, function () {
	
})
input.onGesture(Gesture.ScreenDown, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    Words = ["elephant ", "bee", "school"]
})
input.onButtonPressed(Button.B, function () {
    game.removeLife(1)
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    Words = ["elephant ", "bee", "school"]
    index = randint(0, Words.length - 1)
    basic.showString("" + (Words[index]))
})
let index = 0
let Words: string[] = []
music.playMelody("B A G F C G A B ", 120)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
