directions = ['east', 'south', 'west', 'north']

class Turtle {
	constructor(x = 0,y = 0) {
        this.x = x;
        this.y = y;
        this.position = [];
        this.direction = directions[0];
        this.pointsSoFar = this.position;
	}

	forward(num) {
        for (let i=this.x; i<=num; i++){
            if (this.direction === 'east'){
                this.pointsSoFar.push([i,this.y])
                this.position = this.pointsSoFar.pop()
                }
            }
            //  if (this.direction === 'east')  {x=i}
            //  if (this.direction === 'south')  {y=i}
            //  if (this.direction === 'west')  {x-=i}
            //  if (this.direction === 'north')  {y-=i}
            
            // this.position = this.pointsSoFar.pop
            
            // return this.position
        }
	
	left() {

    }

    allPoints(){
        //all points that this turtle has stepped on.
        //this.point= all positions so far in an array of x/y coordinates
    }
    
    print(){
        // 🐢🐾

    }
 
}  

let flash = new Turtle(1,5)

// new Turtle(0, 0)
//   .forward(5)
//   .right()
//   .forward(5)
//   .right()
//   .forward(5)
//   .right()
//   .forward(5)
//   .print()