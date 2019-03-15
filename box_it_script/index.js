arrOfArgs = process.argv.slice(2)
// console.log (arrOfArgs)

function drawLine(num){
  let line = ""
    for (let i=0; i<num; i++){
        line += "\u2015"
    }
  return line
}
// console.log(drawLine(8))


function drawTopBorder (num){
  let topLeftCorner = "\u250E"
  let topRightCorner = "\u2512"
  return topLeftCorner + drawLine(num) + topRightCorner
}
// console.log (drawTopBorder(8))

function drawMiddleBorder (num){
  let middleLeft = "\u2523"
  let middleRight = "\u252B"
  return middleLeft + drawLine(num) + middleRight
}
// console.log (drawMiddleBorder(8))

function drawBottomBorder (num){
  let bottomLeftCorner = "\u2515"
  let bottomRightCorner = "\u251A"
  return bottomLeftCorner + drawLine(num) + bottomRightCorner
}
// console.log (drawBottomBorder(8))

function drawBarsAround (name, longest){
  let differenceFromLongest = longest - name.length
  let paddedName = name + " ".repeat(differenceFromLongest)
  return `\u2503${paddedName}\u2503`
}
// console.log (drawBarsAround("nina"))
function longestName (arrOfArgs) {
 let longest = arrOfArgs[0].length
  for(let name of arrOfArgs){
    if (name.length > longest){
      longest=name.length
    }
  }
  return longest
}

// console.log(longestName(["nina", "johnathan", "christopher", "sally"]))

function boxIt (arrOfArgs) {
  if (!arrOfArgs[0]){
    console.log("\u250E" + "\u2512" + "\n" + "\u2515" + "\u251A")
    return
  }
  let longest = longestName(arrOfArgs)
  console.log(drawTopBorder(longest))

  arrOfArgs.forEach(name => {
    console.log (drawBarsAround(name, longest))
    if (name === arrOfArgs[arrOfArgs.length-1]){
      console.log(drawBottomBorder(longest))
    }
    else
    console.log (drawMiddleBorder(longest))
  }
  )  
}


// boxIt(["nina Boosheri", "johnathan Jackson", "christopher Allgood", "sally Joseph"])
// boxIt()
boxIt(arrOfArgs)