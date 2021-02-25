class Rope{
    constructor(bodyA, x, y,){
        var options = {
            bodyA: bodyA,
            pointB: {x: this.x ,y:this. y},
            stiffness: 1,
            angularStiffness: 1,
            length:250,
        }
        this.x = x
        this.y = y
        this.pointB = pointB
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    attach(body){
        this.Rope.bodyA = body;
    }

    fly(){
        this.Rope.bodyA = null
    }

    display(){
        if (this.rope.bodyA){
            var pointA = this.Rope.bodyA.position;
            var pointB = this.pointB
            push()
            stroke(48,22,8)
            strokeWeight(3);
            line(pointB.x, pointB.y, pointA.x, pointA.y)
        }
    }
}

