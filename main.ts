basic.showString("Show intro or not? A: for yes B: for no")
input.onButtonPressed(Button.A, function () {
    basic.showString("Do you have preset questions coded on to this micro:bit program or will you add them manually? Press A if you have preset questons coded on, press B to add them manually")
})
let score: number
input.onButtonPressed(Button.B, function () {
    basic.showString("A or B")
    input.onButtonPressed(Button.A, function() {
        //pre-coded questions go in here in this format
        basic.showString("Example q: A or B?")
        input.onButtonPressed(Button.A, function () {
            basic.showString("Correct! next question")
            score += 1
        })
        input.onButtonPressed(Button.B, function () {
            basic.showString("Wrong! its A. next question")
        })
        //repeat structure for as many pre-coded q's
        basic.showString("Example q: A or B?")
        input.onButtonPressed(Button.A, function () {
            basic.showString("Correct! next question")
            score += 1
        })
        input.onButtonPressed(Button.B, function () {
            basic.showString("Wrong! its A. next question")
        })

        let starterString = "Good job you got a total score of ";
        basic.showString(starterString + score);
        // add these two lines above after last question is answered

    })
})

