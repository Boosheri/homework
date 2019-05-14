

class Turtle {
	constructor(x = 0,y = 0) {
        this.x = x;
        this.y = y;
        this.position = [this.x, this.y];
        this.direction = 'east';
        this.pointsSoFar = [this.position];
        this.maxX = x
        this.maxY = y
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
        this.x = this.position[0];
        this.y = this.position[1];

        if (this.x > this.maxX){
        this.maxX = this.x
        }else if (this.y > this.maxY){
        this.maxY = this.y
        } return this
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
        }return this
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
          }return this
        }

    allPoints(){
    // console.log(this.pointsSoFar)
    return this.pointsSoFar
    }
    
    print(){
        let graph = [];
        for(let x = 0; x <= this.maxY; x++){
        let row = [];
        for(let y = 0; y <= this.maxX; y++){
          row.push('🐾');
        };
        graph.push(row);
      };
      // Array.from({length: this.maxY}).map(() => {
      //   let row = [];
      //   Array.from({length: this.maxX}).forEach(() => {
      //     row.push('.');
      //   });
      //   graph.push(row);
      // });
      // The above works, but isn't my code, so I had trouble understanding it

      console.log(`-- BEGIN LOG \n `)

      this.allPoints().forEach((point) => {
        graph[point[1]][point[0]] = '🐢';
      });
      graph.forEach((step) => {
          console.log(step.join(''));
        });
        // I still find the above confusing

      console.log(`-- END LOG \n `)
  }
}

let flash = new Turtle(0,0)
flash.forward(10)
flash.right()
flash.forward(5)
flash.right()
flash.forward(5)
flash.right()
flash.forward(2)
flash.right()
flash.forward(2)
flash.print()

const bash = new Turtle(0, 4).forward(3).left().forward(3);
bash.print();

new Turtle(0, 4)
  .forward(3)
  .left()
  .forward(3)
  .right()
  .forward(5)
  .right()
  .forward(8)
  .right()
  .forward(5)
  .right()
  .forward(3)
  .left()
  .forward(3)
  .print();