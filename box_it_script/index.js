let arrOfArgs = process.argv.slice(2)
// console.log (arrOfArgs) // [arg 1, arg 2]

function drawLine(num){
  let line = "\u2501"
    for (let i=0; i<num; i++){
        line += "\u2501"
    }
  return line
}
//console.log(drawLine(8))

let num = 8 //have to go back and set the funtion based on length eventually

function drawTopBorder (num){
  let topLeftCorner = "\u250F"
  let topRightCorner = "\u2513"
  return topLeftCorner + drawLine(num) + topRightCorner
}
//console.log (drawTopBorder())

function drawMiddleBorder (num){
  let middleLeft = "\u2523"
  let middleRight = "\u252B"
  return middleLeft + drawLine(num) + middleRight
}
//console.log (drawMiddleBorder())

function drawBottomBorder (num){
  let bottomLeftCorner = "\u2517"
  let bottomRightCorner = "\u251B"
  return bottomLeftCorner + drawLine(num) + bottomRightCorner
}
//console.log (drawBottomBorder())

function drawBarsAround (name){
  return `\u2503${name}\u2503`
}
// console.log (drawBarsAround("nina"))

//potential last step??
//.forEach(name => `${drawTopBorder()}\n${drawBarsAround(name)}\n${drawBottomBorder()})
//if (name === arrOfArgs.length - 1){return drawBottomBorder()}
// else return ${drawTopBorder()}\n${drawBarsAround(name)}\n${drawMiddleBorder()}`
function boxIt (arrOfArgs){
    for(let name of arrOfArgs){
      return `${drawTopBorder()}\n${drawBarsAround(name)}\n${drawBottomBorder()}`
    }
  }
//need to set it to be based on the array of strings and length of names