class Vec3 {
    private x:number = 0;
    private y:number = 0;
    private z:number = 0;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    getVector = ():number[] => {
        return [this.x, this.y, this.z]
    }

    getX = ():number => {
        return this.x;
    }

    setX = (x:number) => {
        this.x = x;
    }

    getY = ():number => {
        return this.y;
    }

    setY = (y:number) => {
        this.y = y;
    }

    getZ = ():number => {
        return this.z;
    }

    setZ = (z:number) => {
        this.z = z;
    }

    // length_squared = ():number => {
    //     return (this.x * this.x) + (this.y * this.y) + (this.z * this.z)
    // }
    //
    // length = ():number => {
    //     return Math.sqrt(this.length_squared());
    // }
    //
    // normalize = () => {
    //
    // }
    //
    // unit_vector = (v:Vec3):Vec3 => {
    //     return v
    // }
}

const Neg = (v:Vec3):Vec3 => {
    v.setX(-v.getX())
    v.setY(-v.getY())
    v.setZ(-v.getZ())
    return v
}

const Mul = (v:Vec3, rhs:number | Vec3):Vec3 => {
    if(typeof rhs === 'number'){
        v.setX(v.getX() * rhs)
        v.setY(v.getY() * rhs)
        v.setZ(v.getZ() * rhs)
    }
    else if(typeof rhs === 'object'){
        v.setX(v.getX() * rhs.getX())
        v.setY(v.getY() * rhs.getY())
        v.setZ(v.getZ() * rhs.getZ())
    }
    else {}
    return v
}

const Div = (v:Vec3, rhs:number | Vec3):Vec3 => {
    if(typeof rhs === 'number'){
        v.setX(v.getX() * 1.0 / rhs)
        v.setY(v.getY() * 1.0 / rhs)
        v.setZ(v.getZ() * 1.0 / rhs)
    }
    else if(typeof rhs === 'object'){
        v.setX(v.getX() * 1.0 / rhs.getX())
        v.setY(v.getY() * 1.0 / rhs.getY())
        v.setZ(v.getZ() * 1.0 / rhs.getZ())
    }
    else {}
    return v
}

const Add = (v:Vec3, rhs:number | Vec3):Vec3 => {
    if(typeof rhs === 'number') {
        v.setX(v.getX() + rhs)
        v.setY(v.getY() + rhs)
        v.setZ(v.getZ() + rhs)
    }
    else if(typeof rhs === 'object') {
        v.setX(v.getX() + rhs.getX())
        v.setY(v.getY() + rhs.getY())
        v.setZ(v.getZ() + rhs.getZ())
    }
    else {}
    return v
}

const Index = (v:Vec3, index:number):number | null => {
    if(v.getVector().length <= index) return null;
    else return v.getVector()[index];
}

const dot = (u:Vec3, v:Vec3):number => {
    return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
}

const cross = (u:Vec3, v:Vec3):Vec3 => {
    return new Vec3(
        u.getY() * v.getZ() - u.getZ() * v.getY(),
        u.getZ() * v.getX() - u.getX() * v.getZ(),
        u.getX() * v.getY() - u.getY() * v.getX()
    )
}

// const unit_vector = (v:Vec3) => {
//     return v
// }

const main = () => {
    const vector1 = new Vec3(1.0, 2.0, 3.0);
    const vector2 = new Vec3(3.0, 2.0, 1.0);
    // const negative = Neg(vector1);
    // const multiple = Mul(vector1, 3);
    // const division = Div(vector1, 3);
    // const addition = Add(vector1, 3);
    // const dotVector = dot(vector1, vector2)
    // const dotCross = cross(vector1, vector2)

    // console.log(negative.getVector())
    // console.log(multiple.getVector())
    // console.log(division.getVector())
    // console.log(addition.getVector())
    // console.log(Index(addition, 4))
    // console.log(dotVector)
    // console.log(dotCross.getVector())
}

main();
