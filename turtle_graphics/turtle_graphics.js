

class Turtle {
	constructor(x = 0,y = 0) {
        this.x = x;
        this.y = y;
        this.position = [this.x, this.y];
        this.direction = 'east';
        this.pointsSoFar = [this.position];
	}

  	forward(num) {
        if (num < 0) {console.log('please give a valid number')
        }else{
        for (let i=0; i<num; i++){
            if (this.direction === 'east'){
              this.x=this.x+1;
              (this.pointsSoFar.push([this.x,this.y]))
            }else if (this.direction === 'south'){
              this.y=this.y+1;
              (this.pointsSoFar.push([this.x,this.y]))
            }else if (this.direction === 'west'){
              this.x -= 1;
              this.pointsSoFar.push([this.x,this.y])
            }else if (this.direction === 'north'){
              this.y -= 1;
              this.pointsSoFar.push([this.x,this.y])
              }
            }
        }
        this.position = this.pointsSoFar[this.pointsSoFar.length-1]
        this.x = this.position[0]
        this.y = this.position[1]
        return this.position
        
    }
    
    
    right () {
        if (this.direction === 'east'){
        this.direction = 'south'
        }else if (this.direction === 'south'){
        this.direction = 'west'
        }else if (this.direction === 'west'){
        this.direction  = 'north'
        }else{
        this.direction = 'east'
        }return this.direction
        }


    left () {
          if (this.direction === 'east'){
          this.direction = 'north'
          }else if (this.direction === 'north'){
          this.direction = 'west'
          }else if (this.direction === 'west'){
          this.direction  = 'south'
          }else{
          this.direction = 'east'
          }return this.direction
        }
    

    allPoints(){
     return this.pointsSoFar
    }
    
    print(){
       console.log (allPoints())
        // 🐢🐾

    }
 
}  

let flash = new Turtle(0,0)

flash.forward(2)
flash.right()
flash.forward(2)
// console.log(flash.position)
// console.log(flash.pointsSoFar)
flash.right()
flash.forward(2)
flash.right()
flash.forward(2)
flash.right()
flash.forward(2)
console.log(flash.pointsSoFar)
// console.log(flash.pointsSoFar)
// console.log(flash.direction)
// console.log(flash.pointsSoFar)
// flash.left()
// flash.forward(5)
//  console.log(flash.position)
//  console.log(flash.pointsSoFar)
//   .right()
//   .forward(5)
//   .right()
//   .forward(5)
//   .print()
// console.log (flash.position)
// flash.forward(5)
// console.log (flash.position)
// console.log (flash.pointsSoFar)


  