import Vec3, {dot, unit_vector} from "./Vector";
import HitableList from "./HittableList";
import HitRecord from "./HitRecord";
import {INFINITY} from "./utility";
import Hitable from "./Hittable";
import sphere from "./Sphere";
import hittableList from "./HittableList";


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
}

export const getRayColor = (r:Ray, world:hittableList):Vec3 => {
    let rec = new HitRecord();
    const isHit = world.hit(r, 0.0, INFINITY, rec);
    if(isHit) {
        // const P = r.at(t);
        // const V = unit_vector(P).sub(sphere);
        const V = rec.normal;
        return new Vec3(
            (V.getX() + 1.0)  * 0.5,
            (V.getY() + 1.0)  * 0.5,
            (V.getZ() + 1.0)  * 0.5
        );
    } else {
        const unit_direction = unit_vector(r.getDirection());
        const t = 0.5 * (unit_direction.getY() + 1.0);
        const color = new Vec3(1.0, 1.0, 1.0);
        return color.mul(1.0 - t).add(BLUESKY.mul(t))
    }
}

export default Ray;