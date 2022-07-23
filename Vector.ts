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

    getIndex = (index:number):number | null => {
        if(this.getVector().length <= index) return null;
        else return this.getVector()[index];
    }

    add = (rhs:number | Vec3):Vec3 => {
        if (typeof rhs === 'number') {
            return new Vec3(this.getX() + rhs, this.getY() + rhs, this.getZ() + rhs);
        }
        else {
            return new Vec3(this.getX() + rhs.getX(), this.getY() + rhs.getY(), this.getZ() + rhs.getZ());
        }
    }

    sub = (rhs:number | Vec3):Vec3 => {
        if (typeof rhs === 'number') {
            return new Vec3(this.getX() - rhs, this.getY() - rhs, this.getZ() - rhs);
        }
        else {
            return new Vec3(this.getX() - rhs.getX(), this.getY() - rhs.getY(), this.getZ() - rhs.getZ());
        }
    }

    mul = (rhs:number | Vec3):Vec3 => {
        if (typeof rhs === 'number') {
            return new Vec3(this.getX() * rhs, this.getY() * rhs, this.getZ() * rhs);
        }
        else {
            return new Vec3(this.getX() * rhs.getX(), this.getY() * rhs.getY(), this.getZ() * rhs.getZ());
        }
    }

    div = (rhs:number | Vec3):Vec3 => {
        if (typeof rhs === 'number') {
            return new Vec3(this.getX() / rhs, this.getY() / rhs, this.getZ() / rhs);
        }
        else {
            return new Vec3(this.getX() / rhs.getX(), this.getY() / rhs.getY(), this.getZ() / rhs.getZ());
        }
    }
}


export const length_squared = (v:Vec3):number => {
    return v.getX() * v.getX() + v.getY() * v.getY() + v.getZ() * v.getZ();
}

export const length = (v:Vec3):number => {
    return Math.sqrt(length_squared(v));
}

export const unit_vector = (v:Vec3):Vec3 => {
    return  v.div(length(v));
}

export const neg = (v:Vec3):Vec3 => {
    return new Vec3(-v.getX(), -v.getY(), -v.getZ())
}

export const dot = (u:Vec3, v:Vec3):number => {
    return u.getX() * v.getX() + u.getY() * v.getY() + u.getZ() * v.getZ();
}

export const cross = (u:Vec3, v:Vec3):Vec3 => {
    return new Vec3(
        u.getY() * v.getZ() - u.getZ() * v.getY(),
        u.getZ() * v.getX() - u.getX() * v.getZ(),
        u.getX() * v.getY() - u.getY() * v.getX()
    )
}

export default Vec3;