import Vec3, {dot} from "./Vector";
import Hitable from "./Hittable";
import Ray from "./Ray";
import HitRecord from "./HitRecord";

// 광선이 교차하면, 교차된 지점의 정보를 보관하는 객체
// 광선이 교차할 수 있는 구 입니다. Hittable을 상속받아 구현하는 컨크리트 클래스 입니다.
class Sphere extends Hitable {
    public Point = new Vec3(0.0, 0.0, 0.0);
    constructor(vector:Vec3) {
        super();
        this.Point = vector;
    }

    hit(r: Ray, t_min: number, t_max: number, rec: HitRecord): boolean {
        const DO = dot(r.getDirection(), r.getOrigin())
        const PD = dot(rec.normal, r.getDirection());
        const DD = dot(r.getDirection(), r.getDirection());
        const OP = dot(r.getOrigin(), rec.normal);
        const OO = dot(r.getOrigin(), r.getOrigin());
        const PP = dot(rec.normal, rec.normal);
        const a = DD;
        const b = 2 * DO - 2 * PD;
        const c = -2 * OP + OO + PP - rec.t *  rec.t
        const t = (b * b - 4.0 * a * c);
        return t_min < t && t < t_max ? true : false;
    }
}

export default Sphere;