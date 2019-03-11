// let length = process.argv[2].length

function drawLine(num){
  let line = ""
    for (let i=0; i<num; i++){
        line += "\u2501"
    }
  return line
}
//console.log(drawLine(8))

let num = 1 //have to go back and set the funtion based on length eventually

function drawTopBorder (){
  let topLeftCorner = "\u250F"
  let topRightCorner = "\u2513"
  return topLeftCorner + drawLine(num) + topRightCorner
}
//console.log (drawTopBorder())

function drawMiddleBorder (){
  let middleLeft = "\u2523"
  let middleRight = "\u252B"
  return middleLeft + drawLine(num) + middleRight
}
//console.log (drawMiddleBorder())

function drawBottomBorder (){
  let bottomLeftCorner = "\u2517"
  let bottomRightCorner = "\u251B"
  return bottomLeftCorner + drawLine(num) + bottomRightCorner
}
//console.log (drawBottomBorder())

function drawBarsAround (){}

function drawBarsAround (){}
