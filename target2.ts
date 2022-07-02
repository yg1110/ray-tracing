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

    length_squared = ():number => {
        return (this.x * this.x) + (this.y * this.y) + (this.z * this.z)
    }

    length = ():number => {
        return Math.sqrt(this.length_squared());
    }

    normalize = () => {
        this.setX(this.getX() / this.length())
        this.setY(this.getY() / this.length())
        this.setZ(this.getZ() / this.length());
        return this
    }

    Mul = (rhs:number | Vec3):Vec3 => {
        if(typeof rhs === 'number'){
            this.setX(this.getX() * rhs)
            this.setY(this.getY() * rhs)
            this.setZ(this.getZ() * rhs)
        }
        else if(typeof rhs === 'object'){
            this.setX(this.getX() * rhs.getX())
            this.setY(this.getY() * rhs.getY())
            this.setZ(this.getZ() * rhs.getZ())
        }
        else {}
        return this
    }

    Div = (rhs:number | Vec3):Vec3 => {
        if(typeof rhs === 'number'){
            this.setX(this.getX() * 1.0 / rhs)
            this.setY(this.getY() * 1.0 / rhs)
            this.setZ(this.getZ() * 1.0 / rhs)
        }
        else if(typeof rhs === 'object'){
            this.setX(this.getX() * 1.0 / rhs.getX())
            this.setY(this.getY() * 1.0 / rhs.getY())
            this.setZ(this.getZ() * 1.0 / rhs.getZ())
        }
        else {}
        return this
    }

    Add = (rhs:number | Vec3):Vec3 => {
        if(typeof rhs === 'number') {
            this.setX(this.getX() + rhs)
            this.setY(this.getY() + rhs)
            this.setZ(this.getZ() + rhs)
        }
        else if(typeof rhs === 'object') {
            this.setX(this.getX() + rhs.getX())
            this.setY(this.getY() + rhs.getY())
            this.setZ(this.getZ() + rhs.getZ())
        }
        else {}
        return this
    }

    Index = (index:number):number | null => {
        if(this.getVector().length <= index) return null;
        else return this.getVector()[index];
    }
}

const neg = (v:Vec3):Vec3 => {
    v.setX(-v.getX())
    v.setY(-v.getY())
    v.setZ(-v.getZ())
    return v
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

const main = () => {
    const vector1 = new Vec3(2.0, 2.0, 2.0);
    const vector2 = new Vec3(3.0, 2.0, 1.0);
    const unitVector = vector1.normalize()
    // const multiple = vector1.Mul(3);
    // const division = vector1.Div(3);
    // const addition = vector1.Add(3);
    // const dotVector = dot(vector1, vector2)
    // const negative = neg(vector1);
    // const dotCross = cross(vector1, vector2)

    // console.log(negative.getVector())
    // console.log(multiple.getVector())
    // console.log(division.getVector())
    // console.log(addition.getVector())
    // console.log(vector1.Index(2))
    // console.log(dotVector)
    // console.log(dotCross.getVector())
    console.log(unitVector.getVector())
}

main();
