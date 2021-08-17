class Link {
    constructor(bodyA, bodyB, pointBA, pointBB, roofA, roofB) {

        this.roofA = roofA;
        this.roofB = roofB;

        this.bodyA = bodyA;
        this.bodyB = bodyB.body;

        this.con = Constraint.create({
            bodyA: this.bodyA,
            bodyB: this.bodyB,
            pointB: {x: pointBA, y: pointBB},
            length: 300,
        });

        World.add(world, this.con);
    }

    display() {

        line(this.roofA, this.roofB, this.bodyA.position.x, this.bodyA.position.y);
    }
}