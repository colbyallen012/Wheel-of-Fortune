import $ from 'jquery';


let domUpdates = {

    startGame (game) {
        game.startGame($('.nameInput').eq(0).val(), $('.nameInput').eq(1).val(), $('.nameInput').eq(2).val())

    },

    changeNames() {
        $('.player').eq(0).text($('.nameInput').eq(0).val())
        $('.player').eq(1).text($('.nameInput').eq(1).val())
        $('.player').eq(2).text($('.nameInput').eq(2).val())
    },

    changeCategory(category) {
        $('.category').text(category)
    },
    
    changeClue(clue) {
        $('.clue').text(clue)
    },

    checkLetterGuess(splitAnswer, usedArray, game, e) {
        splitAnswer.forEach((letter, index) => {
            if(usedArray.includes(letter) && !usedArray.includes('') ) {
                console.log(usedArray.includes(letter))
                $('.clueLetter').eq(index).text(letter)
                $('.clueLetter').eq(index).css("background-color", "green")
            } else {
                $('.clueLetter').eq(index).css("background-color", "white")
                // $('.letters').css("background-color", "red")
            }
        })
    },

    clearAnswerBoard() {
        $('.clueLetter').empty().css('background-color', 'white')
    },

    toggleSpin() {
        $('.spinButton').attr('disable', '');
    },

    resetNames() {
        $('.player').eq(0).text('Player 1')
        $('.player').eq(1).text('Player 2')
        $('.player').eq(2).text('Player 3')
    }
}

export default domUpdates;