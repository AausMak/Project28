class launcher {
  constructor (bodyA,pointB){
    
        var options = {
            bodyA: bodyA,
            bodyB: pointB,
            stiffness: 0.04,
            length: 10
    }

    this.pointB=pointB;
    this.launcher=Constraint.create(options);
    world.add(world,this.launcher)

  }


  display(){

    var pointA = this.launcher.bodyA.position;
    var pointB = this.pointB;
    strokeWeight(4);
    line(pointA.x, pointA.y, pointB.x, pointB.y);

}


}