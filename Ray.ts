import Vec3 from "./Vector";

const SUNSET = new Vec3(247.0 / 255.9, 147.0/255.9, 27.0/255.9);
const BLUESKY = new Vec3(0.5, 0.7, 1.0);
class Ray {
    private origin = new Vec3(0.0, 0.0, 0.0)
    private direction = new Vec3(0.0, 0.0, 0.0)

    constructor(origin:Vec3, direction:Vec3) {
        this.origin = origin
        this.direction = direction
    }

    getOrigin = (): Vec3 => {
        return this.origin;
    }

    getDirection = (): Vec3 => {
        return this.direction;
    }

    at = (t:number) => {
       return this.direction.mul(t).add(this.origin)
    }

    getRayColor = ():Vec3 => {
        const unit_direction = this.getDirection().unit_vector();
        const t = 0.5 * (unit_direction.getY() + 1.0);
        const color = new Vec3(1.0, 1.0, 1.0);

        return color.mul(1.0 - t).add(BLUESKY.mul(t))
    }
}

export default Ray;