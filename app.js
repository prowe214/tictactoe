var turn = 1,
    x = [],
    o =[],
    winners = [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
              [1, 4, 7],
              [2, 5, 8],
              [3, 6, 9],
              [1, 5, 9],
              [3, 5, 7]
              ],
    box = document.getElementsByClassName('box')

for (var i = 0; i < box.length; i++) {
  box[i].points = i + 1
  box[i].addEventListener('click', function() {
    if (this.innerHTML === '') {
      if (turn % 2 === 0) {
        o.push(this.points)
        o.sort()
        this.innerHTML = '<p>O</p>'
        checkWinner(o)
        turn++
      } else {
        x.push(this.points)
        x.sort()
        this.innerHTML = '<p>X</p>'
        checkWinner(x)
        turn++
      }
    }
  })
}

function checkWinner (arr) {
  for (var i = 0; i < winners.length; i++) {
  var xp = 0,
      op = 0
    for (var j = 0; j < arr.length; j++) {
      if (winners[i].indexOf(arr[j]) > -1) {
        if (turn % 2 === 0) {
          op++
          console.log('op = ' + op)
        } else {
          xp++
          console.log('xp = ' + xp)
        }
      }
    }
    if (xp === 3) {
      alert('X wins!')
      boardreset()
    }
    if (op === 3) {
      alert('O wins!')
      boardreset()
    }
    if (turn === 9) {
      alert('Draw!')
      boardreset()
    }
  }
}

function boardreset () {
  turn = 0
  x = []
  o = []
  xp = 0
  op = 0
  for (var i = 0; i < box.length; i++) {
    box[i].innerHTML = ''
  }
}
