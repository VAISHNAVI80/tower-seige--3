class Box{
    constructor(x, y, width, height) {
        var options = {
          'isStatic':false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this. Visiblity= 255;
      }


      score (){

        if(this.Visiblity<0&&this.Visiblity>-105){
        score=score+1;

        }

      }




      display(){
        push();
       
        if(this.body.speed < 2){
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
         }
         else{
           World.remove(world, this.body);
           push();
           this.Visiblity = this.Visiblity - 5;
           tint(255,this.Visiblity);
           pop();
         }
        pop();
      }
}